import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import MemberCard from './memberCard'

const memberList = ({ members }) => (
  <Container style={{paddgin: '50px 0px'}}>
    <Row>
      {
        members.map((member, index) => (
          <Col lg="3" sm="4" xs="6" key={index}>
            <MemberCard {...member}/>          
          </Col>
        ))
      }
    </Row>
  </Container>
)
export default memberList