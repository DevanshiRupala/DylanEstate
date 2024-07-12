import { Container,Form, Button, Row, Col } from 'react-bootstrap'; 
import { useState } from 'react';
import './images.css'

function PropertyDetails ({next_1,next_2,formData,setFormData}) {
    const [propertyType, setPropertyType] = useState('');
    const [selectedProperty, setSelectedProperty] = useState({
      flat : false,
      house : false,
      office : false,
      coworking : false,
      restaurant : false,
      shop : false,
      industrialbladg : false,
      industrialshed : false,
      warehouse : false
    });

    console.log(formData);

  const handlePropertyTypeChange = (event) => {
    setPropertyType(event.target.value);
  };

  const handlenext = () => {
    const subCategory = Object.keys(selectedProperty).filter(key => selectedProperty[key]);
    setFormData({
      ...formData,
      category: propertyType,
      subCategory: subCategory,
      buildUpArea: formData.buildUpArea, 
      carpetArea: formData.carpetArea 
    });
    console.log(formData);
    next_1({next:false,color_b:'#FCF8F4',color_l:'#122B49'});
    next_2({next:true,color_b:'#EDF2F8',color_l:'#d6d6d6'});
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
        ...formData,
        [name]: value
    });
  };

    return (
        <>
        <Container style={{overflowY:'auto',height:'380px',width:'890px',padding:'40px 40px 0px 55px'}}>
        <Form>
        <Row style={{marginBottom:'35px'}}>
          <Form.Group as={Col} controlId="propertyFor">
            <Form.Label style={{fontSize:'17px'}}><span style={{color:'red'}}>*</span> Property For :</Form.Label>
            <div>
              <Form.Check
                inline
                type="radio"
                label="Rent"
                name="propertyType"
                value="rent"
                style={{color:'#122B49'}}
                onChange={handleInputChange}
                required
              />
              <Form.Check
                inline
                type="radio"
                label="Sale"
                name="propertyType"
                value="sale"
                onChange={handleInputChange}
              />
            </div>
          </Form.Group>
        </Row>
        
        <Row style={{marginBottom:'35px'}}>
          <Form.Group as={Col} controlId="propertyType">
            <Form.Label style={{fontSize:'17px'}}><span style={{color:'red'}}>*</span> Property Type :</Form.Label>
            <div>
              <Form.Check
                inline
                type="radio"
                label="Residential"
                name="catagory"
                value="residential"
                checked={propertyType === 'residential'}
                onChange={handlePropertyTypeChange}
                required
              />
              <Form.Check
                inline
                type="radio"
                label="Commercial"
                name="catagory"
                value="commercial"
                checked={propertyType === 'commercial'}
                onChange={handlePropertyTypeChange}
              />
              <Form.Check
                inline
                type="radio"
                label="Land / Plot"
                name="catagory"
                value="land"
                checked={propertyType === 'land'}
                onChange={handlePropertyTypeChange}
              />
            </div>
          </Form.Group>
        </Row>

        {propertyType === 'residential' && (
              <Row className="mb-3">
                <Form.Group as={Col}>
                  <div className="d-flex flex-wrap">
                  <Button
                  variant="outline-secondary"
                  name="Flat/Apartment"
                  onClick={() => setSelectedProperty({...selectedProperty,flat : !selectedProperty.flat})}
                  style={{
                    borderRadius: '45px',
                    marginRight: '15px',
                    padding: '5px 23px 5px 23px',
                    color: selectedProperty.flat ? 'white' : 'black',
                    backgroundColor: selectedProperty.flat ? '#122B49' : 'transparent',
                    borderColor: 'gray'
                  }}
                >
                Flat/Apartment
                </Button>
                <Button
                  variant="outline-secondary"
                  name="House/Villa"
                  onClick={() => setSelectedProperty({...selectedProperty,house : !selectedProperty.house})}
                  style={{
                    borderRadius: '45px',
                    padding: '5px 23px 5px 23px',
                    color: selectedProperty.house ? 'white' : 'black',
                    backgroundColor: selectedProperty.house ? '#122B49' : 'transparent',
                    borderColor: 'gray'
                  }}
                >
                  House/Villa
                </Button>
                  </div>
                </Form.Group>
              </Row>
            )}

        {propertyType === 'commercial' && (
              <Row className="mb-3">
                <Form.Group as={Col}>
                  <div className="d-flex flex-wrap">
                  <Button
                  variant="outline-secondary"
                  name="propertyType"
                  value="Office Space"
                  onClick={ () => setSelectedProperty({...selectedProperty,office : !selectedProperty.office})}
                  style={{
                    borderRadius: '45px',
                    marginRight: '15px',
                    padding: '5px 23px 5px 23px',
                    color: selectedProperty.office ? 'white' : 'black',
                    backgroundColor: selectedProperty.office ? '#122B49' : 'transparent',
                    borderColor: 'gray',
                    marginBottom: '10px'
                  }}
                >
                  Office Space
                </Button>
                <Button
                  variant="outline-secondary"
                  name="propertyType"
                  value="Co working"
                  onClick={() => setSelectedProperty({...selectedProperty,coworking : !selectedProperty.coworking})}
                  style={{
                    borderRadius: '45px',
                    marginRight: '15px',
                    padding: '5px 23px 5px 23px',
                    color: selectedProperty.coworking ? 'white' : 'black',
                    backgroundColor: selectedProperty.coworking ? '#122B49' : 'transparent',
                    borderColor: 'gray',
                    marginBottom: '10px'
                  }}
                >
                  Co working
                </Button>
                <Button
                  variant="outline-secondary"
                  name="propertyType"
                  value="Restaurant / Cafe"
                  onClick={() => setSelectedProperty({...selectedProperty,restaurant : !selectedProperty.restaurant})}
                  style={{
                    borderRadius: '45px',
                    marginRight: '15px',
                    padding: '5px 23px 5px 23px',
                    color: selectedProperty.restaurant ? 'white' : 'black',
                    backgroundColor: selectedProperty.restaurant ? '#122B49' : 'transparent',
                    borderColor: 'gray',
                    marginBottom: '10px'
                  }}
                >
                  Restaurant / Cafe
                </Button>
                <Button
                  variant="outline-secondary"
                  name="propertyType"
                  value="Shop/Showroom"
                  onClick={() => setSelectedProperty({...selectedProperty,shop : !selectedProperty.shop})}
                  style={{
                    borderRadius: '45px',
                    marginRight: '15px',
                    padding: '5px 23px 5px 23px',
                    color: selectedProperty.shop ? 'white' : 'black',
                    backgroundColor: selectedProperty.shop ? '#122B49' : 'transparent',
                    borderColor: 'gray',
                    marginBottom: '10px'
                  }}
                >
                  Shop/Showroom
                </Button>
                <Button
                  variant="outline-secondary"
                  name="propertyType"
                  value="Industrial Bldg."
                  onClick={ () => setSelectedProperty({...selectedProperty,industrialbladg : !selectedProperty.industrialbladg})}
                  style={{
                    borderRadius: '45px',
                    marginRight: '15px',
                    padding: '5px 23px 5px 23px',
                    color: selectedProperty.industrialbladg ? 'white' : 'black',
                    backgroundColor: selectedProperty.industrialbladg ? '#122B49' : 'transparent',
                    borderColor: 'gray',
                    marginBottom: '10px'
                  }}
                >
                  Industrial Bldg.
                </Button>
                <Button
                  variant="outline-secondary"
                  name="propertyType"
                  value="Industrial Shed"
                  onClick={()=>setSelectedProperty({...selectedProperty,industrialshed : !selectedProperty.industrialshed})}
                  style={{
                    borderRadius: '45px',
                    marginRight: '15px',
                    padding: '5px 23px 5px 23px',
                    color: selectedProperty.industrialshed ? 'white' : 'black',
                    backgroundColor: selectedProperty.industrialshed ? '#122B49' : 'transparent',
                    borderColor: 'gray',
                    marginBottom: '10px'
                  }}
                >
                  Industrial Shed
                </Button>
                <Button
                  variant="outline-secondary"
                  name="propertyType"
                  value="Warehouse/Godown"
                  onClick={() => setSelectedProperty({...selectedProperty,warehouse : !selectedProperty.warehouse})}
                  style={{
                    borderRadius: '45px',
                    marginRight: '15px',
                    padding: '5px 23px 5px 23px',
                    color: selectedProperty.warehouse ? 'white' : 'black',
                    backgroundColor: selectedProperty.warehouse ? '#122B49' : 'transparent',
                    borderColor: 'gray',
                    marginBottom: '10px'
                  }}
                >
                  Warehouse/Godown
                </Button>
                  </div>
                </Form.Group>
              </Row>
            )}
        
        <Row className="mb-3">
          <Form.Group as={Col} controlId="builtUpArea">
            <Form.Label>Built up Area <span style={{color:'red'}}>*</span></Form.Label>
            <Form.Control type="text" name="buildUpArea" required onChange={(e) => setFormData({...formData,buildUpArea:e.target.value})} placeholder="0                                                                        Sq.Ft" />
          </Form.Group>
          <Form.Group as={Col} controlId="carpetArea">
            <Form.Label>Carpet Area <span style={{color:'red'}}>*</span></Form.Label>
            <Form.Control type="text" name="carpetArea" required onChange={(e) => setFormData({...formData,carpetArea:e.target.value})} placeholder="0                                                                        Sq.Ft" />
          </Form.Group>
        </Row>
            </Form>
        </Container>
        <Container style={{backgroundColor:'#092541',display:'flex',height:'51px',width:'900px',marginLeft:'-10px',borderBottomLeftRadius:'16px',borderBottomRightRadius:'16px'}}>
              <p style={{color:'white',fontSize:'12px',margin:'15px 575px 0px 30px'}}>Need help ? call 999999999</p>
              <Button style={{backgroundColor:'#092541',border:'none'}} onClick={handlenext}>NEXT</Button>
        </Container>
        </>
    )
}

export default PropertyDetails;