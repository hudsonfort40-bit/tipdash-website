"use client";

import { useState, useEffect, useRef } from "react";

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
  const [photos, setPhotos] = useState<File[]>([]);
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);
  
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
  const urls = photos.map((photo) =>
    URL.createObjectURL(photo)
  );

  setPreviewUrls(urls);

}, [photos]);



  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {

    e.preventDefault();

    setLoading(true);


    const form = new FormData(e.currentTarget);


    const uploadedPhotos = await Promise.all(

      photos.map(async (file) => {

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

      photos: uploadedPhotos,

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



function handlePhotoChange(e: React.ChangeEvent<HTMLInputElement>) {

  const selectedFiles = Array.from(e.target.files || []);

  if (selectedFiles.length === 0) return;


  setPhotos((currentPhotos) => {

    const remainingSlots = 5 - currentPhotos.length;

    return [
      ...currentPhotos,
      ...selectedFiles.slice(0, remainingSlots),
    ];

  });


  e.target.value = "";

}


  function removePhoto(index: number) {

    setPhotos((currentPhotos) =>
      currentPhotos.filter((_, i) => i !== index)
    );

  }



  if (submitted) {

  return (

    <section
      id="quote"
      className="bg-white px-6 py-20"
    >

      <div className="mx-auto max-w-4xl rounded-xl bg-tipdash-light p-10 text-center shadow-sm">


        <h2 className="text-4xl font-bold text-tipdash-dark">
          Thanks, we’ve received your request!
        </h2>


        <p className="mx-auto mt-5 max-w-2xl text-gray-700">
          We’ll review your details and get back to you as soon as possible
          with your quote.
        </p>


        <p className="mx-auto mt-3 max-w-2xl text-gray-700">
          If your job is urgent, give us a call and we’ll let you know how
          quickly we can help.
        </p>



        <a
          href="tel:+61481767433"
          className="mt-8 inline-block rounded-lg bg-tipdash-dark px-8 py-3 font-semibold text-white transition hover:opacity-90"
        >
          Call TipDash
        </a>


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
          Send us your details and photos of the job. We’ll review everything
          and get back to you with a quote.
        </p>


        <p className="mt-3 text-center text-sm text-gray-600">
          Fields marked with * are required.
        </p>



        <form

          onSubmit={handleSubmit}

          className="mt-10 grid gap-6 rounded-xl bg-tipdash-light p-8 shadow-md"

        >



          <div className="grid gap-6 md:grid-cols-2">


            <input
              name="name"
              placeholder="Your Name *"
              required
              className="rounded-lg bg-white p-3 text-black"
            />



            <input
              name="phone"
              placeholder="Phone Number *"
              type="tel"
              inputMode="numeric"
              pattern="[0-9 ]*"
              required
              onInput={(e) => {
                e.currentTarget.value =
                  e.currentTarget.value.replace(/[^0-9 ]/g, "");
              }}
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
            placeholder="Suburb *"
            required
            className="rounded-lg bg-white p-3 text-black"
          />





          <select
            name="service"
            required
            className="rounded-lg bg-white p-3 text-black"
          >

            <option value="">
              Select Service Type *
            </option>


            {services.map((service) => (

              <option key={service}>
                {service}
              </option>

            ))}


          </select>





          <select
            name="urgency"
            required
            className="rounded-lg bg-white p-3 text-black"
          >

            <option value="">
              When do you need it? *
            </option>


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






  <div>

  <label className="block font-semibold text-black">
    Upload photos (helps us quote faster)
  </label>


  <div className="mt-3">

  <button
    type="button"
    disabled={photos.length >= 5}
    onClick={() => fileInputRef.current?.click()}
    className={`rounded-lg bg-tipdash-dark px-6 py-3 font-semibold text-white transition hover:opacity-90 ${
      photos.length >= 5 ? "cursor-not-allowed opacity-50" : ""
    }`}
  >
    + Add Photos
  </button>


  <input
    ref={fileInputRef}
    name="photos"
    type="file"
    multiple
    accept="image/*"
    disabled={photos.length >= 5}
    onChange={handlePhotoChange}
    className="hidden"
  />

</div>


  <div className="mt-4 flex flex-wrap gap-3">

    {previewUrls.map((url, index) => (

      <div
        key={url}
        className="relative h-20 w-20 overflow-hidden rounded-lg"
      >

        <img
          src={url}
          alt={`Uploaded photo ${index + 1}`}
          className="h-full w-full object-cover"
        />


        <button
          type="button"
          onClick={() => removePhoto(index)}
          className="absolute right-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-tipdash-dark text-sm font-bold text-white"
        >
          ×
        </button>

      </div>

    ))}

  </div>


  <p className="mt-3 text-sm text-gray-700">
    {photos.length} {photos.length === 1 ? "photo" : "photos"} added • Maximum 5 photos
  </p>


</div>






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