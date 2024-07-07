"use client";
import React from "react";
import { locations } from "@/constants/const";
import IllustratedCard from "@/components/IllustratedCard/IllustratedCard";
import { FormEvent } from "react";

const Company = () => {
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const response = await fetch("/api/contact", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      alert("Message sent!");
    } else {
      alert("Failed to send message");
    }
  }
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col bg-orange gap-4 px-6 text-white text-center py-12 bg-hero-pattern bg-contain bg-top bg-no-repeat"
      >
        <h1 className="text-center text-3xl mb-6">Contact Us</h1>
        <p className="text-base">
          Ready to take it to the next level? Let’s talk about your project or
          idea and find out how we can help your business grow. If you are
          looking for unique digital experiences that’s relatable to your users,
          drop us a line.
        </p>
        <div>
          <div className="w-full py-2 border-b flex justify-between gap-2">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="bg-orange flex-grow"
            />
          </div>
          <div className="w-full py-2 border-b flex justify-between gap-2">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="bg-orange flex-grow"
            />
          </div>
          <div className="w-full py-2 border-b flex justify-between gap-2">
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              className="bg-orange flex-grow"
            />
          </div>
          <div className="w-full pt-2 pb-12 border-b flex justify-between gap-2">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              required
              className="bg-orange flex-grow"
            />
          </div>
        </div>

        <button
          type="submit"
          className="text-black bg-white w-40 mx-auto py-3 rounded-lg mt-8"
        >
          Submit
        </button>
      </form>
      <section className="pt-32">
        {locations.map((location) => (
          <IllustratedCard
            key={location.name}
            src={location.img}
            btn
            link={location.href}
            btnText="See Location"
            alt={location.name}
            title={location.name}
          />
        ))}
      </section>
    </div>
  );
};

export default Company;
