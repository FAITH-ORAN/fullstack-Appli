import React from 'react';
import StudentListing from '../components/students/StudentListing';
import Header from "../components/Header";

const StudentPage = () => {
    return (
        <div>
            <Header />
            <StudentListing />
        </div>
    );
};

export default StudentPage;
