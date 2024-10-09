import React, { useState } from 'react';

const EntityForm = ({ entityType, onSubmit }) => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const renderFields = () => {
    switch (entityType) {
      case 'course':
        return (
          <>
            <div className="mb-4">
              <label className="block text-blue-700 font-semibold">Nom du cours</label>
              <input
                type="text"
                name="courseName"
                onChange={handleChange}
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black" // added text-black
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-blue-700 font-semibold">Coef</label>
              <input
                type="number"
                name="coef"
                onChange={handleChange}
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black" // added text-black
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-blue-700 font-semibold">Description</label>
              <input
                type="text"
                name="description"
                onChange={handleChange}
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black" // added text-black
              />
            </div>
          </>
        );
      case 'professor':
        return (
          <>
            <div className="mb-4">
              <label className="block text-blue-700 font-semibold">Prénom</label>
              <input
                type="text"
                name="firstName"
                onChange={handleChange}
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black" // added text-black
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-blue-700 font-semibold">Nom</label>
              <input
                type="text"
                name="lastName"
                onChange={handleChange}
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black" // added text-black
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-blue-700 font-semibold">Email</label>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black" // added text-black
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-blue-700 font-semibold">Téléphone</label>
              <input
                type="text"
                name="phone"
                onChange={handleChange}
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black" // added text-black
              />
            </div>
          </>
        );
      case 'student':
        return (
          <>
            <div className="mb-4">
              <label className="block text-blue-700 font-semibold">Prénom</label>
              <input
                type="text"
                name="firstName"
                onChange={handleChange}
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black" // added text-black
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-blue-700 font-semibold">Nom</label>
              <input
                type="text"
                name="lastName"
                onChange={handleChange}
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black" // added text-black
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-blue-700 font-semibold">Email</label>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black" // added text-black
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-blue-700 font-semibold">Téléphone</label>
              <input
                type="text"
                name="phone"
                onChange={handleChange}
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black" // added text-black
              />
            </div>
            <div className="mb-4">
              <label className="block text-blue-700 font-semibold">Nom de la classe</label>
              <input
                type="text"
                name="className"
                onChange={handleChange}
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black" // added text-black
                required
              />
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6 max-w-5xl w-full mx-8">
      {renderFields()}
      <button
        type="submit"
        className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        Soumettre
      </button>
    </form>
  );
};

export default EntityForm;