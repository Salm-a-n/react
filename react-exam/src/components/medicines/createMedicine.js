// import { useState } from "react";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import Navbar from "../Navbar";
// import checkAuth from "../auth/CheckAuth";

// function CreateMedicine() {
//   const [name, setName] = useState("");
//   const [stock, setStock] = useState("");
//   const user = useSelector(store => store.auth.user);
//   const navigate = useNavigate();

//   const key = `medicines_${user.email}`;
//   const medicines = JSON.parse(localStorage.getItem(key)) || [];

//   function addMedicine() {
//     const today = new Date().toLocaleDateString(); // e.g. "25/11/2025"

//     // ✅ Only count medicines added today
//     const todaysMeds = medicines.filter(m => {
//       const medDate = new Date(m.addedAt).toLocaleDateString();
//       return medDate === today;
//     });

//     if (todaysMeds.length >= 5) {
//       alert("You can only add 5 medicines today.");
//       navigate("/medicines");
//       return;
//     }

//     const newMed = {
//       id: Date.now(),
//       name,
//       stock,
//       addedAt: new Date().toLocaleString(), // includes date + time
//     };

//     localStorage.setItem(key, JSON.stringify([...medicines, newMed]));
//     navigate("/medicines");
//   }

//   return (
//     <div>
//       <Navbar />
//       <div className="container mt-4">
//         <h2 className="mb-4">Add Medicine</h2>

//         <form className="card p-4 shadow-sm">
//           <div className="mb-3">
//             <label className="form-label">Medicine Name</label>
//             <input
//               type="text"
//               className="form-control"
//               value={name}
//               onChange={e => setName(e.target.value)}
//               placeholder="Enter medicine name"
//             />
//           </div>

//           <div className="mb-3">
//             <label className="form-label">Stock</label>
//             <input
//               type="number"
//               className="form-control"
//               value={stock}
//               onChange={e => setStock(e.target.value)}
//               placeholder="Enter stock quantity"
//             />
//           </div>

//           <button
//             type="button"
//             className="btn btn-success"
//             onClick={addMedicine}
//           >
//             Add Medicine
//           </button>
//           <button
//             type="button"
//             className="btn btn-secondary ms-2"
//             onClick={() => navigate("/medicines")}
//           >
//             Cancel
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default checkAuth(CreateMedicine);

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
    const today = new Date().toLocaleDateString(); 

    const todaysMeds = medicines.filter(m => m.addedDate === today);

    if (todaysMeds.length >= 5) {
      alert("You can only add 5 medicines today.");
      navigate("/medicines");
      return;
    }

    const newMed = {
      id: Date.now(),
      name,
      stock,
      addedAt: new Date().toLocaleString(),     
      addedDate: today                          
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