import { cn } from "@/lib/utils";
import { Button } from "./Button";
import React, { useState } from "react";
import type { FormEvent } from "react";

export default function ContactForm() {
  const [responseMessage, setResponseMessage] = useState("");

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);
    const res = await fetch("/api/email", {
      method: "POST",
      body: formData,
    });
    const data = await res.json();
    if (data.message) {
      setResponseMessage(data.message);
    }
  }

  const formFields = [
    {
      name: "name",
      label: "Name",
      placeholder: "Your name",
    },
    {
      name: "surname",
      label: "Surname",
      placeholder: "Your surname",
    },
    {
      name: "email",
      label: "Email",
      wide: true,
      placeholder: "Your email",
    },
    {
      name: "phone",
      label: "Phone",
      placeholder: "Your phone number",
    },
    {
      name: "company",
      label: "Company",
      placeholder: "Acme Inc.",
    },
    {
      name: "linkedin",
      label: "LinkedIn Profile URL",
      wide: true,
      placeholder: "https://www.linkedin.com/in/username/",
    },
    {
      name: "location",
      label: "Location",
      description: "Where you're currently based",
      wide: true,
      placeholder: "Madrid, Spain",
    },
  ];

  return (
    <form
      onSubmit={submit}
      className="grid grid-cols-2 gap-6 bg-white/60 border border-white p-24 rounded-2xl w-full"
    >
      {formFields.map((field) => (
        <label
          className={cn("flex flex-col gap-1", field.wide && "col-span-2")}
        >
          <span className="text-sm">{field.label}</span>
          <span className="text-xs text-fg-muted">{field.description}</span>
          <input
            name={field.name}
            className="p-3 rounded font-mono"
            placeholder={field.placeholder}
          />
        </label>
      ))}
      <label className="flex flex-col gap-1 col-span-2">
        <span className="text-sm">Mensaje</span>
        <textarea
          name="message"
          className="p-3 rounded font-mono"
          placeholder="Mensaje"
        />
      </label>

      <Button className="self-right w-full col-span-2" type="submit">
        Contactanos
      </Button>
    </form>
  );
}
