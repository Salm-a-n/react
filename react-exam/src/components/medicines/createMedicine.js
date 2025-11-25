import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import checkAuth from "../auth/CheckAuth";

function CreateMedicine() {
  const [name, setName] = useState("");
  const [stock, setStock] = useState("");
  const user = useSelector(store => store.auth.user);
  const navigate = useNavigate();

  const key = `medicines_${user.email}`;
  const medicines = JSON.parse(localStorage.getItem(key)) || [];

  function addMedicine() {
    if (medicines.length >= 5) {
      alert("You can only add 5 medicines.");
      navigate("/medicines");
      return;
    }

    const newMed = {
      id: Date.now(),
      name,
      stock,
      addedAt: new Date().toLocaleString(),
    };

    localStorage.setItem(key, JSON.stringify([...medicines, newMed]));
    navigate("/medicines");
  }

  return (
    <div>
      <Navbar />
      <div className="container mt-4">
        <h2 className="mb-4">Add Medicine</h2>

        <form className="card p-4 shadow-sm">
          <div className="mb-3">
            <label className="form-label">Medicine Name</label>
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Enter medicine name"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Stock</label>
            <input
              type="number"
              className="form-control"
              value={stock}
              onChange={e => setStock(e.target.value)}
              placeholder="Enter stock quantity"
            />
          </div>

          <button
            type="button"
            className="btn btn-success"
            onClick={addMedicine}
          >
             Add Medicine
          </button>
          <button
            type="button"
            className="btn btn-secondary ms-2"
            onClick={() => navigate("/medicines")}
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}

export default checkAuth(CreateMedicine);