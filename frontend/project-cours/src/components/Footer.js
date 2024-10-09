import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-4">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} My School. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;