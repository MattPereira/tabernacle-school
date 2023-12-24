"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";

import {
  SectionTitle,
  SectionWrapper,
  TextField,
  Toast,
  ButtonGroup,
} from "@/components/common";

export default function Contact({ directoryData }) {
  return (
    <SectionWrapper>
      <SectionTitle title="Contact" />
      <div className="grid grid-cols-1 2xl:grid-cols-2 gap-14 mb-5">
        <SendMessageForm />
        <StaffDirectory directoryData={directoryData} />
      </div>
    </SectionWrapper>
  );
}

function SendMessageForm() {
  const [status, setStatus] = useState({ type: null, message: null });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    setStatus({ type: "info", message: "Sending..." });
    let response;
    try {
      response = await axios.post("/api/send-contact-email", data);
      reset(); // clear form inputs
      setStatus({ type: "success", message: response.data.message });
    } catch (error) {
      console.log("error", error);
      setStatus({ type: "error", message: error.response.data.error });
    }
  };

  return (
    <div>
      <div className="mb-5">
        <h4 className="text-3xl text-center">Send Message</h4>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} noValidate autoComplete="off">
        <TextField
          id="name"
          label="Name"
          type="text"
          placeholder="enter your name"
          register={register}
          validations={{ required: "Please provide your name" }}
          errors={errors.name}
        />
        <TextField
          id="email"
          label="Email"
          type="text"
          placeholder="enter your email"
          register={register}
          validations={{ required: "Please provide your email" }}
          errors={errors.email}
        />
        <TextField
          id="message"
          label="Message"
          type="textarea"
          placeholder="enter your message"
          register={register}
          validations={{
            required: "Please provide a message",
            maxLength: 1000,
          }}
          errors={errors.message}
        />
        <div className="flex justify-end">
          <button
            className="btn btn-primary capitalize text-xl"
            type="submit"
            disabled={status.type === "info"}
          >
            Submit
          </button>
        </div>
        {status.type && (
          <div className="mt-5">
            <Toast variant={status.type} message={status.message} />
          </div>
        )}
      </form>
    </div>
  );
}

function StaffDirectory({ directoryData }) {
  const [selected, setSelected] = useState(null);

  directoryData.sort((a, b) => a.id - b.id);
  const staffOptions = directoryData.map((group) => {
    return group.attributes.name;
  });
  let staffMembers;
  if (selected) {
    const selectedGroup = directoryData.filter(
      (group) => group.attributes.name === selected
    )[0];

    const staffMembersData = selectedGroup.attributes.staff_members.data;

    staffMembers = staffMembersData.map((member) => ({
      id: member.id,
      name: member.attributes.name,
      titleShort: member.attributes.title_short,
      email: member.attributes.email,
    }));
  }

  return (
    <div className="">
      <div className="mb-10">
        <h4 className="text-3xl text-center">Staff Directory</h4>
      </div>

      {selected ? (
        <div className="flex flex-col justify-between h-min md:h-[392px] ">
          <div className="p-5 rounded-lg overflow-y-auto grow border rounded-lg mb-5">
            <table className="table">
              <tbody>
                {staffMembers.map((member) => (
                  <tr key={member.name}>
                    <td className="p-0">
                      <p className="text-xl">{member.name}</p>
                    </td>
                    <td>
                      <p className="text-xl">{member.titleShort}</p>
                    </td>
                    <td className="hidden md:inline-block">
                      <a
                        className="underline text-primary text-xl"
                        href={`mailto:${member.email}`}
                      >
                        {member.email}
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="text-end">
            <button
              className="btn btn-primary capitalize text-xl px-6"
              onClick={() => setSelected(null)}
            >
              Back
            </button>
          </div>
        </div>
      ) : (
        <ButtonGroup
          setSelection={setSelected}
          options={staffOptions}
          classNames="bg-alternate text-xl"
        />
      )}
    </div>
  );
}
