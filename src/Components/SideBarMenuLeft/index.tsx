import { Link } from 'react-router-dom'

export default function SideBarMenuLeft() {
  return (
    <nav>
      <ul>
        <li>
            <Link to="/">
                <img />
                Today
            </Link>
        </li>
        <li>
            <Link to="/challenges">
                <img />
                Challenges
            </Link>
        </li>
        <li>
            <Link to="/network">
                <img />
                Network
            </Link>
        </li>
        <li>
            <Link to="/eartraining">
                <img />
                Eartraining
            </Link>
        </li>
        <li>
            <Link to="/profile">
                <img />
                Profile
            </Link>
        </li>
      </ul>
    </nav>
  );
}