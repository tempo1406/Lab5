import React, { useState } from "react";
import StudentForm from "./StudentForm";
import StudentTable from "./StudentTable";

function StudentManager() {
    const [students, setStudents] = useState([
        { name: "Nguyen Van A", code: "CODE12345", active: true },
        { name: "Tran Van B", code: "CODE67890", active: false },
    ]);
    const [newStudent, setNewStudent] = useState({
        name: "",
        code: "",
        active: false,
    });
    
    const [selectedCount, setSelectedCount] = useState(0);

    const addStudent = () => {
        if (newStudent.name && newStudent.code) {
            setStudents([newStudent, ...students]);
            setNewStudent({ name: "", code: "", active: false });
        }
    };

    const deleteStudent = (indexToRemove) => {
        setStudents(students.filter((_, index) => index !== indexToRemove));
    };

    const updateSelectedCount = (e) => {
        if (e.target.checked) {
            setSelectedCount(selectedCount + 1);
        } else {
            setSelectedCount(selectedCount - 1);
        }
    };

    const clearStudents = () => {
        setStudents([]);
        setSelectedCount(0);
    };

    return (
        <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center">
            <div className="w-full max-w-4xl">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-bold text-gray-700">
                        Total Selected Students: {selectedCount}
                    </h2>
                    <button
                        onClick={clearStudents}
                        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                    >
                        Clear
                    </button>
                </div>

                <StudentForm
                    newStudent={newStudent}
                    setNewStudent={setNewStudent}
                    addStudent={addStudent}
                />
                <StudentTable
                    students={students}
                    deleteStudent={deleteStudent}
                    updateSelectedCount={updateSelectedCount}
                />
            </div>
        </div>
    );
}

export default StudentManager;
