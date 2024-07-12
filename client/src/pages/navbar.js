import { Link } from 'react-router-dom';
import Container from "react-bootstrap/Container";
import { Navbar, Nav } from "react-bootstrap";
import { FaUser } from "react-icons/fa";
import { MdTranslate } from "react-icons/md";
import Logo from "../assets/logo.png";

function Navbar1() {
  return (
    <Navbar className="navbar" style={{backgroundColor:'#FCF8F4',height:'72px',display:'flex'}}>
      <Container style={{color:'black',width:'105px',marginLeft:'60px'}}>
        <img src={Logo} />
        </Container>
        <Container style={{marginRight:'50px'}}>
        <Nav className="ms-auto" style={{marginTop:'32px'}}>
          <Nav.Item style={{ marginRight: '20px', fontSize: '15px' }}>
            <Nav.Link style={{color:'black'}}><b>PROPERTIES</b></Nav.Link>
          </Nav.Item>
          <Nav.Item style={{ marginRight: '20px', fontSize: '15px'}}>
            <Nav.Link style={{color:'black'}}><b>MY DASHBOARD/ACTIVITY</b></Nav.Link>
          </Nav.Item>
          <Nav.Item style={{ marginRight: '20px', fontSize: '15px' }}>
            <Nav.Link style={{color:'black'}}><b>LIST YOUR PROPERTIES</b></Nav.Link>
          </Nav.Item>
          <Nav.Item style={{ marginRight: '20px', fontSize: '15px'}}>
            <Nav.Link style={{color:'black'}}><b>CONTACT US</b></Nav.Link>
          </Nav.Item>
          <Nav.Item style={{ marginRight: '10px', fontSize: '15px', color:'black'}}>
            <Nav.Link style={{color:'black'}}><b>MORE</b></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link style={{color:'black'}}><b>|</b></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link style={{ marginRight: '10px', fontSize: '15px' }}><b><MdTranslate size={20} color='black'></MdTranslate></b></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link ><b><FaUser color='black'></FaUser></b></Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Navbar1;
