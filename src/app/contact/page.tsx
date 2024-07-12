"use client";
import React, { useState } from "react";
import { locations } from "@/constants/const";
import IllustratedCard from "@/components/IllustratedCard/IllustratedCard";
import { FormEvent } from "react";
import Form from "@/components/Form/Form";

const Company = () => {
  const [isSuccessfullySent, setIsSuccessfullySent] = useState(false);
  const [sending, setSending] = useState(false);
  const [sender, setSender] = useState<string | null>(null);
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    setSending(true);

    if (response.ok) {
      setIsSuccessfullySent(true);
      form.reset();
      setSending(false);
      setSender(data.name);
    } else {
      setSending(false);
      const errorText = await response.text();
      console.error("Error:", errorText);
      alert("Failed to send message");
    }
  }
  return (
    <div>
      <Form
        handleSubmit={handleSubmit}
        isSuccessfullySent={isSuccessfullySent}
        sending={sending}
        sender={sender}
      />
      <section className="pt-32 md:mx-10 lg:flex justify-between xl:w-[1111px] xl:mx-auto">
        {locations.map((location) => (
          <IllustratedCard
            key={location.name}
            src={location.img}
            btn
            link={location.href}
            btnText="See Location"
            alt={location.name}
            title={location.name}
            noText={true}
          />
        ))}
      </section>
    </div>
  );
};

export default Company;
