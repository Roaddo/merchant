import { Link } from "react-router-dom";

const CardTileMin = ({ Path, Title, Count }) => {
  return (
    <Link to={Path} className="card-title d-flex bg-light align-items-center">
      <div>
        <p className={`text-muted mb-0 fw-bold tile-title`}>{Title}</p>
        <h5 className="mb-0 fw-bold">{Count}</h5>
      </div>
    </Link>
  );
};

export default CardTileMin;
