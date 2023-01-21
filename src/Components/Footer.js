import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";

import logo from "../Images/Logo/HydroMachines.png";

const Footer = () => {
  const getUpdate = (formData) => {
    emailjs
      .send("Hydro Machines", "HM Newsletter", formData, "gM5nfLrIyNCIvBFVQ")
      .then(
        () => {
          toast.success("Subscribed successfully!", {
            position: "top-right",
          });
          reset();
        },
        () => {
          toast.error("Error! Subscribe again.", {
            position: "top-right",
          });
        }
      );
  };

  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm();
  return (
    <footer className="footer md:justify-items-start justify-items-center md:mt-20 sm:mt-16 mt-14 2xl:px-40 lg:px-28 md:px-20 2xl:py-20 py-14 bg-[#0E1F51] text-white">
      <div className="gap-0 md:justify-items-start justify-items-center">
        <img className="2xl:w-20 w-16" src={logo} alt="logo" />
        <p className="text-accent pt-2 font-black 2xl:text-xl text-lg 2xl:tracking-wider tracking-wide text_raleway">
          Hydro Machines Ltd.
        </p>
        <p className="text-white pt-1 2xl:text-base text-sm 2xl:block hidden text_raleway">
          Supplying reliable machineries since 2005
        </p>
        <p className="text-sm text-accent font-medium 2xl:hidden block text_raleway">
          Copyright © {new Date().getFullYear()} - All right reserved
        </p>
      </div>
      <div className="lg:grid md:hidden md:justify-items-start justify-items-center">
        <span className="footer-title 2xl:text-lg text_raleway">Pages</span>
        <Link
          to="/about-us"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
          className="link link-hover 2xl:text-base font-medium text_raleway"
        >
          About Us
        </Link>
        <Link
          to="/services"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
          className="link link-hover 2xl:text-base font-medium text_raleway"
        >
          Our Services
        </Link>
        <Link
          to="/products"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
          className="link link-hover 2xl:text-base font-medium text_raleway"
        >
          Products
        </Link>
        <Link
          to="/events"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
          className="lg:hidden link link-hover 2xl:text-base font-medium text_raleway"
        >
          Events
        </Link>
      </div>
      <div className="md:hidden 2xl:grid md:justify-items-start justify-items-center">
        <p className="footer-title 2xl:text-lg text_raleway">Social</p>
        <div className="grid grid-flow-col gap-5">
          <Link to="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
            </svg>
          </Link>
          <Link to="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
            </svg>
          </Link>
          <Link to="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
            </svg>
          </Link>
        </div>
        <p className="2xl:text-base text-sm pt-2 text-accent font-medium text_raleway">
          Copyright © {new Date().getFullYear()} - All right reserved
        </p>
      </div>
      <div className="md:justify-items-start justify-items-center">
        <span className="footer-title 2xl:text-lg text_raleway">
          Newsletter
        </span>
        <div className="form-control w-80">
          <label className="label pt-0 px-0 justify-center md:justify-between">
            <span className="label-text text-center font-medium text-accent text_raleway">
              Enter your email address
            </span>
          </label>
          <form onSubmit={handleSubmit(getUpdate)}>
            <div className="relative">
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Email"
                className="input text-primary input-bordered w-full pr-16"
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
              <button className="btn absolute top-0 right-0 rounded-l-none normal-case font-semibold text-white text-base bg-secondary border-none hover:border-none hover:bg-[#ed1b24bf] px-5 py-2.5 text_raleway">
                Subscribe
              </button>
            </div>
            <label className="label py-0">
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
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
