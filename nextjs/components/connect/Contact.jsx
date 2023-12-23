"use client";

import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import axios from "axios";

import {
  SectionTitle,
  SectionWrapper,
  TextField,
  Toast,
  ButtonGroup,
  Button,
  LoadingSpinner,
} from "@/components/common";

export default function Contact() {
  return (
    <SectionWrapper>
      <SectionTitle title="Contact" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 mb-5">
        <SendMessageForm />

        <StaffDirectory />
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
        <div className="flex">
          <Button
            type="submit"
            className="w-full"
            disabled={status.type === "info"}
          >
            Submit
          </Button>
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

function StaffDirectory() {
  const [staffData, setStaffData] = useState(null);
  const [selected, setSelected] = useState(null);

  useEffect(function fetchStaffData() {
    async function fetchData() {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/staff-groups?_sort=id&populate=*`
        );

        const { data } = await response.json();

        setStaffData(data);
      } catch {
        console.log("error");
      }
    }
    fetchData();
  }, []);

  if (!staffData) return <LoadingSpinner />;

  staffData.sort((a, b) => a.id - b.id);
  const staffOptions = staffData.map((group) => {
    return group.attributes.name;
  });
  let staffMembers;
  if (selected) {
    const selectedGroup = staffData.filter(
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
        <div className="flex flex-col justify-between h-min md:h-[392px]">
          <table className="table mb-5">
            <tbody>
              {staffMembers.map((member) => (
                <tr key={member.name}>
                  <td className="p-0">
                    <p className="text-xl">{member.name}</p>
                  </td>
                  <td>
                    <p className="text-xl">{member.titleShort}</p>
                  </td>
                  <td>
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

          <div className="text-end">
            <button
              className="btn btn-primary capitalize text-xl"
              onClick={() => setSelected(null)}
            >
              See all staff
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
