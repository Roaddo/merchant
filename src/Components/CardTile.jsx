import { Link } from "react-router-dom";

const CardTile = ({ Icon, Count, Title, Path, IconColor }) => {
  return (
    <Link to={Path} className="card-title d-flex bg-light align-items-center">
      <div className={`rounded-circle icon-circle ` + IconColor}>
        <i className={Icon}></i>
      </div>
      &nbsp;&nbsp;
      <div>
        <h5 className="mb-0 fw-bold">{Count}</h5>
        <p className="text-muted mb-0 fw-bold tile-title">{Title}</p>
      </div>
    </Link>
  );
};

export default CardTile;
