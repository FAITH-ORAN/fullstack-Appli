import React from 'react';

function HomePage() {
    return (
        <div className="min-h-screen bg-blue-100 flex flex-col items-center justify-center">
            <section className="text-center mt-12">
                <h2 className="text-4xl font-semibold text-blue-700 mb-6">
                    Bienvenue
                </h2>
                <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                    Gérer vos cours, vos étudiants et vos professeurs avec des fonctionnalités simples et efficaces.
                </p>
            </section>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 mt-16 mx-auto w-11/12 max-w-6xl">
                <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-3">
                    <h3 className="text-2xl font-bold text-blue-700 mb-4">Voir les Cours</h3>
                    <p className="text-gray-600">
                        Accédez et gérez facilement les cours disponibles pour les étudiants.
                    </p>
                </div>

                <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-3">
                    <h3 className="text-2xl font-bold text-blue-700 mb-4">Gérer les Élèves</h3>
                    <p className="text-gray-600">
                        Ajouter ou gérer les étudiants inscrits à vos cours rapidement et simplement.
                    </p>
                </div>

                <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-3">
                    <h3 className="text-2xl font-bold text-blue-700 mb-4">Gérer les Professeurs</h3>
                    <p className="text-gray-600">
                        Ajouter ou gérer les professeurs et faciliter la coordination des cours.
                    </p>
                </div>
            </div>

        </div>
    );
}

export default HomePage;
