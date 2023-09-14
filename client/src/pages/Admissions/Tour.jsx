import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";

import {
  Button,
  SectionTitle,
  SectionWrapper,
  TextField,
  Toast,
  Select,
} from "../../components";

import tourImg from "../../assets/images/about/gift/display.jpg";
{
  /* <div>
<img src={tourImg} className="w-full rounded-lg hidden lg:block" />
</div> */
}

const gradeLevelOptions = [
  { value: "Preschool", label: "Preschool" },
  { value: "Kindergarten", label: "Kindergarten" },
  { value: "1st Grade", label: "1st Grade" },
  { value: "2nd Grade", label: "2nd Grade" },
  { value: "3rd Grade", label: "3rd Grade" },
  { value: "4th Grade", label: "4th Grade" },
  { value: "5th Grade", label: "5th Grade" },
  { value: "6th Grade", label: "6th Grade" },
  { value: "7th Grade", label: "7th Grade" },
  { value: "8th Grade", label: "8th Grade" },
];

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
    console.log(data);
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
          Schedule a tour by filling out the form below or calling us at{" "}
          <a href="tel:9256859169" className="text-blue-600 underline">
            925.685.9169
          </a>
        </p>
      </div>
      <div>
        <div>
          <form
            className="w-full md:w-3/4 mx-auto"
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="mb-5">
              <h3 className="text-center text-2xl mb-5 underline">
                Student Information
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-8 items-center">
                <TextField
                  id="studentFirstName"
                  label="First Name"
                  type="text"
                  placeholder="student's first name"
                  register={register}
                  validations={{ required: "Please provide your first name" }}
                  errors={errors.studentFirstName}
                />

                <TextField
                  id="studentLastName"
                  label="Last Name"
                  type="text"
                  placeholder="students's last name"
                  register={register}
                  validations={{ required: "Please provide your last name" }}
                  errors={errors.studentLastName}
                />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-8 items-center">
                <Select
                  id="gradeLevel"
                  label="Grade Level"
                  placeholder="Choose grade level"
                  options={gradeLevelOptions}
                  register={register}
                  validations={{
                    required: "Please provide student's grade level",
                  }}
                  errors={errors.gradeLevel}
                />

                <TextField
                  id="birthdate"
                  label="Birthdate"
                  type="date"
                  placeholder="student's birthdate"
                  register={register}
                  validations={{
                    required: "Please provide student's birthdate",
                  }}
                  errors={errors.birthdate}
                />
              </div>
            </div>

            <div>
              <h3 className="text-center text-2xl mb-5 underline">
                Parent Information
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-8 items-center">
                <TextField
                  id="parentFirstName"
                  label="First Name"
                  type="text"
                  placeholder="your first name"
                  register={register}
                  validations={{ required: "Please provide your first name" }}
                  errors={errors.parentFirstName}
                />

                <TextField
                  id="parentLastName"
                  label="Last Name"
                  type="text"
                  placeholder="your last name"
                  register={register}
                  validations={{ required: "Please provide your last name" }}
                  errors={errors.parentLastName}
                />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-8 items-center">
                <TextField
                  id="email"
                  label="Email"
                  type="text"
                  placeholder="youremail@example.com"
                  register={register}
                  validations={{ required: "Please provide your email" }}
                  errors={errors.email}
                />

                <TextField
                  id="phoneNumber"
                  label="Phone Number"
                  type="tel"
                  placeholder="(123) 456-7890"
                  register={register}
                  validations={{ required: "Please provide your phone number" }}
                  errors={errors.phoneNumber}
                />
              </div>

              <TextField
                id="availability"
                label="Availability"
                type="textarea"
                placeholder="Campus tours are offered Mon-Fri from 9am - 2pm"
                register={register}
                validations={{
                  maxLength: 500,
                }}
                errors={errors.availability}
              />
            </div>

            <div className="w-full  ml-auto">
              <Button
                className="w-full"
                type="submit"
                disabled={status.type === "info"}
              >
                Submit
              </Button>
            </div>
            <div className="w-full h-16 flex flex-col justify-end">
              {status.type && (
                <Toast variant={status.type} message={status.message} />
              )}
            </div>
          </form>
        </div>
      </div>
    </SectionWrapper>
  );
}
