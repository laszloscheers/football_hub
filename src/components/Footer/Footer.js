import React from 'react'
import { Container, Navbar, Card, Col, Row } from 'react-bootstrap';
import { IoMdFootball } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll'
import { IoMdArrowDropupCircle } from 'react-icons/io';
import './footer.css'
function Footer() {
  return (
    <Card body id='footer_card'>

      {/*Logo and Title*/}
      <Navbar>
        <Container id='footer_header'>
          <Link to="/" className='footer_logo_title'>
            <div id='footer_logo_title_container'>
               <IoMdFootball className="navbar_icon" />
               Football Hub
            </div>
          </Link>
        </Container>
      </Navbar>

      {/*Description of app*/}
        <Container>
          <Row>
            <Container id='footer_app_description'>
              <Col> 
                <p>Get all you the latest football scores and stats here!</p>
              </Col>
            </Container>

           {/*Links*/}
           <Col sm={3} className='footer_links'> 
            <div className='footer_link_container'>
              <Link to="/" className='footer_link_name'> Home </Link>
            </div> 
            </Col>  
            <Col sm={3}>
            <div className='footer_link_container'>
              <Link to="/leagues" className="footer_link_name"> Leagues </Link>
            </div>
           </Col>
           <Col sm={3} className='footer_links'> 
            <div className='footer_link_container'>
              <Link to="/current_game_week_matches" className="footer_link_name"> Current Game Week </Link>
            </div>
            </Col>
            <Col sm={3}>
            <div className='footer_link_container'>
              <Link to="/odds" className="footer_link_name"> Odds </Link>
            </div>
           </Col>
          </Row>
          </Container> 
      {/*Copyright*/}            
      <Container>
       <Row>
         <Col>
         <p id='copyright'>Copyright © 2022 Football Hub</p>
         </Col>
       </Row>
      </Container>
      <Container id='back_to_top_cont' onClick={() => scroll.scrollToTop()}><IoMdArrowDropupCircle className='back_to_top'/></Container>
    </Card>
  );
}

export default Footer