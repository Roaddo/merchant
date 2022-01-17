import { Link } from "react-router-dom";

const DashboardHeader = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light py-2 fixed-top navbar-dashboard">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/profile">
                <div className="rounded-circle icon-circle bg-primary">
                  <i className="ri-user-line"></i>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default DashboardHeader;
