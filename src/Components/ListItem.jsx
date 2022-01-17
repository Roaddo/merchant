import { Link } from "react-router-dom";

const ListItem = ({ Type, Date, Destination, Status }) => {
  return (
    <Link
      to="/dashboard"
      className="list-group-item list-group-item-action px-0"
      aria-current="true"
    >
      <div className="d-flex w-100 justify-content-between align-items-center">
        <h6 className="mb-1 text-truncate w-75 fw-bold">{Destination}</h6>
        <span className="badge rounded-pill bg-primary">{Status}</span>
      </div>
      <p className="mb-1 text-muted">
        <small>{Date}</small>
      </p>
      <small className="text-uppercase">{Type}</small>
    </Link>
  );
};

export default ListItem;
