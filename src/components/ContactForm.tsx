import { cn } from "@/lib/utils";
import { Button } from "./Button";
import React, { useState } from "react";
import type { FormEvent } from "react";
import { Asterisk, CaretRight } from "@phosphor-icons/react/dist/ssr";

export default function ContactForm() {
  const [responseMessage, setResponseMessage] = useState("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const formFields = [
    {
      name: "name",
      required: true,
      label: "Nombre",
      placeholder: "Juana",
    },
    {
      name: "surname",
      required: true,
      label: "Apellido",
      placeholder: "García",
    },
    {
      name: "email",
      required: true,
      label: "Email",
      wide: true,
      placeholder: "juanagarcia@gmail.com",
    },
    {
      name: "phone",
      label: "Telefono",
      description: "Número telefónico completo, incluyendo código de pais",
      placeholder: "+54 11 2345-6789",
    },
    {
      name: "company",
      label: "Empresa",
      description: "Actual o pasada",
      placeholder: "Acme Inc.",
    },
    {
      name: "linkedin",
      label: "Perfil de LinkedIn",
      wide: true,
      placeholder: "https://www.linkedin.com/in/username/",
    },
    {
      name: "location",
      label: "Ubicación",
      description: "Cuál es tu ubicación actual (Ciudad, País)",
      wide: true,
      placeholder: "Madrid, Spain",
    },
  ];

  const validateForm = (formData: FormData) => {
    const newErrors: { [key: string]: string } = {};
    formFields.forEach((field) => {
      if (field.required && !formData.get(field.name)) {
        newErrors[field.name] = `${field.label} is required.`;
      }
    });
    return newErrors;
  };

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);
    const validationErrors = validateForm(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({}); // Clear errors if validation passes

    const res = await fetch("/api/email", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    if (data.message) {
      setResponseMessage(data.message);
    }
  }

  return (
    <form
      onSubmit={submit}
      className="grid grid-cols-2 gap-3 md:gap-6 bg-white/60 border border-white p-6 md:p-12 rounded-2xl w-full"
    >
      {formFields.map((field) => (
        <label
          key={field.name}
          aria-required={field.required}
          className={cn(
            "flex flex-col col-span-2 gap-1",
            !field.wide && "md:col-span-1"
          )}
        >
          <span className="ml-1  inline-flex items-center">
            {field.label}{" "}
            {field.required && (
              <Asterisk size={14} className="text-red-500 ml-2" />
            )}
            {errors[field.name] && (
              <span className="ml-1 text-xs text-red-500">
                {errors[field.name]}
              </span>
            )}
          </span>
          {field.description && (
            <span className="ml-1 text-xs text-fg-muted mb-1">
              {field.description}
            </span>
          )}
          <input
            name={field.name}
            className={`p-3 rounded font-mono ${
              errors[field.name] ? "border-red-500" : ""
            }`}
            placeholder={field.placeholder}
          />
        </label>
      ))}
      <label className="flex flex-col gap-1 col-span-2">
        <span className="ml-1">Mensaje</span>
        <textarea
          name="message"
          className={`p-3 rounded font-mono ${
            errors["message"] ? "border-red-500" : ""
          }`}
          placeholder="Contanos sobre tu proyecto y como podemos ayudarte a hacerlo crecer."
        />
        {errors["message"] && (
          <span className="text-xs text-red-500">{errors["message"]}</span>
        )}
      </label>

      <span className="inline-flex items-center text-red-500 text-xs ml-auto col-span-2">
        Campos requeridos marcados con
        <Asterisk size={14} className=" ml-1" />
      </span>

      <Button
        disabled={responseMessage ? true : false}
        className="self-right w-full col-span-2 mt-4"
        type="submit"
      >
        {responseMessage ? "Mensaje enviado!" : "Contactános"}
        {responseMessage ? null : <CaretRight className="" weight="bold" />}
      </Button>
    </form>
  );
}
