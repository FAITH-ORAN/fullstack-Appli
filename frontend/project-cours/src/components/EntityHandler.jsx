import React, { useState } from 'react';
import EntityForm from './common/EntityForm';
import Header from './Header';
import axiosInstance from '../axiosInstance';

const EntityHandler = () => {
  const [entityType, setEntityType] = useState('course');

  const handleFormSubmit = (formData) => {
    axiosInstance.post(`${entityType}s`, formData)
      .then((response) => {
        console.log('Succès:', response.data);
      })
      .catch((error) => {
        console.error('Erreur:', error);
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