import React from 'react';
import StudentRow from './StudentRow';

function StudentTable({ students, deleteStudent, updateSelectedCount }) {
  return (
    <table className="w-full bg-gray-100 rounded-lg shadow-md overflow-hidden">
      <thead>
        <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
          <th className="p-3">Select</th>
          <th className="p-3">Student Name</th>
          <th className="p-3">Student Code</th>
          <th className="p-3">Status</th>
          <th className="p-3">Action</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student, index) => (
          <StudentRow
            key={index}
            student={student}
            index={index}
            deleteStudent={deleteStudent}
            updateSelectedCount={updateSelectedCount}
          />
        ))}
      </tbody>
    </table>
  );
}

export default StudentTable;
