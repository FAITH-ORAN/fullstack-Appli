import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = ({ entityType, setEntityType }) => {
  const navigate = useNavigate();

  const handleSelectChange = (e) => {
    const selectedEntity = e.target.value;
    setEntityType(selectedEntity);
    navigate(`/ajouter/${selectedEntity}`);
  };

  return (
    <header className="bg-blue-600 text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-2xl font-bold">My Application</h1>

        <div className="flex items-center">
          <h1 className="text-lg font-semibold mr-4">
            Ajouter {entityType === 'course' ? 'un cours' : entityType === 'professor' ? 'un professeur' : 'un étudiant'}
          </h1>
          <select
            onChange={handleSelectChange}
            value={entityType}
            className="bg-white text-blue-700 border border-white rounded-md px-4 py-2 font-semibold"
          >
            <option value="course">Cours</option>
            <option value="professor">Professeur</option>
            <option value="student">Étudiant</option>
          </select>
        </div>
      </div>
    </header>
  );
};

export default Header;