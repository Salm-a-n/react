import React from 'react';
import { useParams } from 'react-router-dom';

function Student() {
  const { name } = useParams();

  return (
    <div>
      <h2>Welcome, {name}!</h2>
    </div>
  );
}

export default Student;