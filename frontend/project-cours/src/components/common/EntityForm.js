import React, { useState, useEffect } from 'react';
import axiosInstance from '../../axiosInstance';

const EntityForm = ({ entityType, onSubmit }) => {
  const [formData, setFormData] = useState({});
  const [courses, setCourses] = useState([]);
  const [loadingCourses, setLoadingCourses] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axiosInstance.get('/courses');
        setCourses(response.data);
        setLoadingCourses(false);
      } catch (error) {
        console.error('Erreur lors de la récupération des cours:', error);
        setLoadingCourses(false);
      }
    };

    fetchCourses();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle multiple course selection
  const handleSelectChange = (e) => {
    const selectedCourses = Array.from(e.target.selectedOptions, (option) => parseInt(option.value));
    setFormData({ ...formData, courseIds: selectedCourses });
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
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-blue-700 font-semibold">Coef</label>
              <input
                type="number"
                name="coef"
                onChange={handleChange}
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-blue-700 font-semibold">Description</label>
              <input
                type="text"
                name="description"
                onChange={handleChange}
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
              />
            </div>
          </>
        );
      case 'professor':
      case 'student':
        return (
          <>
            <div className="mb-4">
              <label className="block text-blue-700 font-semibold">Prénom</label>
              <input
                type="text"
                name="firstName"
                onChange={handleChange}
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-blue-700 font-semibold">Nom</label>
              <input
                type="text"
                name="lastName"
                onChange={handleChange}
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-blue-700 font-semibold">Email</label>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-blue-700 font-semibold">Téléphone</label>
              <input
                type="text"
                name="phone"
                onChange={handleChange}
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
              />
            </div>
            {entityType === 'student' && (
              <div className="mb-4">
                <label className="block text-blue-700 font-semibold">Nom de la class</label>
                <input
                  type="text"
                  name="className"
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                  required
                />
              </div>
            )}
            <div className="mb-4">
              <label className="block text-blue-700 font-semibold">{entityType === 'professor' ? 'Cours à enseigner' : 'Cours à suivre'}</label>
              {loadingCourses ? (
                <p className="text-gray-500">Chargement des cours...</p>
              ) : courses.length > 0 ? (
                <select
                  multiple
                  onChange={handleSelectChange}
                  className="mt-1 p-2 w-full border border-blue-500 bg-red-50 text-blue-900 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {courses.map((course) => (
                    <option key={course.id} value={course.id}>
                      {course.courseName}
                    </option>
                  ))}
                </select>
              ) : (
                <p className="text-gray-500">Aucun cours disponible pour le moment.</p>
              )}
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