import React from 'react';

const EventTable = ({ data }) => {
  return (
    <div className="table-container">
      {data.map((row) => (
        <div className='row-data' key={row.id}>
          <p>{row.date}</p>
          <p>{row.title}</p>
          <p>{row.message}</p>
        </div>
      ))}
    </div>
  );
}

export default EventTable;
