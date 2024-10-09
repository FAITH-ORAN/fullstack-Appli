import React from 'react';

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const renderPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
          className={`px-3 py-1 mx-1 border rounded-md ${i === currentPage ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'
            }`}
          onClick={() => onPageChange(i)}
        >
          {i}
        </button>
      );
    }
    return pages;
  };

  return (
    <div className="flex justify-center items-center mt-4">
      <button
        className={`px-4 py-2 bg-blue-500 text-white rounded-md mr-2 ${currentPage === 1 || totalPages === 0 ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        onClick={handlePrevious}
        disabled={currentPage === 1 || totalPages === 0}
      >
        Précédent
      </button>
      {renderPageNumbers()}
      <button
        className={`px-4 py-2 bg-blue-500 text-white rounded-md ml-2 ${currentPage === totalPages || totalPages === 0 ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        onClick={handleNext}
        disabled={currentPage === totalPages || totalPages === 0}
      >
        Suivant
      </button>
    </div>
  );
};

export default Pagination;