import React, {useState} from "react";
import { Container, Col, Row } from 'react-bootstrap';
import { Link } from "react-router-dom";
import "../styles/SideBar.css";
import { FaRestroom, FaRegCalendarAlt, FaDashcube, FaHubspot, FaHospitalAlt, 
  FaRegPlayCircle, FaTypo3, FaBuilding, FaSkiing, FaGreaterThan
} from "react-icons/fa";
import { SiAbstract, SiFDroid, SiMonkeytie, SiStorybook, SiVauxhall, SiManageiq,
   SiMan, SiLatex, SiEpson } from "react-icons/si";
import { FiMenu } from "react-icons/fi";
import {GoPrimitiveDot} from "react-icons/go"
import profile from "../../assets/img/room 1.jpg";

const SideBar = () => {

  const [open, setOpen] = useState(false);
  const [openi, setOpeni] = useState(false);

  const handleToggle = () => {
    setOpen(!open)
  }

  const handleTogglei = () =>{
    setOpeni(!openi)
  }


  return (
    <>
      <Container fluid className="side-bar-container">
        <Row>
          <Col className="side-bar-left" md={3}>
            {/* <div className="logo">
              <h1> Hotel Master</h1>
            </div> */}

            <Col md={12}>
              <div md={6} className="profile-pics-div">
                <img className="profile-pics" src={profile} alt="profile-pics" />

                <div className="profile-name">
                  <h6>Mkstancreative</h6>
                  <p> <GoPrimitiveDot id="online" /> online</p>
                </div>
              </div>
            </Col>
            <Col className="menu-items-container">
              <ul className="menu-items-collection">
                <li className="menu-items"><Link to="#" className="menu-items-links"> <FaRestroom id="menu-icons" /> Dashboard</Link></li>
                <li className="menu-items"><Link to="#" className="menu-items-links"> <SiVauxhall id="menu-icons" /> Bookings </Link></li>
                <li className="menu-items">  <Link to="#" className="menu-items-links"><SiLatex id="menu-icons" /> Booked Rooms</Link> </li>
                <li className="menu-items"> <Link to="#" className="menu-items-links"> <SiEpson id="menu-icons" /> Booked Halls </Link></li>
                <li className="menu-items"> <Link to="#" className="menu-items-links"> <SiMan id="menu-icons" /> Guests </Link></li>
                <li className="menu-items"><Link to="#" className="menu-items-links"> <FiMenu id="menu-icons" /> Menus</Link></li>
                <li className="menu-items"> <Link to="#" className="menu-items-links"> <FaRegCalendarAlt id="menu-icons" /> Avaliable Celandar</Link></li>
                <li className="menu-items" onClick={handleToggle}> <Link to="#" className="menu-items-links"><FaDashcube id="menu-icons" /> Hotel Configuration  
                  <FaGreaterThan /></Link> 
                  {open && (
                    <ul className={ open? "menu-items" : "items-inline"}>
                    <li className="menu-items-inline"> <Link to="#" className="items-inline-links"> <FaTypo3 /> Room Types</Link></li>
                    <li className="menu-items-inline"><Link to="#" className="items-inline-links"><FaHubspot /> Rooms</Link></li>
                    <li className="menu-items-inline"> <Link to="#" className="items-inline-links"> <FaHospitalAlt /> Hall Types</Link></li>
                    <li className="menu-items-inline"> <Link to="#" className="items-inline-links"> <FaBuilding /> Halls</Link></li>
                    <li className="menu-items-inline"><Link to="#" className="items-inline-links"><FaRegPlayCircle /> Price Manager</Link></li>
                    <li className="menu-items-inline"><Link to="#" className="items-inline-links"> <SiMonkeytie /> Paid Services</Link> </li>
                    <li className="menu-items-inline"><Link to="#" className="items-inline-links"> <SiFDroid /> Floors</Link></li>
                    <li className="menu-items-inline"><Link to="#" className="items-inline-links"><SiAbstract /> Amenities</Link></li>
                  </ul>
                  )}
                </li>
                <li className="menu-items" onClick={handleTogglei}> <Link to="#" className="menu-items-links"> <SiStorybook id="menu-icons" /> Reports <FaGreaterThan /></Link>
                  {openi &&  (
                    <ul className={ openi? "menu-items" : "items-inline"}>
                    <li className="menu-items-inline"> Weekly Report</li>
                    <li className="menu-items-inline"> Daily Report</li>
                    <li className="menu-items-inline"> Monthly Report</li>
                    <li className="menu-items-inline"> Yearly Report</li>
                  </ul>
                  )}
                </li>
                <li className="menu-items"> <Link to="#" className="menu-items-links"><SiManageiq id="menu-icons" /> HR Management <FaGreaterThan /></Link>
                  {/* <ul>
                    <li> <Link></Link></li>
                  </ul> */}
                </li>
                <li className="menu-items"> <Link to="#" className="menu-items-links"><FaSkiing id="menu-icons" /> Administrative </Link>
                  {/* <ul>
                    <li></li>
                  </ul> */}
                </li>
              </ul>
            </Col>
          </Col>

          <Col className="side-bar-right" md={8}>
            right
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default SideBar;