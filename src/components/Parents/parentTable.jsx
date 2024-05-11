import React from 'react';

const ParentTable = ({ data }) => {
  return (
    <div className="table-container">
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Photo</th>
            <th>Name</th>
            <th>Gender</th>
            <th>Class</th>
            <th>Section</th>
            <th>Address</th>
            <th>Mobile No</th>
            <th>Email</th>
            <th>Date of Birth</th>
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
              <td>{row.class}</td>
              <td>{row.section}</td>
              <td>{row.address}</td>
              <td>{row.mobile}</td>
              <td>{row.email}</td>
              <td>{row.dateOfBirth}</td>
              <td>{row.action}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ParentTable;
