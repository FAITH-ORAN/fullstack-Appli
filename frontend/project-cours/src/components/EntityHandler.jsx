import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import EntityForm from './common/EntityForm';
import Header from './Header';
import axiosInstance from '../axiosInstance';
import { toast } from 'react-toastify';
import ToastConfig from '../ToastConfig';

const EntityHandler = () => {
  const { entity } = useParams();
  const [entityType, setEntityType] = useState(entity || 'course');

  useEffect(() => {
    setEntityType(entity);
  }, [entity]);

  const handleFormSubmit = (formData) => {
    axiosInstance.post(`${entityType}s`, formData)
      .then((response) => {
        console.log('Succès:', response.data);
        toast.success('Succès : Données envoyées avec succès!', ToastConfig);
      })
      .catch((error) => {
        console.error('Erreur:', error);
        toast.error('Erreur : Quelque chose s\'est mal passé', ToastConfig);
      });
  };

  return (
    <>
      <Header entityType={entityType} setEntityType={setEntityType} />

      <main className="flex-grow flex items-center justify-center min-h-screen bg-blue-100">
        <EntityForm entityType={entityType} onSubmit={handleFormSubmit} />
      </main>
    </>
  );
};

export default EntityHandler;