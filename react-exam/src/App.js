import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <div className="container mt-4">
        <div className="card shadow-sm">
          <div className="card-body">
            <h2 className="card-title mb-3">Welcome to Medical Store Management System</h2>
            <p className="card-text">
              The Medical Store Management System is designed to simplify the process of managing medicines 
              in a pharmacy or medical shop. It allows users to register and log in securely, add new medicines 
              with details like name, stock, and date of entry, and view, edit, or delete records with ease. 
              With search and pagination features, it ensures quick access to specific medicines while keeping 
              track of inventory efficiently. This system provides an organized way to handle day‑to‑day operations 
              and helps medical stores maintain accurate records for better service.
            </p>
            <a href="/login" className="btn btn-primary">Get Started</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;