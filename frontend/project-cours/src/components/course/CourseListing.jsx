import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import axiosInstance from '../../axiosInstance';


const CourseListing = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axiosInstance.get('courses');
        setCourses(response.data || []);
      } catch (error) {
        console.error('Erreur lors de la récupération des cours:', error);
        setCourses([]);
      }
    };

    fetchCourses();
  }, []);

  return (
    <div className="bg-blue-100 h-screen w-screen flex items-center justify-center">
      <div className="bg-white w-3/4 h-2/3 rounded-lg p-8 overflow-auto flex flex-col">
        <div className="flex items-center justify-between mb-4 h-16">
          <h1 className="text-4xl font-bold text-blue-700 mx-auto">
            Liste des cours :
          </h1>
          <button className="text-xl bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400">
            Ajouter un cours
          </button>
        </div>
        <br />
        <table className="text-[22px] w-[85%] mx-auto border-collapse text-blue-700">
          <thead>
            <tr>
              <th className="border-2 border-grey w-[18%]">Nom du cours :</th>
              <th className="border-2 border-grey w-[23%]">Nom du professeur :</th>
              <th className="border-2 border-grey w-[15%]">Coefficient :</th>
              <th className="border-2 border-grey w-[44%]">Description :</th>
              <th colSpan={2}></th>
            </tr>
          </thead>
          <tbody>
            {courses && courses.length > 0 ? (
              courses.map((course) => (
                <tr key={course.id}>
                  <td className="border-2 border-grey pl-2">
                    {course.courseName}
                  </td>
                  <td className="border-2 border-grey pl-2">
                    {course.professors?.map(prof => prof.firstName + ' ' + prof.lastName).join(', ')}
                  </td>
                  <td className="border-2 border-grey pl-2">
                    {course.coef}
                  </td>
                  <td className="border-2 border-grey pl-2">
                    {course.description}
                  </td>
                  <td className="cursor-pointer p-[5px]">
                    <FontAwesomeIcon icon={faPencilAlt} />
                  </td>
                  <td className="p-[5px] cursor-pointer text-red-700 hover:text-red-500">
                    <FontAwesomeIcon icon={faTrash} />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="text-center">Aucun cours disponible.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CourseListing;