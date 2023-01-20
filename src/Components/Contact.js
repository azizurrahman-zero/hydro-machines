import React from "react";
import { useForm } from "react-hook-form";
import { FiPhoneCall } from "react-icons/fi";
import { MdMailOutline } from "react-icons/md";
import { BiMap } from "react-icons/bi";
import { Link } from "react-router-dom";

const Contact = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = async (data) => {
    const { name, email, password } = data;
    console.log(name, email, password);
  };
  return (
    <div
      id="contact"
      className="bg-[#0E1F51] rounded-3xl xl:py-20 lg:py-14 py-10 shadow-2xl lg:mx-20 sm:mx-10 mx-5 mt-20 w-[unset]"
    >
      <p className="2xl:pb-2 md:pb-0.5 pb-0 text-secondary text-center 2xl:text-3xl md:text-xl sm:text-lg font-bold text_raleway">
        Get in touch
      </p>
      <h1 className="2xl:text-6xl text-3xl sm:text-4xl font-bold text-accent text-center text_raleway">
        Hey! Let's Talk
      </h1>
      <div className="grid 2xl:grid-cols-[2fr_1fr] xl:grid-cols-[1.5fr_1fr] lg:grid-cols-2 gap-10  xl:pt-14 pt-10 xl:px-24 sm:px-10 px-5">
        <div className="card w-full bg-base-100">
          <div className="card-body">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <input
                  type="text"
                  placeholder="Name"
                  className="input focus:outline-offset-0 text-base bg-accent text-[#252525] font-medium text_raleway"
                  {...register("name", {
                    required: {
                      value: true,
                      message: "*Enter your name",
                    },
                  })}
                />
                <label className="label pt-0 pb-2.5">
                  {errors.name?.type === "required" && (
                    <span className="label-text-alt text-error">
                      {errors.name.message}
                    </span>
                  )}
                </label>
              </div>
              <div className="form-control">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="input focus:outline-offset-0 text-base bg-accent text-[#252525] font-medium text_raleway"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "*Enter an email",
                    },
                    pattern: {
                      value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                      message: "*Please enter a valid email",
                    },
                  })}
                />
                <label className="label pt-0 pb-2.5">
                  {errors.email?.type === "required" && (
                    <span className="label-text-alt text-error">
                      {errors.email.message}
                    </span>
                  )}
                  {errors.email?.type === "pattern" && (
                    <span className="label-text-alt text-error">
                      {errors.email.message}
                    </span>
                  )}
                </label>
              </div>
              <div className="form-control">
                <input
                  type="tel"
                  placeholder="Phone"
                  className="input focus:outline-offset-0 text-base bg-accent text-[#252525] font-medium text_raleway"
                  {...register("phone", {
                    required: {
                      value: true,
                      message: "*Enter a phone number",
                    },
                    pattern: {
                      value: /^[0-9]*$/,
                      message: "*Please enter a valid phone number",
                    },
                  })}
                />
                <label className="label pt-0 pb-2.5">
                  {errors.phone?.type === "required" && (
                    <span className="label-text-alt text-error">
                      {errors.phone.message}
                    </span>
                  )}
                  {errors.phone?.type === "pattern" && (
                    <span className="label-text-alt text-error">
                      {errors.phone.message}
                    </span>
                  )}
                </label>
              </div>
              <div className="form-control">
                <textarea
                  rows="5"
                  placeholder="Your Message"
                  className="textarea focus:outline-offset-0 text-base bg-accent text-[#252525] font-medium text_raleway"
                  {...register("message", {
                    required: {
                      value: true,
                      message: "*Enter your message",
                    },
                  })}
                />
                <label className="label pt-0 pb-2.5">
                  {errors.message?.type === "required" && (
                    <span className="label-text-alt text-error">
                      {errors.message.message}
                    </span>
                  )}
                </label>
              </div>
              <div className="form-control mt-3">
                <input
                  className="btn text-white normal-case font-semibold text-base bg-secondary border-none hover:border-none hover:bg-[#ed1b24bf] px-8 py-2.5 text_raleway"
                  type="submit"
                  value="Send Now"
                />
              </div>
            </form>
          </div>
        </div>
        <div className="card w-full bg-base-100">
          <div className="card-body justify-between gap-12 lg:gap-0">
            <div className="flex flex-col 2xl:gap-4 xl:gap-3 gap-5">
              <div className="flex lg:gap-4 sm:gap-5 gap-3 items-center">
                <div className="bg-accent sm:p-5 p-3 rounded-xl">
                  <FiPhoneCall className="2xl:text-5xl xl:text-4xl lg:text-2xl sm:text-5xl text-3xl text-secondary" />
                </div>
                <div>
                  <h4 className="text-secondary 2xl:text-2xl xl:text-lg lg:text-base sm:text-xl font-bold text_raleway">
                    Call Anytime
                  </h4>
                  <p className="text-primary font-semibold 2xl:text-base lg:text-sm sm:text-lg text-[10px]">
                    +880-2-58311364
                  </p>
                </div>
              </div>
              <div className="flex lg:gap-4 sm:gap-5 gap-3 items-center">
                <div className="bg-accent sm:p-5 p-3 rounded-xl">
                  <MdMailOutline className="2xl:text-5xl xl:text-4xl lg:text-2xl sm:text-5xl text-3xl text-secondary" />
                </div>
                <div>
                  <h4 className="text-secondary 2xl:text-2xl xl:text-lg lg:text-base sm:text-xl font-bold text_raleway">
                    Send Email
                  </h4>
                  <p className="text-primary font-semibold 2xl:text-base lg:text-sm sm:text-lg text-[10px]">
                    office@hydro-machines.com
                  </p>
                </div>
              </div>
              <div className="flex lg:gap-4 sm:gap-5 gap-3 items-center">
                <div className="bg-accent sm:p-5 p-3 rounded-xl">
                  <BiMap className="2xl:text-5xl xl:text-4xl lg:text-2xl sm:text-5xl text-3xl text-secondary" />
                </div>
                <div>
                  <h4 className="text-secondary 2xl:text-2xl xl:text-lg lg:text-base sm:text-xl font-bold text_raleway">
                    Visit Us
                  </h4>
                  <p className="text-primary font-semibold 2xl:text-base lg:text-sm sm:text-lg sm:block hidden">
                    15 New Baily Road, Bldg#04
                    <br />
                    Dhaka-1000, Bangladesh
                  </p>
                  <p className="text-primary font-semibold text-[10px] block sm:hidden">
                    15 New Baily Road, Bldg#04 Dhaka-1000, Bangladesh
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center justify-items-start 2xl:gap-24 lg:gap-20 sm:gap-28 gap-8">
              <Link to="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  className="fill-secondary"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                </svg>
              </Link>
              <Link to="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  className="fill-secondary"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                </svg>
              </Link>
              <Link to="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  className="fill-secondary"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
