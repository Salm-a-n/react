import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "../Navbar";

function ViewMedicine() {
  const { id } = useParams();
  const navigate = useNavigate();
  const user = useSelector(store => store.auth.user);
  const key = `medicines_${user.email}`;
  const [medicine, setMedicine] = useState(null);

  useEffect(() => {
    const meds = JSON.parse(localStorage.getItem(key)) || [];
    const med = meds.find(m => m.id === parseInt(id));
    if (med) setMedicine(med);
  }, [id, key]);

  if (!medicine) {
    return (
      <div>
        <Navbar />
        <div className="container mt-4">
          <div className="alert alert-danger">Medicine not found</div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <div className="container mt-4">
        <h2 className="mb-4">Medicine Details</h2>

        <div className="card shadow-sm">
          <div className="card-body">
            <h4 className="card-title">{medicine.name}</h4>
            <p className="card-text">
              <strong>Stock:</strong> {medicine.stock}
            </p>
            <p className="card-text">
              <strong>Added At:</strong> {medicine.addedAt}
            </p>

            <button
              className="btn btn-secondary"
              onClick={() => navigate("/medicines")}
            >
              Back to List
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewMedicine;