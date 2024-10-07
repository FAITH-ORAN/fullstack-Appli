import React, { useEffect, useState } from "react";
import axios from "axios";

function HomePage() {
    const [welcomeMessage, setWelcomeMessage] = useState("");

    useEffect(() => {
        // Exemple de requête axios pour récupérer des informations (ex : message d'accueil)
        axios.get("/api/welcome").then((response) => {
            setWelcomeMessage(response.data.message);
        });
    }, []);

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
            {/* Header */}
            <header className="bg-blue-600 w-full p-4 shadow-lg text-white">
                <h1 className="text-3xl text-center font-bold">Portail Prof/Élève</h1>
            </header>

            {/* Section de Bienvenue */}
            <section className="text-center mt-10">
                <h2 className="text-2xl font-semibold text-gray-800">
                    {welcomeMessage || "Bienvenue sur la plateforme éducative"}
                </h2>
                <p className="text-lg text-gray-600 mt-4">
                    Gérer vos cours et vos interactions avec les étudiants facilement.
                </p>
            </section>

            {/* Boutons de Navigation */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
                <a
                    href="/courses"
                    className="bg-white shadow-md rounded-lg p-6 text-center hover:bg-blue-100 transition duration-300"
                >
                    <h3 className="text-xl font-semibold text-blue-600">Voir les Cours</h3>
                    <p className="text-gray-500 mt-2">Consulter la liste des cours disponibles.</p>
                </a>
                <a
                    href="/students"
                    className="bg-white shadow-md rounded-lg p-6 text-center hover:bg-blue-100 transition duration-300"
                >
                    <h3 className="text-xl font-semibold text-blue-600">Gérer les Élèves</h3>
                    <p className="text-gray-500 mt-2">Ajouter ou gérer les étudiants inscrits aux cours.</p>
                </a>
                <a
                    href="/professors"
                    className="bg-white shadow-md rounded-lg p-6 text-center hover:bg-blue-100 transition duration-300"
                >
                    <h3 className="text-xl font-semibold text-blue-600">Gérer les Professeurs</h3>
                    <p className="text-gray-500 mt-2">Ajouter ou gérer les professeurs disponibles.</p>
                </a>
            </div>

            {/* Section d'information */}
            <section className="text-center mt-16">
                <p className="text-gray-500">
                    Toutes vos fonctionnalités comme ajouter un cours, faire l'appel, envoyer des mails, et
                    plus encore sont accessibles via les menus respectifs.
                </p>
            </section>

            {/* Footer */}
            <footer className="mt-auto bg-gray-800 w-full py-4 text-white text-center">
                <p>&copy; 2024 Plateforme Éducative. Tous droits réservés.</p>
            </footer>
        </div>
    );
}

export default HomePage;
