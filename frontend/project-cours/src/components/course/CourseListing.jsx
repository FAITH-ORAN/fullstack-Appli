import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPencilAlt } from "@fortawesome/free-solid-svg-icons";

const CourseListing = () => {
  return (
    <div className="bg-blue-100 h-screen w-screen flex items-center justify-center">
      <div className="bg-white w-3/4 h-2/3 rounded-lg p-8 overflow-auto flex flex-col">
        <h1 className="text-4xl text-center font-bold text-blue-700 mx-auto">
          Liste des cours :
        </h1><br />
        <table className="text-[22px] w-[85%] mx-auto border-collapse text-blue-700">
          <tr>
            <th className="border-2 border-grey w-[18%]">Nom du cours :</th>
            <th className="border-2 border-grey w-[23%]">Nom du professeur :</th>
            <th className="border-2 border-grey w-[15%]">Coefficient :</th>
            <th className="border-2 border-grey w-[44%]">Description :</th>
            <td colSpan={2}></td>
          </tr>
          <tr>
            <td className="border-2 border-grey"><a href="#">{ }</a></td>
            <td className="border-2 border-grey"><a href="#">{ }</a></td>
            <td className="border-2 border-grey"><a href="#">{ }</a></td>
            <td className="border-2 border-grey"><a href="#">{ }</a></td>
            <td class="cursor-pointer p-[5px]"><FontAwesomeIcon icon={faPencilAlt} /></td>
            <td id="tr1" class="p-[5px] cursor-pointer text-red-700 hover:text-red-500"><FontAwesomeIcon icon={faTrash} /></td>
          </tr>
          <tr>
            <td className="border-2 border-grey"><a href="#">{ }</a></td>
            <td className="border-2 border-grey"><a href="#">{ }</a></td>
            <td className="border-2 border-grey"><a href="#">{ }</a></td>
            <td className="border-2 border-grey"><a href="#">{ }</a></td>
            <td class="cursor-pointer p-[5px]"><FontAwesomeIcon icon={faPencilAlt} /></td>
            <td id="tr2" class="p-[5px] cursor-pointer text-red-700 hover:text-red-500"><FontAwesomeIcon icon={faTrash} /></td>
          </tr>
        </table>
        <button class="text-2xl mt-auto w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400">Retour</button>
      </div>
    </div>
  )
}

export default CourseListing