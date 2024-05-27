import React from 'react';

const ClassTable = ({ data }) => {
  return (
    <div className="table-container">
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Photo</th>
            <th>Teacher Name</th>
            <th>Gender</th>
            <th>Subject</th>
            <th>Class</th>
            <th>Section</th>
            <th>Date</th>
            <th>Time</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.photo}</td>
              <td>{row.name}</td>
              <td>{row.gender}</td>
              <td>{row.subject}</td>
              <td>{row.class}</td>
              <td>{row.section}</td>
              <td>{row.date}</td>
              <td>{row.time}</td>
              <td>{row.action}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ClassTable;
