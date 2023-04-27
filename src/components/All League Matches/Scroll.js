import React from 'react'
import { Link } from 'react-scroll'
import './LeagueMatches.css'
import { IoMdArrowDropupCircle, IoMdArrowDropdownCircle } from 'react-icons/io';
import { Container, Row, Col } from 'react-bootstrap';
function Scroller() {
  return(
      <Container>
        <Row className="justify-content-sm-center" id='r_f_row'>
          <Col sm={1} className='r_f_cols'>
            <Link to="allMatches" containerId="allMatches" smooth={true} offset={100000} duration={250}><IoMdArrowDropdownCircle className='r_f_icons'/></Link>
          </Col>
          <Col sm={2}></Col>
          <Col sm={1} className='r_f_cols' id='r_f_up'>
            <Link to="allMatches" containerId="allMatches" smooth={true} duration={250}><IoMdArrowDropupCircle className='r_f_icons'/></Link>
          </Col>
        </Row>
      </Container>
  );
 }
export default Scroller;