import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import styles from '../styles/components/Navbar.module.scss'
import header from '../styles/components/Header.module.scss'


const NavbarFile = () => {
  return (
    <>
      {/* <div className={header.header}>
        <div className="container">
          <div className='row'>
            <div className='col-8'>
              <span className={header.HeaderLeft}>A Leading Software Development Company</span>
            </div>
            <div className='col-4 text-end'>
              <a href="tel:918160763895" className={header.HeaderRight}>

                <span className="text-end">
                  <strong>+91 81607 63895</strong>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div> */}
      <div className="container">
        <Navbar className={styles.Nav} key={'xl'} bg="transperent" expand={'xl'} >
          <Container fluid>
            <Navbar.Brand href="#">
              <div className={styles.navbarBrand}>
                <img src="https://www.infilon.com/assets/images/logo/light-logo.png" alt="" />
              </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${'xl'}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${'xl'}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${'xl'}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${'xl'}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">About</Nav.Link>
                  <NavDropdown
                    title="Services"
                    id={`offcanvasNavbarDropdown-expand-${'xl'}`}
                  >
                    <NavDropdown.Item style={{ width: '100%' }}>
                      <div className="row">
                        <div className='col-xl-3'>
                          sad
                        </div>
                        <div className='col-xl-3'>
                          sda
                        </div>
                        <div className='col-xl-3'>
                          dsa
                        </div>
                        <div className='col-xl-3'>
                          asd
                        </div>
                      </div>
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown
                    title="Technology"
                    id={`offcanvasNavbarDropdown-expand-${'xl'}`}
                  >
                    <NavDropdown.Item href="#action3">Technology</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown
                    title="Hire a Team"
                    id={`offcanvasNavbarDropdown-expand-${'xl'}`}
                  >
                    <NavDropdown.Item href="#action3">Hire a Team</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="#action2">Careers</Nav.Link>
                  <Nav.Link href="#action2">Blog</Nav.Link>
                  <Button className={styles.navContactUs}>Contact Us</Button>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      </div>
    </>
  );
}



export default NavbarFile
