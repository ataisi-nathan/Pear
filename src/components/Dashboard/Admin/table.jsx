import React from 'react';

const SchoolTable = ({ data }) => {
  return (
    <div className="table-container">
      <table className="table">
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Age</th>
            <th>Class</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id}>
              <td>{row.name}</td>
              <td>{row.age}</td>
              <td>{row.class}</td>
              <td>{row.grade}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SchoolTable;
