"use client";

import { useState } from "react";

const services = [
  "Household Rubbish Removal",
  "Green Waste Removal",
  "Furniture Removal",
  "Appliance Removal",
  "Property Clean Out",
  "Commercial Rubbish Removal",
];

const urgencyOptions = [
  "As soon as possible",
  "Within a few days",
  "This week",
  "Just getting a price",
];

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbxpF2BA6MR12YIV0jAmZZyOKa6nEOOn08DJbwaiFlqNz5RYSEzJByp7Y5Tcu5ySMtxtGg/exec";


export default function QuoteForm() {

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);


  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {

    e.preventDefault();

    setLoading(true);


    const form = new FormData(e.currentTarget);


    const files = form
      .getAll("photos")
      .filter(
        (file): file is File =>
          file instanceof File && file.size > 0
      )
      .slice(0, 5);



    const photos = await Promise.all(

      files.map(async (file) => {

        const base64 = await new Promise<string>((resolve, reject) => {

          const reader = new FileReader();


          reader.onload = () => {

            const result = reader.result as string;

            resolve(result.split(",")[1]);

          };


          reader.onerror = reject;


          reader.readAsDataURL(file);

        });


        return {

          name: file.name,

          type: file.type,

          data: base64,

        };

      })

    );



    const data = {

      name: form.get("name"),

      phone: form.get("phone"),

      email: form.get("email"),

      suburb: form.get("suburb"),

      service: form.get("service"),

      urgency: form.get("urgency"),

      description: form.get("description"),

      photos,

    };



    try {

      await fetch(SCRIPT_URL, {

        method: "POST",

        headers: {

          "Content-Type": "text/plain;charset=utf-8",

        },

        body: JSON.stringify(data),

      });


      setSubmitted(true);


    } catch (error) {

      console.error("Quote submission failed:", error);

    }


    setLoading(false);

  }



  if (submitted) {

    return (

      <section
        id="quote"
        className="bg-white px-6 py-20"
      >

        <div className="mx-auto max-w-4xl rounded-xl bg-tipdash-light p-10 text-center">


          <h2 className="text-4xl font-bold text-tipdash-dark">

            Thanks for your enquiry!

          </h2>


          <p className="mt-4 text-gray-700">

            We’ve received your quote request and will be in touch shortly.

          </p>


          <p className="mt-3 text-gray-700">

            If your job is urgent, feel free to give us a call.

          </p>


        </div>

      </section>

    );

  }




  return (

    <section
      id="quote"
      className="bg-white px-6 py-20"
    >

      <div className="mx-auto max-w-4xl">


        <h2 className="text-center text-4xl font-bold text-black">

          Get Your Free Quote

        </h2>


        <p className="mx-auto mt-4 max-w-2xl text-center text-gray-700">

          Send us your details and photos of the job. We’ll review everything and get back to you with a quote.

        </p>



        <form

          onSubmit={handleSubmit}

          className="mt-10 grid gap-6 rounded-xl bg-tipdash-light p-8 shadow-md"

        >



          <div className="grid gap-6 md:grid-cols-2">


            <input

              name="name"

              placeholder="Your Name"

              required

              className="rounded-lg bg-white p-3 text-black"

            />



            <input

              name="phone"

              placeholder="Phone Number"

              required

              className="rounded-lg bg-white p-3 text-black"

            />


          </div>




          <input

            name="email"

            placeholder="Email Address"

            type="email"

            className="rounded-lg bg-white p-3 text-black"

          />




          <input

            name="suburb"

            placeholder="Suburb"

            required

            className="rounded-lg bg-white p-3 text-black"

          />





          <select

            name="service"

            className="rounded-lg bg-white p-3 text-black"

          >

            <option>Select Service Type</option>


            {services.map((service) => (

              <option key={service}>

                {service}

              </option>

            ))}


          </select>





          <select

            name="urgency"

            className="rounded-lg bg-white p-3 text-black"

          >

            <option>When do you need it?</option>


            {urgencyOptions.map((option) => (

              <option key={option}>

                {option}

              </option>

            ))}


          </select>






          <textarea

            name="description"

            placeholder="Tell us about the job..."

            rows={5}

            className="rounded-lg bg-white p-3 text-black"

          />






          <label className="font-semibold text-black">


            Upload photos (maximum 5)


            <input

              name="photos"

              type="file"

              multiple

              accept="image/*"

              className="mt-2 block w-full text-black"

            />


          </label>






          <button

            type="submit"

            disabled={loading}

            className="rounded-lg bg-tipdash-dark px-8 py-3 font-semibold text-white transition hover:opacity-90 disabled:opacity-50"

          >

            {loading ? "Sending..." : "Request My Quote"}

          </button>




        </form>


      </div>


    </section>

  );

}