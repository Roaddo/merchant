import { Link } from "react-router-dom";

const MenuItem = ({ Icon, Path }) => {
  return (
    <li>
      <Link to={Path} className="">
        <span>
          <i className={Icon}></i>
        </span>
      </Link>
    </li>
  );
};

export default MenuItem;
