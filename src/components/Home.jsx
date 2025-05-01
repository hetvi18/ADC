import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faCalendar, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { Carousel, Navbar, Nav, Row, Col, Container, Image } from 'react-bootstrap';
import '../styles/home.css'
import {Link} from 'react-router-dom'
import emailjs from 'emailjs-com';
import { useRef, useState } from 'react';
import {useNavigate} from 'react-router-dom'



function Home() {
    const CourseSliderImage = [
        'Products_1.png',
        'Products_2.png',
        'Products_3.png'
    ];

    const form = useRef();
    const navigate = useNavigate();

   
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        contactno: '',
        message: '',
      });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };

    const handleProductClick = () =>{
        navigate("/#products");
    }

    const sendEmail = (e) =>{
        e.preventDefault();
        emailjs.sendForm(
            'service_hikqcb5',       // From EmailJS dashboard
            'template_w1nrtvh',      // From EmailJS dashboard
            form.current,
            'sE2D0-qDjoC30z5ZC'        // From EmailJS account
          ).then(
            (result) => {
              console.log('Email sent!', result.text);
              alert('Inquiry sent successfully!');
              setFormData({
                name: '',
                email: '',
                contactno: '',
                message: '',
              });
            },
            (error) => {
              console.error('Failed to send email:', error.text);
              alert('Failed to send inquiry.');
            }
          );
          
    }

  return (
    <div>
        <div className='top h-auto sticky-top' style={{backgroundColor: 'rgb(221, 219, 222)'}}>
                <div className='text-black' style={{textAlign: "right"}}>
                        <span style={{marginRight: "7px"}}>For Inquiry <FontAwesomeIcon icon={faPhone} style={{color: "#000000", marginRight: "7px"}} /> 
                        <a href="" className='text-black' style={{marginRight: "7px", textDecoration: "none"}}>+91-9825023053</a>
                        <FontAwesomeIcon icon={faEnvelope} style={{color: "#000000", marginRight:"7px"}} /> 
                        <a href="" className='text-black' style={{marginRight: "40px", textDecoration: "none"}}>exports.anjudyechem.com</a>
                        </span>
                </div>
        </div>

        <section  id="home">
        <div className='main-section img-fluid'>
            <div style={{ background: 'rgba(255, 255, 255, 0.1)',backdropFilter: 'blur(2px)', height: "100%"}}>
            {/* <div> */}
            <Navbar expand="lg"  style={{  background: 'rgba(255, 255, 255, 0.1)',backdropFilter: 'blur(10px)'}}>
            <div className="container-fluid">
          <Navbar.Brand href="#">
            <img src="./ADC_Website_Images/Anju-Dye-Chem-Logo.png" className='logo rounded-2' alt="" style={{height:"100px", width: "300px"}} />
          
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarSupportedContent" />
          <Navbar.Collapse id="navbarSupportedContent" >
            <Nav className="me-auto mb-2 mb-lg-0" style={{marginLeft: "250px"}}>
              <Nav.Link href="#home" style={{fontSize: "20px"}} active className='nav-link'> Home</Nav.Link>
              <Nav.Link href="#aboutus" style={{fontSize: "20px"}}>About Us </Nav.Link>
              <Nav.Link href="#products" style={{fontSize: "20px"}}> Products</Nav.Link>
              <Nav.Link href="#contactus" style={{fontSize: "20px"}}>Contact Us </Nav.Link>
              <Nav.Link href="#inquiry" style={{fontSize: "20px"}}>Get in Touch </Nav.Link>

            </Nav>
          </Navbar.Collapse>
            </div>
            </Navbar>
            {/* </div> */}

           <div className='d-flex justify-content-center align-item-center'>
            <div className='text-white text-center' style={{padding: "8%"}} >
                <h1 className='text-black ' style={{fontSize: "60px"}} >Welcome to Anju Dye Chem</h1>
                <p className='text-black' style={{marginLeft: "5%", marginTop: "5%", textAlign: "center", fontSize: "20px"}}>
                    We thrive to manufacture best quality products.. with more than 30 years of experience in the Industry<br />
                    Come become a part of journey to excellence...
                </p>
                <button className='bg-light btn rounded-5' style={{marginLeft: "8%", marginRight: "5px", fontSize: "20px", margin: "10%"}}> <a href="#products" style={{textDecoration: "none", color:"black"}}>Our Products </a></button> 
                <button className='bg-light btn rounded-5' style={{fontSize: "20px"}}><a href="#inquiry" style={{textDecoration: "none", color:"black"}}> Get in Touch </a></button>
            
            </div>
            </div>
            </div>  
        </div>

        <div className='container-fluid p-3' style={{backgroundColor: 'rgb(221, 219, 222)'}}>
            {/* <Container > */}
            <Row>
                <Col lg={6} md={6} sm={12} className='mt-2'>
                <FontAwesomeIcon icon={faCalendar} size= "2xl" style={{height: "50px",  marginLeft: "35%"}}/> <br />
                <span style={{marginLeft: "33%", fontSize: "19px"}}>30+ Years </span><br />
                    <span style={{marginLeft: "25%"}}> Manufacturing Experience</span>
                </Col>
                <Col lg={6} md={6} sm={12} className='mt-2'>
                <FontAwesomeIcon icon={faGlobe} size="2xl" style={{height: "50px",  marginLeft: "35%"}}/> <br />
                <span style={{marginLeft: "33%", fontSize: "19px"}}> 15+ Countries</span><br />
                <span style={{marginLeft: "30%"}}> Currently Exporting</span>
                
                </Col>
            </Row>
            {/* </Container> */}
        </div>
        </section>

       

        <section id="aboutus" className='p-5'>
            <h1 className='text-center' style={{fontSize: "50px"}}>About Us</h1>
        <Row className='p-5'>
                    <Col lg={6} md={12} sm={12} className='aboutimage position-relative'>
                    <img className='img-fluid' src="/ADC_Website_Images/IMG_7041.png" alt="" style={{width: "600px", height: "600px"}} />
                    </Col>
                    <Col lg={6} md={12} sm={12} className='aboutimage position-relative'>
                    <h2 className='fw-bold'>Who we Are!!</h2>
                    <p style={{textAlign: "justify", marginTop: "25px", marginRight: "25px", lineHeight: "2.5"}}>
                        We started <span className='fw-bold'>Anju Dye Chem</span> with a vision of becoming  successfull manufacturing unit for dyes in Chhatral, Gujarat in 1994. 
                        And in 30 years we can proudly say we have served our customers with best quality dyes with no complaints and on time delivery.
                        We are well equipped with in house R&D laboratory for in-house Q&A checking and R&D Department. Now that we are exporting our products to more than 15 countries we can proudly 
                        say that we are able to make a customer friendly and a trustworthy manufacturing unit in the world of Dyes by manufacturing 
                        <span className='fw-bold'> Direct Dyes, Acid Dyes, Basic Dyes, Solvent Dyes. </span>

                    </p>
                    </Col>
                </Row>


        </section>

        <section id="products">
            <div className='container' controls={true} indicators={true} style={{marginLeft: "20px", marginRight: "20px", paddingTop: "15px"}}>
                {/* <img src="/ADC_Website_Images/image2.webp" alt="" style={{width: "100%", height: "200px"}}/> */}
                <h4 className='text-center' style={{color: "blue", fontWeight: "4"}}> Manufacturer and Exporter of various dyes </h4>
                <h2 className='fw-bold  text-center text-black'> Our Products </h2>
                <h5 className='text-center'> Exporting to more than 15 countries </h5>
                <h5 className='text-center text-black'> Paper, Leather, Cotton, Wool, Nylon, Silk Dyes</h5>
                <Carousel >
                    {CourseSliderImage.map((image, index) => (
                        <Carousel.Item className='MainSlider'>
                            <div className="containe-fluid" key={index}>
                                <a href={`ADC_Website_Images/${image}`}>
                                <img style={{height: "800px", width: "100%"}}
                                src={`ADC_Website_Images/${image}`}
                                alt={`Products we deal with`}
                                className="img-fluid"/>
                                </a>
                            </div>
                        </Carousel.Item>
                    ))}
                </Carousel>
              </div>

        </section>

        <section id="contactus" className='p-5'>
            <h1 className='fw-bold text-black text-center p-3'>Contact Us</h1>
            <div className='p-5'>
                <Row>
                    <Col lg={6} md={12} sm={12} className='text-black' >
                    <h3> Anju Dye Chem </h3>
                    <p >108/3, Ravi Industrial Estate, Opp. <br />
                        Rajratna Metal, Chhatral-Mehsana <br />
                        Highway, Chhatral, Gandhinagar-382729.</p> <br />

                    <h4>
                        Call Us: <br />
                        <span style={{fontSize: "17px"}}> 
                            Mr. Mahendra Patel(Partner) <br />
                            +91-9825023053
                        </span>  <br />
                        <span style={{fontSize: "17px"}}> 
                            Ms. Hetvi Patel <br />
                            +91-9510702073
                        </span>  <br />
                    </h4><br />

                    <h4>
                       Email: <br />
                       <span style={{fontSize: "17px"}}>
                        exports@anjucyechem.com
                        </span> 
                    </h4>
                    </Col>
                <Col lg={6} md={12} sm={12}> 
                <div className='maplocation' >
                <iframe className='map' style={{ width: "100%", height: "375px", borderRadius: "20px"}} loading="lazy" allowFullScreen src="https://maps.google.com/maps?q=Anju+Dye+Chem&output=embed"></iframe>
                {/* <a href="https://embedcodesgenerator.com/" rel="noopener" target="_blank" style={{position: "absolute", width: "1px", height: "1px", padding: "0", margin: "-1px", overflow: "hidden", clip: "rect(0,0,0,0)", whiteSpace: "nowrap", border: "0"}}>embedcodesgenerator.com</a> */}
                {/* <iframe width="400" height="300" frameBorder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?q=8C3J%2BM7Q%2C%20Dhanot%2C%20Gujarat%20382729&amp;t=m&amp;z=16&amp;output=embed&amp;iwloc=near" title="8C3J+A, Dhanot, Gujarat 382729" aria-label="Anj+M7Q, Dhanot, Gujarat 382729"></iframe> */}
                </div>
                </Col>
                </Row>
                {/* <div className='d-flex justify-content-center'> */}
                </div>
                </section>


                <section id="inquiry" className='p-2' style={{backgroundColor: 'rgb(221, 219, 222)'}}>
                <div className='d-flex justify-content-center align-item-center vh-20' >
        <div className='bg-white p-3 rounded w-50 vh-5' style={{marginTop: "10px", marginBottom: "10px"}}>
                {/* <div className=' text-black p-3 rounded vh-50'> */}
                <h2 className='text-center' style={{marginTop: "10px"}}>Tell us your Query</h2>
                    <form ref={form} onSubmit={sendEmail}>
            <div className='mb-3 '>
                <label htmlFor="email">
                    <strong>Name</strong>
                </label>
                <input 
                style={{width:"20vw"}}
                type="text"
                placeholder='Enter Your Name'
                autoComplete='off'
                name="name"
                value={formData.name}
                onChange={handleChange}
                className=' form-control rounded-2'
                 />
            </div>
            <div className='mb-3'>
                <label htmlFor="email">
                    <strong>Email</strong>
                </label>
                <input 
                style={{width:"20vw"}}
                type="email"
                placeholder='Enter Your Email Id'
                autoComplete='off'
                name="email"
                value={formData.email}
                onChange={handleChange}
                className=' form-control rounded-2'
              
                 />
            </div>
            <div className='mb-3'>
                <label htmlFor="contact">
                    <strong>Contact</strong>
                </label>
                <input 
                style={{width:"20vw"}}
                type="text" 
                placeholder='Enter Your Contact No'
                name='contactno'
                value={formData.contactno}
                onChange={handleChange}
                className=' form-control rounded-2'
               />
            </div>

            <div className='mb-3'>
                <label htmlFor="inquiry">
                    <strong>Subject</strong>
                </label>
                <input 
                style={{width:"30vw", height: "200px"}}
                type="text" 
                placeholder='Enter Your Inquiry'
                name='message'
                value={formData.message}
                onChange={handleChange}
                className=' form-control rounded-2'
               />
            </div>
          
             <button type='submit' className='btn btn-success w-10 rounded-0'>
                Submit
             </button>
             </form>
             {/* </div> */}
             </div>
            </div>
        </section>

    
    </div>
  )
}

export default Home