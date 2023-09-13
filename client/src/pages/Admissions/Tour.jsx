import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";

import {
  Button,
  SectionTitle,
  SectionWrapper,
  Input,
  Toast,
} from "../../components";

import tourImg from "../../assets/images/about/gift/display.jpg";

/**
 * NOTE: when user submits form, status is set to "info" which disables the submit button
 */

export default function ScheduleTourForm() {
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
      response = await axios.post("/api/send-admissions-email", data);
      reset(); // clear form inputs
      setStatus({ type: "success", message: response.data.message });
    } catch (error) {
      setStatus({ type: "error", message: error.response.data.message });
    }
  };

  return (
    <SectionWrapper>
      <SectionTitle title="Schedule Tour" />
      <div>
        <p className="font-gothic mb-10 lg:mb-20 text-xl text-center">
          Request a tour of our campus by filling out the form below or calling
          us at <a href="tel:9256859169">925.685.9169</a>
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-8 items-center">
        <div>
          <img src={tourImg} className="w-full rounded-lg hidden lg:block" />
        </div>
        <div>
          <form noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
            <Input
              id="name"
              label="Name"
              type="text"
              placeholder="enter your name"
              register={register}
              validations={{ required: "Please provide your name" }}
              errors={errors.name}
            />

            <Input
              id="email"
              label="Email"
              type="text"
              placeholder="enter your email"
              register={register}
              validations={{ required: "Please provide your email" }}
              errors={errors.email}
            />

            <Input
              id="message"
              label="Availability"
              type="textarea"
              placeholder="enter dates and times you are available to visit"
              register={register}
              validations={{
                required: "Please provide your availability",
                maxLength: 500,
              }}
              errors={errors.message}
            />
            <div className="flex justify-end gap-5">
              <div className="grow">
                {status.type && (
                  <Toast variant={status.type} message={status.message} />
                )}
              </div>
              <Button type="submit" disabled={status.type === "info"}>
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
    </SectionWrapper>
  );
}
