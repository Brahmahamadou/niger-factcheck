"use client";

import React, { useState } from "react";

function ContactezNous() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState(""); // Pour afficher un message après l'envoi

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Ici, vous pouvez envoyer les données du formulaire à votre backend
      // Exemple : fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) })

      console.log("Formulaire soumis :", formData);

      // Simule un succès
      setStatus("Message envoyé avec succès !");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Erreur lors de l'envoi :", error);
      setStatus("Une erreur s'est produite. Veuillez réessayer.");
    }
  };

  return (
    <section className="max-w-4xl mx-auto py-12 px-6">
      <h1 className="text-3xl font-bold text-center mb-6">Contactez-nous</h1>
      <p className="text-gray-700 text-center mb-8">
        Si vous avez des questions, des suggestions ou besoin d'informations, n'hésitez pas à nous contacter en remplissant le formulaire ci-dessous.
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-6 space-y-4"
      >
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Nom
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-orange-400 focus:outline-none"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Adresse email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-orange-400 focus:outline-none"
          />
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
            Sujet
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-orange-400 focus:outline-none"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-orange-400 focus:outline-none"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition"
        >
          Envoyer
        </button>

        {status && (
          <p className="text-center text-sm mt-4 text-green-600">{status}</p>
        )}
      </form>
    </section>
  );
}

export default ContactezNous;
