import React from 'react';
import EntityForm from '../common/EntityForm';
import axiosInstance from '../../axiosInstance';
import { toast } from 'react-toastify';
import ToastConfig from '../../ToastConfig';

const EntityFormModal = ({ entityType, onClose }) => {

  const handleFormSubmit = (data) => {
    axiosInstance.post(`${entityType}s`, data)
      .then((response) => {
        console.log('Succès:', response.data);
        toast.success('Succès : Données envoyées avec succès!', ToastConfig);
        onClose();
      })
      .catch((error) => {
        console.error('Erreur:', error);
        toast.error('Erreur : Quelque chose s\'est mal passé', ToastConfig);
      });
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-20">
      <div className="bg-white p-10 rounded-lg shadow-lg max-w-6xl w-full mx-6">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Ajouter {entityType === 'course' ? 'un cours' : entityType === 'professor' ? 'un professeur' : 'un étudiant'}
        </h2>
        <EntityForm entityType={entityType} onSubmit={handleFormSubmit} />
        <div className="flex justify-center mt-4">
          <button
            onClick={onClose}
            className="mt-4 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none"
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
};

export default EntityFormModal;