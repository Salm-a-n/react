import React, { useState } from "react";

function StudentCrud() {
  const [students, setStudents] = useState([
    { id: 1, name: "John Doe", roll: "101", className: "10A" },
    { id: 2, name: "Sarah Lee", roll: "102", className: "10B" },
  ]);

  const [name, setName] = useState("");
  const [roll, setRoll] = useState("");
  const [className, setClassName] = useState("");

  const [editingId, setEditingId] = useState(null);
  const [editedStudent, setEditedStudent] = useState({
    name: "",
    roll: "",
    className: "",
  });

  const [searchTerm, setSearchTerm] = useState("");

  
  const handleSubmit = (event) => {
    event.preventDefault();

    if (!name.trim() || !roll.trim() || !className.trim()) {
      alert("All fields are required");
      return;
    }

    const rollExists = students.some((stu) => stu.roll === roll);
    if (rollExists) {
      alert("Roll number must be unique");
      return;
    }

    const newStudent = {
      id: students.length + 1,
      name: name,
      roll: roll,
      className: className,
    };

    setStudents([...students, newStudent]);

    setName("");
    setRoll("");
    setClassName("");
  };


  const handleDelete = (id) => {
    const updated = students.filter((stu) => stu.id !== id);
    setStudents(updated);
  };


  const handleEdit = (stu) => {
    setEditingId(stu.id);
    setEditedStudent({
      name: stu.name,
      roll: stu.roll,
      className: stu.className,
    });
  };

  const handleSave = () => {
    if (
      !editedStudent.name.trim() ||
      !editedStudent.roll.trim() ||
      !editedStudent.className.trim()
    ) {
      alert("All fields are required");
      return;
    }

    const rollExists = students.some(
      (stu) => stu.roll === editedStudent.roll && stu.id !== editingId
    );
    if (rollExists) {
      alert("Roll number already taken by another student");
      return;
    }

    const updatedList = students.map((stu) =>
      stu.id === editingId ? { ...stu, ...editedStudent } : stu
    );

    setStudents(updatedList);
    setEditingId(null);
  };

  const handleCancel = () => {
    setEditingId(null);
    setEditedStudent({ name: "", roll: "", className: "" });
  };

  
  const filteredStudents = students.filter((stu) =>
    stu.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mt-4">
      <h2>Student Management App</h2>

      <form onSubmit={handleSubmit} className="mb-4">
        <label>Student Name:</label>
        <input
          type="text"
          className="form-control"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>Roll Number:</label>
        <input
          type="text"
          className="form-control"
          value={roll}
          onChange={(e) => setRoll(e.target.value)}
        />

        <label>Class:</label>
        <input
          type="text"
          className="form-control"
          value={className}
          onChange={(e) => setClassName(e.target.value)}
        />

        <button type="submit" className="btn btn-success mt-3">
          Add Student
        </button>
      </form>

    
      <label>Search Student:</label>
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

     
      <table className="table table-bordered table-dark">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Roll No</th>
            <th>Class</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {filteredStudents.length === 0 ? (
            <tr>
              <td colSpan={5} className="text-center">
                No students found
              </td>
            </tr>
          ) : (
            filteredStudents.map((stu) => (
              <tr key={stu.id}>
                <td>{stu.id}</td>

                <td>
                  {editingId === stu.id ? (
                    <input
                      type="text"
                      value={editedStudent.name}
                      onChange={(e) =>
                        setEditedStudent({
                          ...editedStudent,
                          name: e.target.value,
                        })
                      }
                    />
                  ) : (
                    stu.name
                  )}
                </td>

                <td>
                  {editingId === stu.id ? (
                    <input
                      type="text"
                      value={editedStudent.roll}
                      onChange={(e) =>
                        setEditedStudent({
                          ...editedStudent,
                          roll: e.target.value,
                        })
                      }
                    />
                  ) : (
                    stu.roll
                  )}
                </td>

                <td>
                  {editingId === stu.id ? (
                    <input
                      type="text"
                      value={editedStudent.className}
                      onChange={(e) =>
                        setEditedStudent({
                          ...editedStudent,
                          className: e.target.value,
                        })
                      }
                    />
                  ) : (
                    stu.className
                  )}
                </td>

                <td>
                  {editingId === stu.id ? (
                    <>
                      <button className="btn btn-primary" onClick={handleSave}>
                        Save
                      </button>{" "}
                      <button className="btn btn-secondary" onClick={handleCancel}>
                        Cancel
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        className="btn btn-primary"
                        onClick={() => handleEdit(stu)}
                      >
                        Edit
                      </button>{" "}
                      <button
                        className="btn btn-danger"
                        onClick={() => handleDelete(stu.id)}
                      >
                        Delete
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default StudentCrud;
