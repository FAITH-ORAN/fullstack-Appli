import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPencilAlt } from "@fortawesome/free-solid-svg-icons";

const StudentListing = () => {
    const students = [
        { id: 1, firstName: 'Jean', lastName: 'Dupont', email: 'jean.dupont@gmail.com', phone: '06 12 34 56 78', class: 'A1', gender: 'male' },
        { id: 2, firstName: 'Marie', lastName: 'Curie', email: 'marie.curie@gmail.com', phone: '06 98 76 54 32', class: 'B2', gender: 'female' },
        { id: 3, firstName: 'Albert', lastName: 'Einstein', email: 'albert.einstein@gmail.com', phone: '07 45 67 89 10', class: 'C3', gender: 'male' },
        { id: 4, firstName: 'Isaac', lastName: 'Newton', email: 'isaac.newton@gmail.com', phone: '06 23 45 67 89', class: 'B1', gender: 'male' },
        { id: 5, firstName: 'Rosalind', lastName: 'Franklin', email: 'rosalind.franklin@gmail.com', phone: '07 12 34 56 78', class: 'A3', gender: 'female' },
    ];

    return (
        <div className="bg-blue-100 h-screen w-screen flex items-center justify-center">
            <div className="bg-white w-3/4 h-2/3 rounded-lg p-8 overflow-auto flex flex-col">
                <div className="flex items-center justify-between mb-4 h-16">
                    <h1 className="text-4xl font-bold text-blue-700 mx-auto">
                        Liste des élèves :
                    </h1>
                    <button className="text-xl bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400">
                        Ajouter un élève
                    </button>
                </div>
                <br />
                <table className="text-[22px] w-[85%] mx-auto border-collapse text-blue-700">
                    <thead>
                    <tr>
                        <th className="border-2 border-grey w-[10%] p-3 text-center">Profil</th>
                        <th className="border-2 border-grey w-[15%] p-3 text-center">Nom</th>
                        <th className="border-2 border-grey w-[15%] p-3 text-center">Prénom</th>
                        <th className="border-2 border-grey w-[25%] p-3 text-center">Email</th>
                        <th className="border-2 border-grey w-[20%] p-3 text-center">Téléphone</th>
                        <th className="border-2 border-grey w-[10%] p-3 text-center">Classe</th>
                        <td colSpan={2}></td>
                    </tr>
                    </thead>
                    <tbody>
                    {students.map((student) => (
                        <tr key={student.id}>

                            <td className="border-2 border-grey text-center p-4">
                                {student.gender === 'male' ? (
                                    <img
                                        src="https://cdn-icons-png.flaticon.com/512/2922/2922510.png"
                                        alt="garçon"
                                        className="w-10 h-10 mx-auto"
                                    />
                                ) : (
                                    <img
                                        src="https://cdn-icons-png.flaticon.com/512/2922/2922565.png"
                                        alt="fille"
                                        className="w-10 h-10 mx-auto"
                                    />
                                )}
                            </td>

                            <td className="border-2 border-grey text-black text-center p-4">{student.lastName}</td>
                            <td className="border-2 border-grey text-black text-center p-4">{student.firstName}</td>
                            <td className="border-2 border-grey text-black text-center p-4">{student.email}</td>
                            <td className="border-2 border-grey text-black text-center p-4">{student.phone}</td>
                            <td className="border-2 border-grey text-black text-center p-4">{student.class}</td>

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

export default StudentListing;
