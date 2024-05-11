import React from 'react';

const SubjectTable = ({ data }) => {
  return (
    <div className="table-container">
      <table className="table">
        <thead>
          <tr>
            <th>Subject Code</th>
            <th>Subject Name</th>
            <th>Subject Category</th>
            <th>Class</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.name}</td>
              <td>{row.category}</td>
              <td>{row.class}</td>
              <td>{row.action}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SubjectTable;
