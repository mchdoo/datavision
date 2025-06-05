export const prerender = false;

import type { APIRoute } from "astro";
import { Resend } from "resend";

const resend = new Resend("re_ihDALk81_M29Y5MiH1foyah4B7QGZhGCF");

export type FormData = {
  name: string;
  surname: string;
  email: string;
  phone: string;
  company: string;
  linkedin: string;
  country: string;
  city: string;
  message: string;
};

export const POST: APIRoute = async ({ request }) => {
  const body = await request.formData();

  const formData: FormData = {
    name: (body.get("name") as string) || "Not Provided",
    surname: (body.get("surname") as string) || "Not Provided",
    email: (body.get("email") as string) || "Not Provided",
    phone: (body.get("phone") as string) || "Not Provided",
    company: (body.get("company") as string) || "Not Provided",
    linkedin: (body.get("linkedin") as string) || "Not Provided",
    country: (body.get("country") as string) || "Not Provided",
    city: (body.get("city") as string) || "Not Provided",
    message: (body.get("message") as string) || "Not Provided",
  };

  console.log("data", formData);

  const { error } = await resend.emails.send({
    from: "DataVision Insights Contact Form Submission <info@datavisioninsights.com>",
    to: ["sebastianvonbergen@gmail.com"],
    cc: [formData.email],
    subject: "Contact Form Submission",
    html: `
    <h1>New Contact form submission from ${formData.name}</h1>
    <p>There has been a new form submission with the folllowing details:</p>
      <table>
        <tr>
          <th>Name</th>
          <td>${formData.name}</td>
        </tr>
        <tr>
          <th>Surname</th>
          <td>${formData.surname}</td>
        </tr>
        <tr>
          <th>Email</th>
          <td>${formData.email}</td>
        </tr>
        <tr>
          <th>Phone</th>
          <td>${formData.phone}</td>
        </tr>
        <tr>
          <th>Company</th>
          <td>${formData.company}</td>
        </tr>
        <tr>
          <th>LinkedIn</th>
          <td>${formData.linkedin}</td>
        </tr>
        <tr>
          <th>Country</th>
          <td>${formData.country}</td>
        </tr>
        <tr>
          <th>City</th>
          <td>${formData.city}</td>
        </tr>
        <tr>
          <th>Message</th>
          <td>${formData.message}</td>
        </tr>
      </table>

      <p>This is being CC'd to: ${formData.email}</p>
    `,
  });

  if (error) {
    return new Response(JSON.stringify({ message: error.message }), {
      status: 400,
    });
  }

  return new Response(
    JSON.stringify({
      message: "Success!",
    }),
    { status: 200 }
  );
};
