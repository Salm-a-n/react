import React from 'react';
import { useNavigate } from 'react-router-dom';

const students = ['Alexai', 'Riya', 'Sam', 'Jordan'];

function Home() {
  const navigate = useNavigate();

  const goToStudent = (name) => {
    navigate(`/student/${name}`);
  };

  return (
    <div>
      <h1>Student List</h1>
      <ul>
        {students.map((name) => (
          <li key={name}>
            <button onClick={() => goToStudent(name)}>{name}</button>
          </li>
        ))}
      </ul>
      <button onClick={() => goToStudent('Riya')}>Go to Default Student</button>
    </div>
  );
}

export default Home;