import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import checkAuth from "../auth/CheckAuth";
import Navbar from "../Navbar";
import { useState } from "react";

function ListMedicine() {
  const user = useSelector(store => store.auth.user);
  const key = `medicines_${user.email}`;
  const all = JSON.parse(localStorage.getItem(key)) || [];
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const pageSize = 3;
  const newestFirst = [...all].reverse();

  const filtered = newestFirst.filter(m =>
    m.name?.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filtered.length / pageSize) || 1;
  const paginated = filtered.slice((page - 1) * pageSize, page * pageSize);

  function deleteMed(id) {
    const confirmDelete = window.confirm("Do you really want to remove this medicine?");
    if (!confirmDelete) return;
    const updated = all.filter(m => m.id !== id);
    localStorage.setItem(key, JSON.stringify(updated));
    navigate("/medicines");
  }

  return (
    <div>
      <Navbar />
      <div className="container mt-4">
        <h2 className="mb-3">My Medicines</h2>

        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            value={search}
            onChange={e => {
              setSearch(e.target.value);
              setPage(1);
            }}
            placeholder="Search medicine..."
          />
          <button
            className="btn btn-outline-secondary"
            onClick={() => {
              setSearch("");
              setPage(1);
            }}
          >
            Cancel
          </button>
        </div>

        {filtered.length === 0 ? (
          <div className="alert alert-warning">
            No medicines found for <strong>"{search}"</strong>
          </div>
        ) : (
          <>
            <table className="table table-striped table-hover">
              <thead className="table-dark">
                <tr>
                  <th>Name</th>
                  <th>Stock</th>
                  <th>Added At</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {paginated.map(m => (
                  <tr key={m.id}>
                    <td>{m.name}</td>
                    <td>{m.stock}</td>
                    <td>{m.addedAt}</td> 
                    <td>
                      <Link
                        to={`/medicines/view/${m.id}`}
                        className="btn btn-info btn-sm me-2"
                      >
                        View
                      </Link>
                      <Link
                        to={`/medicines/edit/${m.id}`}
                        className="btn btn-primary btn-sm me-2"
                      >
                        Edit
                      </Link>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => deleteMed(m.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <nav>
              <ul className="pagination">
                <li className={`page-item ${page === 1 ? "disabled" : ""}`}>
                  <button
                    className="page-link"
                    onClick={() => setPage(page - 1)}
                  >
                    Prev
                  </button>
                </li>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(num => (
                  <li
                    key={num}
                    className={`page-item ${page === num ? "active" : ""}`}
                  >
                    <button
                      className="page-link"
                      onClick={() => setPage(num)}
                    >
                      {num}
                    </button>
                  </li>
                ))}
                <li
                  className={`page-item ${page === totalPages ? "disabled" : ""}`}
                >
                  <button
                    className="page-link"
                    onClick={() => setPage(page + 1)}
                  >
                    Next
                  </button>
                </li>
              </ul>
            </nav>
          </>
        )}

        <Link to="/medicines/create" className="btn btn-success mb-3">
          Add Medicine
        </Link>
      </div>
    </div>
  );
}

export default checkAuth(ListMedicine);