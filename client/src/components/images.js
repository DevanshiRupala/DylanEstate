import { Container,Form, Button, Row, Col, Modal} from "react-bootstrap";
import {useState} from 'react';
import './images.css';
import Photo from '../assets/photo.png';
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Images({next_5,formData,setFormData}) {
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [modal, setModal] = useState(false);
    const navigate = useNavigate();

    const handleFileChange = (event) => {
        const files = Array.from(event.target.files);
        const fileReaders = [];

        files.forEach(file => {
            const reader = new FileReader();
            reader.onload = (event) => {
                setSelectedFiles(prevState => [...prevState, event.target.result]);
            };
            reader.readAsDataURL(file);
            fileReaders.push(reader);
        });
    };

    const handlenext = () => {
        console.log(selectedFiles);
        setFormData({...formData,images:selectedFiles});
        setModal(true);
    };

    const handleContinue = async () => {
        try {
            const res = await axios.post('http://localhost:8000/submit',  {formData});
            const id = res.data.data; 
            setModal(false);
            navigate('/thankyou',{state:{id}});
        } catch (error) {
            if (error.response) {
                console.error('Server responded with error:', error.response.data);
                console.error('Status:', error.response.status);
                console.error('Headers:', error.response.headers);
            }
        }
    };

    return (
        <>
        <Container style={{padding:'40px 50px 0px 50px',height:'368px',overflowY:'auto',width:'890px'}}>
           <Row>
            <Col>
              <p style={{marginBottom:'25px',fontSize:'20px'}}>Add Photos / videos to attract more tenants!</p>
              <p>Add Photos of living room, bedroom, bathroom, floor, doors, kitchen, balcony, location map, neighborhood,<br/> etc</p>
              <div className="photo-upload-box">
                    <Row>
                        <Col>
                    <img src={Photo} style={{height:'24px',width:'24px'}}/>
                    <input type="file" multiple onChange={handleFileChange} style={{ display: 'none' }} id="file-input"/>
                    <Button className="photo-upload-button" onClick={() => document.getElementById('file-input').click()}>
                         + Add Photos Now
                    </Button>
                    </Col>
                    </Row>
                </div>
                <Row style={{marginTop:'10px'}}>
                    <p style={{marginLeft:'1px'}}>OR</p>
                    <p style={{fontSize:'18px',marginBottom:'30px'}}>We can upload them for you! you can email the pictures and videos to us at Dylanestate.com</p>
                    <p style={{fontSize:'14px'}}>Accepted formats are .jpg, .gif, .bmp & .png.</p>
                    <p style={{fontSize:'14px',margin:'-15px 0px 70px 0px'}}>Maximum size allowed is 20MB. Minimum dimension allowed 600*400 pixel.</p>
                </Row>
            </Col>
           </Row>
        </Container>
        <Container style={{backgroundColor:'#122B49',display:'flex',height:'51px',width:'900px',marginLeft:'-10px',borderBottomLeftRadius:'16px',borderBottomRightRadius:'16px'}}>
              <p style={{color:'white',fontSize:'12px',margin:'15px 575px 0px 30px'}}>Need help ? call 999999999</p>
              <Button style={{backgroundColor:'#092541',border:'none'}} onClick={handlenext}>SAVE&POST</Button>
        </Container>
        {modal && 
        <Modal show={modal} style={{borderRadius:'16px'}} centered><Container style={{height:'252px',width:'469px',justifyItems:'center'}} >
            <Container>
                <h6 style={{fontSize:'17px',margin:'60px 0px 0px 65px'}}>POST PROPERTY ON DYLAN ESTATE?<span style={{color:'red'}}>*</span></h6>
            </Container>
            <Button style={{width:'380px',margin:'20px 0px 0px 40px',justifyItems:'center',backgroundColor:'#122B49',border:'none'}} onClick={handleContinue}>
               Continue 
            </Button>
            <Container style={{marginTop:'13px'}}>
                <h6 style={{fontSize:'13px',marginLeft:'7px'}}>By continuing you agree to our <a href="#" style={{color:'#122B49'}}>Terms and Conditions & Privacy Policy</a></h6>
            </Container>
            </Container></Modal>
            }
        </>
    )
}

export default Images;