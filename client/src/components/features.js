import { Container,Form, Button, Row, Col } from "react-bootstrap";
import Lift from '../assets/lift.png';
import Sport from '../assets/sport.png';
import { useState } from "react";

function Features({next_3,next_4,formData,setFormData}) {
    const [furnishing,setfurnishing] = useState({
        FF: false,
        SF:false,
        UF:false
    });
    const [tiles,setTiles] = useState({
        Normal:false,
        Marble:false,
        Vitrified:false
    });
    const [amenities,setamenities] = useState({
        Lift:false,
        Sport:false
    })

    const handlenext = () => {
        const selectedFurnishing = Object.keys(furnishing).filter(key => furnishing[key]);
        const selectedTiles = Object.keys(tiles).filter(key => tiles[key]);
        const selectedAmenities = Object.keys(amenities).filter(key => amenities[key]);
        
        setFormData(prevFormData => ({
            ...prevFormData,
            furnishing: selectedFurnishing,
            tiles: selectedTiles,
            societyAmenities: selectedAmenities
        }));
        next_3({next:false,color_b:'#FCF8F4',color_l:'#122B49'});
        next_4({next:true,color_b:'#EDF2F8',color_l:'#d6d6d6'});
    }

    return (
        <>
        <Container style={{margin:'0px 0px 0px 40px',height:'370px',width:'850px',overflowY:'auto',paddingTop:'40px'}}>
        <Form>
        <Form.Group controlId="formFurnishing">
            <Form.Label style={{marginBottom:'26px'}}>
            <span style={{ color: 'red' }}>*</span> Furnishing
            </Form.Label>
            <div style={{display:'flex',marginBottom:'30px'}}>
            <Form.Check 
                type="checkbox"
                label="Fully Furnished"
                name="furnishing"
                id="fullyFurnished"
                style={{marginRight:'70px'}}
                onChange={() => setfurnishing({ ...furnishing, FF: !furnishing.FF })}
                value="Fully Furnished"
                required
            />
            <Form.Check 
                type="checkbox"
                label="Semi Furnished"
                name="furnishing"
                id="semiFurnished"
                style={{ marginRight: '70px' }}
                onChange={()=>setfurnishing({...furnishing, SF: !furnishing.SF})}
                value="Semi Furnished"
            />
            <Form.Check 
                type="checkbox"
                label="Unfurnished"
                name="furnishing"
                id="unfurnished"
                style={{ marginRight: '45px' }}
                onChange={()=>setfurnishing({...furnishing,UF:!furnishing.UF})}
                value="Unfurnished"
            />
            </div>
        </Form.Group>
        <Row><div style={{height:'1px',backgroundColor:'#D6D6D6',width:'800px',marginBottom:'30px'}}></div></Row>
        <Form.Group>
            <Form.Label style={{marginBottom:'26px'}}>
                <span style={{color:'red'}}>*</span> Tiles
            </Form.Label>
            <div style={{display:'flex',marginBottom:'30px'}}>
            <Form.Check 
             type="checkbox"
             label="Normal white tiles"
             name='tiles'
             style={{marginRight:'50px'}}
             value="Normal white tiles"
             onChange={()=>setTiles({...tiles,Normal:!tiles.Normal})}
             required
            />
            <Form.Check 
             type="checkbox"
             label="Marble"
             name='tiles'
             style={{marginRight:'125px'}}
             value="Marble"
             onChange={()=>setTiles({...tiles,Marble:!tiles.Marble})}
            />
            <Form.Check 
             type="checkbox"
             label="Vitrified Tiles"
             name='tiles'
             style={{marginRight:'30px'}}
             value="Vitrified tiles"
             onChange={()=>setTiles({...tiles,Vitrified:!tiles.Vitrified})}
            />
            </div>
        </Form.Group>
        <Row><div style={{height:'1px',backgroundColor:'#D6D6D6',width:'800px',marginBottom:'30px'}}></div></Row>
        <Row>
            <Form.Group>
                <Form.Label style={{marginBottom:'30px'}}>SOCIETY AMENITIES</Form.Label>
                <Row>
                <Col>
                <div><img src={Lift} style={{height:'34px',width:'34px'}}/><p style={{marginLeft:'5px',color:'#a7a7a7'}}>Lift</p></div>
                <Form.Check required type="checkbox" name='lift' value="Lift" style={{marginLeft:'10px'}} onChange={() => setamenities({...amenities,Lift:!amenities.Lift})}/></Col>
                <Col>
                <div><img src={Sport} style={{height:'34px',width:'34px'}}/><p style={{marginLeft:'5px',color:'#a7a7a7'}}>Sport</p></div>
                <Form.Check type="checkbox" name='sport' value="Sport" style={{marginLeft:'10px'}} onChange={() => setamenities({...amenities,Sport:!amenities.Sport})}/></Col></Row>
            </Form.Group>
        </Row>
        </Form>
         </Container>
         <Container style={{backgroundColor:'#122B49',display:'flex',height:'51px',width:'900px',marginLeft:'-10px',borderBottomLeftRadius:'16px',borderBottomRightRadius:'16px'}}>
              <p style={{color:'white',fontSize:'12px',margin:'15px 575px 0px 30px'}}>Need help ? call 999999999</p>
              <Button style={{backgroundColor:'#092541',border:'none'}} onClick={handlenext}>NEXT</Button>
        </Container>
        </>
    )
}

export default Features;