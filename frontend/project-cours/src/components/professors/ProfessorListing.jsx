import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPencilAlt } from "@fortawesome/free-solid-svg-icons";

const ProfessorListing = () => {
    const professors = [
        { id: 1, firstName: 'Pierre', lastName: 'Martin', email: 'pierre.martin@gmail.com', phone: '06 12 34 56 78' },
        { id: 2, firstName: 'Sophie', lastName: 'Lemoine', email: 'sophie.lemoine@gmail.com', phone: '06 98 76 54 32' },
        { id: 3, firstName: 'Julien', lastName: 'Bernard', email: 'julien.bernard@gmail.com', phone: '07 45 67 89 10' },
        { id: 4, firstName: 'Claire', lastName: 'Dupuis', email: 'claire.dupuis@gmail.com', phone: '06 23 45 67 89' },
        { id: 5, firstName: 'Paul', lastName: 'Dubois', email: 'paul.dubois@gmail.com', phone: '07 12 34 56 78' },
    ];

    return (
        <div className="bg-blue-100 h-screen w-screen flex items-center justify-center">
            <div className="bg-white w-3/4 h-2/3 rounded-lg p-8 overflow-auto flex flex-col">
                <div className="flex items-center justify-between mb-4 h-16">
                    <h1 className="text-4xl font-bold text-blue-700 mx-auto">
                        Liste des professeurs :
                    </h1>
                    <button className="text-xl bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400">
                        Ajouter un professeur
                    </button>
                </div>
                <br />
                <table className="text-[22px] w-[85%] mx-auto border-collapse text-blue-700">
                    <thead>
                    <tr>
                        <th className="border-2 border-grey w-[10%] p-3 text-center">Profil</th>
                        <th className="border-2 border-grey w-[20%] p-3 text-center">Nom</th>
                        <th className="border-2 border-grey w-[20%] p-3 text-center">Prénom</th>
                        <th className="border-2 border-grey w-[30%] p-3 text-center">Email</th>
                        <th className="border-2 border-grey w-[20%] p-3 text-center">Téléphone</th>
                        <td colSpan={2}></td>
                    </tr>
                    </thead>
                    <tbody>
                    {professors.map((professor) => (
                        <tr key={professor.id}>

                            {/* Utilisation d'une icône neutre pour les professeurs */}
                            <td className="border-2 border-grey text-center p-4">
                                <img
                                    src="https://cdn-icons-png.flaticon.com/512/747/747376.png"
                                    alt="profil neutre"
                                    className="w-10 h-10 mx-auto"
                                />
                            </td>

                            <td className="border-2 border-grey text-black text-center p-4">{professor.lastName}</td>
                            <td className="border-2 border-grey text-black text-center p-4">{professor.firstName}</td>
                            <td className="border-2 border-grey text-black text-center p-4">{professor.email}</td>
                            <td className="border-2 border-grey text-black text-center p-4">{professor.phone}</td>

                            <td className="cursor-pointer p-4 text-center"><FontAwesomeIcon icon={faPencilAlt} /></td>
                            <td className="p-4 cursor-pointer text-red-700 hover:text-red-500 text-center"><FontAwesomeIcon icon={faTrash} /></td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ProfessorListing;
