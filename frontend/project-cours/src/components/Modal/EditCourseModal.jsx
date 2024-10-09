import React, { useState, useEffect } from 'react';

const EditCourseModal = ({ course, allProfessors, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    courseName: course?.courseName || '',
    coef: course?.coef || 1,
    description: course?.description || '',
    professorIds: course?.professorIds || [],
  });

  useEffect(() => {
    if (course) {
      setFormData({
        courseName: course.courseName,
        coef: course.coef,
        description: course.description,
        professorIds: course.professorIds || [],
      });
    }
  }, [course]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleProfessorChange = (e) => {
    const selectedProfessors = Array.from(e.target.selectedOptions, (option) => option.value);
    setFormData((prevData) => ({
      ...prevData,
      professorIds: selectedProfessors,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-md shadow-lg w-1/3">
        <h2 className="text-2xl font-bold mb-4">Modifier le cours</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold">Nom du cours</label>
            <input
              type="text"
              name="courseName"
              value={formData.courseName}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold">Coefficient</label>
            <input
              type="number"
              name="coef"
              value={formData.coef}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Professors Selection */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold">Professeurs</label>
            <select
              name="professorIds"
              multiple
              value={formData.professorIds}
              onChange={handleProfessorChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {allProfessors.map((professor) => (
                <option key={professor.id} value={professor.id}>
                  {professor.firstName} {professor.lastName}
                </option>
              ))}
            </select>
          </div>

          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 hover:bg-gray-400 text-gray-700 rounded-md mr-2"
            >
              Annuler
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md"
            >
              Sauvegarder
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditCourseModal;