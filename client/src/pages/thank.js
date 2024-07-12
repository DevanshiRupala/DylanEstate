import React from 'react';
import { Container, Button } from 'react-bootstrap';
import Navbar from './navbar';
import { useLocation, useNavigate } from 'react-router-dom';

function ThankYouPage() {
    const navigate = useNavigate();
    const location = useLocation();
    const id = location.state.id;
    console.log(id)

    const handleclick = () => {
        navigate('/preview',{state:{id}});
    }

    return (
        <>
        <Navbar/>
        <Container style={{ padding: '40px',height:'393px',marginTop:'30px'}}>
            <p style={{fontSize:'25px',marginBottom:'15px'}}>Thank you for listing your property with us,</p>
            <p>Your listing will be reviewed and will go live within 24 hours.</p><br/>
            <p>
                We will now manage your listing and get in touch with you after finding the best suitable tenant<br/>
                as per your preference.
            </p>
            <p style={{margin:'60px 0px 70px 0px',fontFamily:'Jacques Francois',color:'#122B49'}}>-Dylan Estates</p>
            <div style={{ marginTop: '20px' }}>
                <Button variant="primary" style={{ marginRight: '10px',backgroundColor:'#122B49',border:'none'}}>Edit Property Listing</Button>
                <Button variant="primary" style={{ backgroundColor:'#122B49',border:'none' }} onClick={handleclick}>Preview Property Listing</Button>
            </div>
        </Container>
        </>
    );
}

export default ThankYouPage;
