import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import "../components/styles.css";
import { BiCheckboxChecked } from "react-icons/bi";
import { ImPointDown } from "react-icons/im";
export const Hire_Page = () => {
  const [state, handleSubmit] = useForm("xpwpzekd");
  if (state.succeeded) {
    return (
      <p>Thanks for contacting Dev_Tonny! Response in less than 24 hours...</p>
    );
  }
  const Offer_Li =({ text })=> {
    return(
        <li className="flex gap-2 items-center"><BiCheckboxChecked color="green" size={24} /> {text} </li>
    )
  }
  return (
    <div className="hire">
      <h1>Let's Work Together</h1>
      <h2>What I offer! <ImPointDown /> </h2>
      <ul>
        <Offer_Li text={'Custom Web Application Development'} />
        <Offer_Li text={'Frontend Development { React, Next.js, TailwindCSS }'} />
        <Offer_Li text={'Backend Development { Python, Django, REST APIs }'} />
        <Offer_Li text={'DevOps & Deployment (Docker, AWS, CI/CD)'} />
      </ul>
      <h2>Why Hire Me?</h2>
      <ul>
      <Offer_Li text={'3+ years of experience in web development and project based learning.'} />
      <Offer_Li text={'Proven track record of delivering high-quality projects on time.'} />
      <Offer_Li text={'Strong focus on clean code, scalability, and user experience.'} />
      <Offer_Li text={'High skill problem solving and coming up with relevant solutions.'} />
      </ul>
      <h2>Ready to Get Started?</h2>
      <p>
        Fill out the form below, and I will get back to you within 24 hours. Let
        us bring your ideas to life!
      </p>

      <form onSubmit={handleSubmit}>
        <span className="details">
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Your Name"
          required
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Your Email"
          required
        />

        <ValidationError prefix="Email" field="email" errors={state.errors} />
        </span>
        <span className="message">
        <textarea
          name="message"
          id="message"
          placeholder="Write Message"
          rows={5}
          required
        ></textarea>
        <button type="submit" disabled={state.submitting}>
          Send Message
        </button>
        </span>
      </form>
      <h5>Thanks for Interacting With Dev_Tonny</h5>
      <h6> By Dev_Tonny &copy; CopyRight 2025</h6>
    </div>
  );
};
