import { NavLink } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div>
      <h2>Public Area</h2>
      <div>
        <NavLink to="/restricted" exact>
          Restricted Area
        </NavLink>
      </div>
    </div>
  );
};

export default Home;
