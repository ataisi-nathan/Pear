import React from 'react';

const FeeTable = ({ data }) => {
  return (
    <div className="table-container fees">
      <table className="table">
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Amount Paid</th>
            <th>Date Paid</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id}>
              <td>{row.studentName}</td>
              <td>{row.amountPaid}</td>
              <td>{row.datePaid}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FeeTable;
