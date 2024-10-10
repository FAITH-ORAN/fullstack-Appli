import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import axiosInstance from '../../axiosInstance';
import Pagination from '../common/Pagination';
import EditCourseModal from '../Modal/EditCourseModal';
import SkeletonLoader from '../common/SkeletonLoader';
import { toast } from 'react-toastify';
import ToastConfig from '../../ToastConfig';

const CourseListing = () => {
  const [courses, setCourses] = useState([]);
  const [professors, setProfessors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [courseResponse, professorResponse] = await Promise.all([
          axiosInstance.get('courses'),
          axiosInstance.get('professors')
        ]);

        setCourses(courseResponse.data || []);
        setProfessors(professorResponse.data || []);
        setLoading(false);
      } catch (error) {
        console.error('Erreur lors de la récupération des données:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleEditClick = (course) => {
    setSelectedCourse(course);
    setIsEditModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsEditModalOpen(false);
    setSelectedCourse(null);
  };

  const handleSave = async (updatedData) => {
    try {
      const response = await axiosInstance.put(`courses/${selectedCourse.id}`, updatedData);
      const updatedCourse = response.data;

      setCourses((prevCourses) =>
        prevCourses.map((course) => (course.id === updatedCourse.id ? updatedCourse : course))
      );

      handleCloseModal();
      toast.success('Succès : Le cours a été mis à jour avec succès!', ToastConfig);
    } catch (error) {
      console.error('Erreur lors de la mise à jour du cours:', error);
      toast.error('Erreur : La mise à jour du cours a échoué.', ToastConfig);
    }
  };

  const handleDeleteClick = async (courseId) => {
    const confirmDelete = window.confirm("Êtes-vous sûr de vouloir supprimer ce cours ?");
    if (!confirmDelete) return;

    try {
      await axiosInstance.delete(`courses/${courseId}`);
      setCourses((prevCourses) => prevCourses.filter((course) => course.id !== courseId));
      toast.success('Succès : Le cours a été supprimé avec succès!', ToastConfig);
    } catch (error) {
      console.error('Erreur lors de la suppression du cours:', error);
      toast.error('Erreur : Échec de la suppression du cours.', ToastConfig);
    }
  };

  const getProfessorNames = (professorIds) => {
    const names = professors
      .filter((professor) => professorIds.includes(professor.id))
      .map((professor) => `${professor.firstName} ${professor.lastName}`);
    return names.join(', ');
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCourses = courses.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(courses.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="bg-blue-100 h-screen w-screen flex items-center justify-center">
      <div className="bg-white w-3/4 h-2/3 rounded-lg p-8 overflow-auto flex flex-col">
        <div className="flex items-center mb-4 h-16">
          <h1 className="text-4xl font-bold text-blue-700 mx-auto">
            Liste des cours :
          </h1>
        </div>

        {loading ? (
          <div><SkeletonLoader /></div>
        ) : (
          <>
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
                {currentCourses && currentCourses.length > 0 ? (
                  currentCourses.map((course) => (
                    <tr key={course.id}>
                      <td className="border-2 border-grey pl-2">{course.courseName}</td>
                      <td className="border-2 border-grey pl-2">
                        {getProfessorNames(course.professorIds)}
                      </td>
                      <td className="border-2 border-grey pl-2">{course.coef}</td>
                      <td className="border-2 border-grey pl-2">{course.description}</td>
                      <td
                        className="cursor-pointer p-[5px]"
                        onClick={() => handleEditClick(course)}
                      >
                        <FontAwesomeIcon icon={faPencilAlt} />
                      </td>
                      <td
                        className="p-[5px] cursor-pointer text-red-700 hover:text-red-500"
                        onClick={() => handleDeleteClick(course.id)}
                      >
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

            {totalPages > 1 && (
              <Pagination
                totalPages={totalPages}
                currentPage={currentPage}
                onPageChange={handlePageChange}
              />
            )}
          </>
        )}
      </div>

      {/* Show the edit modal when isEditModalOpen is true */}
      {isEditModalOpen && (
        <EditCourseModal
          course={selectedCourse}
          allProfessors={professors}
          onClose={handleCloseModal}
          onSave={handleSave}
        />
      )}
    </div>
  );
};

export default CourseListing;