import './index.scss'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
  faCodepen,
  faRProject,
  
  
  
} from '@fortawesome/free-brands-svg-icons'
import { faHome, faUser, faEnvelope,faSuitcase,faSearch } from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={LogoS} alt="Logo" />
        <img className="sub-logo" src={LogoSubtitle} alt="shivani" />
      </Link>

      <nav>

        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>

        <NavLink activeclassname="active" className="about-link" to="/about">
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>

        {/* <NavLink activeclassname="active" className="skills-link" to="/skills">
          <FontAwesomeIcon icon={faSearch} color="#4d4d4e" />
        </NavLink> */}

        {/* <NavLink
          activeclassname="active"
          className="work-link"
          to="/work"
        >
          <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
        </NavLink> */}
        <NavLink
          activeclassname="active"
          className="contact-link"
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
      </nav>
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/shivani-narang-a86298141/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
          </a>
        </li>

        <li>
          <a
            href="https://leetcode.com/shivaninarang20/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faCodepen} color="#4d4d4e" />
          </a>
        </li>
        
        <li>
          <a
            href="https://drive.google.com/file/d/1EJBTrTF-b0JmtVVW8Oe-OkhRoBV3tlt7/view"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={  faRProject} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/Shivani-exe"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
          </a>
        </li>
        
        
      </ul>
    </div>
  )
}

export default Sidebar