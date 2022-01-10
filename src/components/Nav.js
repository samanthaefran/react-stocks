import { Link } from 'react-router-dom';

const Nav = (props) => {
  return (
    <div className="nav">
      <Link to="/">
        <div>React Stocks</div>
      </Link>
      <Link to="/stocks">
        <div>Stocks</div>
      </Link>
      <Link to="/About">
      <div>About</div>
      </Link>

    </div>
  )
}

export default Nav;