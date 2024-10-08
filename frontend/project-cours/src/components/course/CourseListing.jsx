import React from 'react'

const CourseListing = () => {
  return (
    <div className="bg-blue-100 h-screen w-screen flex items-center justify-center">
      <div className="bg-white w-1/2 h-1/2 rounded-lg p-8 overflow-auto flex flex-col">
        <h1 className="text-3xl text-center font-bold text-blue-700 mx-auto">
          Liste des cours :
        </h1><br />
        <table width={1000} className="w-[85%] mx-auto border-collapse text-blue-700">
          <tr>
            <th className="border-2 border-black">Nom du cours :</th>
            <th className="border-2 border-black">Nom du professeur :</th>
            <th className="border-2 border-black">Coefficient :</th>
            <th className="border-2 border-black">Description :</th>
            <td colSpan={2}></td>
          </tr>
          <tr>
            <td className="border-2 border-black"> <a href="#"></a></td>
            <td className="border-2 border-black"><a href="#"></a></td>
            <td className="border-2 border-black"><a href="#"></a></td>
            <td className="border-2 border-black"><a href="#"></a></td>
            <td><button>Modifier</button></td>
            <td><button>Supprimer</button></td>
          </tr>
        </table>
        <button class="mt-auto w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400">Retour</button>
      </div>
    </div>
  )
}

export default CourseListing