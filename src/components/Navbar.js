
import React, { useState } from 'react'; // <- REQUIRED for  const [showMenu, setShowMenu] = useState(false);w

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { VscRefresh } from "react-icons/vsc";
import { IoIosStarOutline } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { LiaSearchSolid } from "react-icons/lia";
import { SlHome } from "react-icons/sl";
import { PiMapPinAreaDuotone } from "react-icons/pi";
import { CiClock2 } from "react-icons/ci";
import { SlCalender } from "react-icons/sl";
import { LuWarehouse } from "react-icons/lu";
import { BsGraphUp } from "react-icons/bs";
import { FaRegSmile } from "react-icons/fa";

function NavScrollExample() {

    const [showAnimation, setShowAnimation] = useState(false);

    const toggleSidebarAnimation = () => {
        setShowAnimation(!showAnimation);
    };

    return (
        <>
            {/* Sidebar */}
            <div className="sidebar">
                <div className="sidebar1-buttons">
                    <button className="sidebar1-elements" onClick={toggleSidebarAnimation}><SlHome /></button>
                    <button className="sidebar1-elements" onClick={toggleSidebarAnimation}><PiMapPinAreaDuotone /></button>
                    <button className="sidebar1-elements" onClick={toggleSidebarAnimation}><CiClock2 /></button>
                    <button className="sidebar1-elements" onClick={toggleSidebarAnimation}><SlCalender /></button>
                    <button className="sidebar1-elements" onClick={toggleSidebarAnimation}><LuWarehouse /></button>
                    <button className="sidebar1-elements" onClick={toggleSidebarAnimation}><BsGraphUp /></button>
                    <button className="sidebar1-elements" onClick={toggleSidebarAnimation}><IoIosStarOutline /></button>
                    <button className="sidebar1-elements" onClick={toggleSidebarAnimation}><FaRegSmile /></button>
                </div>
            </div>

            {/* Sidebar Animation */}
            <div className={`sidebar-animation ${showAnimation ? 'show' : ''}`}>
                <div className="sidebar2-buttons">
                    <div className="sidebar2-elements">Forecast</div>
                    <div className="sidebar2-elements">Maps</div>
                    <div className="sidebar2-elements">Hourly Forecast</div>
                    <div className="sidebar2-elements">Monthly Forecast</div>
                    <div className="sidebar2-elements">Life</div>
                    <div className="sidebar2-elements">Historical Weather</div>
                    <div className="sidebar2-elements">Favourites</div>
                    <div className="sidebar2-elements">Send Feedback</div>
                </div>
            </div>

            {/* navbar */}
            <Navbar expand="lg">
                <Container fluid>

                    <button className="Hamburger-btn" onClick={() => setShowAnimation(!showAnimation)}>
                        <RxHamburgerMenu />
                    </button>

                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link className="forecast" href="#action1">Forecast</Nav.Link>

                            <Nav.Link className="refresh" href="#action2"> <VscRefresh /> </Nav.Link>

                            <Nav.Link className="favourite" href="#action3"> <IoIosStarOutline /> </Nav.Link>
                        </Nav>

                        <Form className="d-flex">
                            <Form.Control type="search" placeholder="Search for location" className="search-input" />
                            <LiaSearchSolid className="search-icon" />
                        </Form>


                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>

    );
}



export default NavScrollExample;
