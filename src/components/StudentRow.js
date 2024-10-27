import React from 'react';

function StudentRow({ student, index, deleteStudent, updateSelectedCount }) {
  return (
    <tr className='text-center bg-white hover:bg-gray-50 transition'>
      <td className="p-3">
        <input type="checkbox" onChange={updateSelectedCount} className="h-4 w-4 text-blue-600 focus:ring focus:ring-blue-300 rounded" />
      </td>
      <td className="p-3">{student.name}</td>
      <td className="p-3">{student.code}</td>
      <td className="p-3">
        <span className={student.active ? 'bg-blue-100 text-blue-600 px-3 py-1 rounded-full' : 'bg-red-100 text-red-600 px-3 py-1 rounded-full'}>
          {student.active ? 'Active' : 'Inactive'}
        </span>
      </td>
      <td className="p-3">
        <button
          onClick={() => deleteStudent(index)}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

export default StudentRow;
