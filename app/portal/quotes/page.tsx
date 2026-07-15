"use client";

import { useState } from "react";

function generateQuoteNumber() {
  const year = new Date().getFullYear();

  const storageKey = "tipdash_quote_number";

  const lastNumber = Number(
    localStorage.getItem(storageKey) || 0
  );

  const nextNumber = lastNumber + 1;

  localStorage.setItem(
    storageKey,
    String(nextNumber)
  );

  return `TD-Q-${year}-${String(nextNumber).padStart(3, "0")}`;
}


export default function QuotesPage() {
  const [quote, setQuote] = useState<any>(null);

  const [formData, setFormData] = useState({
    customerName: "",
    phone: "",
    email: "",
    address: "",
    service: "Household Rubbish Removal",
    description: "",
    amount: "",
  });


  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement |
      HTMLTextAreaElement |
      HTMLSelectElement
    >
  ) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }


  function generateQuote() {

    const now = new Date();

    setQuote({
      ...formData,

      quoteNumber: generateQuoteNumber(),

      date: now.toLocaleDateString(
        "en-AU"
      ),
    });

  }



  return (
    <main className="min-h-screen bg-gray-100 px-6 py-12">

      <div className="mx-auto max-w-5xl">

        <div className="rounded-xl bg-white p-8 shadow-md">


          <h1 className="text-3xl font-bold text-black">
            TipDash Quote Generator
          </h1>


          <p className="mt-2 text-gray-600">
            Create professional quotes for customers.
          </p>



          <div className="mt-8 grid gap-6">


            <input
              name="customerName"
              placeholder="Customer Name"
              value={formData.customerName}
              onChange={handleChange}
              className="rounded-lg border p-3 text-black"
            />


            <input
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="rounded-lg border p-3 text-black"
            />


            <input
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="rounded-lg border p-3 text-black"
            />


            <input
              name="address"
              placeholder="Job Address"
              value={formData.address}
              onChange={handleChange}
              className="rounded-lg border p-3 text-black"
            />



            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="rounded-lg border p-3 text-black"
            >

              <option>
                Household Rubbish Removal
              </option>

              <option>
                Green Waste Removal
              </option>

              <option>
                Furniture Removal
              </option>

              <option>
                Appliance Removal
              </option>

              <option>
                Property Clean Out
              </option>

              <option>
                Commercial Rubbish Removal
              </option>

            </select>




            <textarea
              name="description"
              placeholder="Job description..."
              rows={5}
              value={formData.description}
              onChange={handleChange}
              className="rounded-lg border p-3 text-black"
            />



            <input
              name="amount"
              placeholder="Quote Amount"
              type="number"
              value={formData.amount}
              onChange={handleChange}
              className="rounded-lg border p-3 text-black"
            />



            <button
              onClick={generateQuote}
              className="rounded-lg bg-tipdash-dark px-6 py-3 font-semibold text-white hover:opacity-90"
            >
              Generate Quote Preview
            </button>


          </div>



          {quote && (

            <div className="mt-12 rounded-xl border p-8">


              <div className="text-center">

                <h2 className="text-2xl font-bold text-black">
                  TipDash Rubbish Removal
                </h2>


                <p className="mt-2 text-xl font-semibold text-black">
                  QUOTE
                </p>


              </div>



              <div className="mt-8 space-y-3 text-black">


                <p>
                  <strong>Quote Number:</strong>{" "}
                  {quote.quoteNumber}
                </p>


                <p>
                  <strong>Date:</strong>{" "}
                  {quote.date}
                </p>


                <hr />


                <p>
                  <strong>Customer:</strong>{" "}
                  {quote.customerName}
                </p>


                <p>
                  <strong>Phone:</strong>{" "}
                  {quote.phone}
                </p>


                <p>
                  <strong>Email:</strong>{" "}
                  {quote.email}
                </p>


                <p>
                  <strong>Address:</strong>{" "}
                  {quote.address}
                </p>


                <hr />


                <p>
                  <strong>Service:</strong>{" "}
                  {quote.service}
                </p>


                <p>
                  <strong>Description:</strong>{" "}
                  {quote.description}
                </p>



                <div className="mt-6 text-center">

                  <p className="text-gray-600">
                    Total
                  </p>


                  <p className="text-4xl font-bold">
                    ${quote.amount}
                  </p>


                </div>


              </div>


            </div>

          )}


        </div>

      </div>

    </main>
  );
}