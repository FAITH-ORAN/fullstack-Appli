import React, { useState } from 'react';
import EntityFormModal from './Modal/EntityFormModal';

const Header = ({ entityType, setEntityType }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSelectChange = (e) => {
    const selectedEntity = e.target.value;
    setEntityType(selectedEntity);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <header className="bg-blue-600 text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-2xl font-bold">My School</h1>

        <div className="flex items-center">
          <h1 className="text-lg font-semibold mr-4">
            Ajouter un
          </h1>
          <select
            onChange={handleSelectChange}
            value={entityType || ''}
            className="bg-white text-blue-700 border border-white rounded-md px-4 py-2 font-semibold"
          >
            <option value="" disabled>Sélectionner</option>
            <option value="course">Cours</option>
            <option value="professor">Professeur</option>
            <option value="student">Étudiant</option>
          </select>
        </div>
      </div>
      {isModalOpen && (
        <EntityFormModal entityType={entityType} onClose={handleCloseModal} />
      )}
    </header>
  );
};

export default Header;