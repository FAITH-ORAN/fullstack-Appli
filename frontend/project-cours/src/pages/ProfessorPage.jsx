import React from 'react';
import ProfessorListing from '../components/professors/ProfessorListing';
import Header from "../components/Header";

const ProfessorPage = () => {
    return (
        <div>
            <Header />
            <ProfessorListing />
        </div>
    );
};

export default ProfessorPage;
