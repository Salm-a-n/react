import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import Navbar from "../Navbar";

function EditMedicine() {
  const { id } = useParams();
  const user = useSelector(store => store.auth.user);
  const key = `medicines_${user.email}`;
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [stock, setStock] = useState("");

  useEffect(() => {
    const meds = JSON.parse(localStorage.getItem(key)) || [];
    const med = meds.find(m => m.id === parseInt(id));
    if (med) {
      setName(med.name);
      setStock(med.stock);
    }
  }, [id, key]);

  function updateMed() {
    const meds = JSON.parse(localStorage.getItem(key)) || [];
    const updated = meds.map(m =>
      m.id === parseInt(id) ? { ...m, name, stock } : m
    );
    localStorage.setItem(key, JSON.stringify(updated));
    navigate("/medicines");
  }

  return (
    <div>
      <Navbar />
      <div className="container mt-4">
        <h2 className="mb-4">Edit Medicine</h2>

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
            className="btn btn-primary"
            onClick={updateMed}
          >
            Update
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

export default EditMedicine;