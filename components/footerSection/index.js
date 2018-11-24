import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import styled from 'styled-components'
import MenuBlock from './menuBlock'
const FooterSection = () => (
  <Body>
    <Container style={{paddingTop: '50px', paddingBottom: '50px'}}>
      <Row>
        <Col lg="3" xs="6">
          <MenuBlock 
            title="FEATURE" 
            menuList={[
              { menuName: 'Checkout', redirectTo: '#' },
              { menuName: 'Payment Methods', redirectTo: '#' },
              { menuName: 'Automated Workflow', redirectTo: '#' },
              { menuName: 'Social Commerce', redirectTo: '#' },
              { menuName: 'Developer', redirectTo: '#' },
              { menuName: 'Pay Links', redirectTo: '#' },
            ]}
          />
        </Col>
        <Col lg="3" xs="6">
          <MenuBlock 
            title="DEVELOPER" 
            menuList={[
              { menuName: 'Get started', redirectTo: '#' },
              { menuName: 'API Reference', redirectTo: '#' },
              { menuName: 'Plugin', redirectTo: '#' },
              { menuName: 'SDK on Github', redirectTo: '#' },
              { menuName: 'Forum', redirectTo: '#' },
            ]}
          />
        </Col>
        <Col lg="3" xs="6">
          <MenuBlock 
            title="OMISE" 
            menuList={[
              { menuName: 'About us', redirectTo: '#' },
              { menuName: 'Team', redirectTo: '#' },
              { menuName: 'Careers', redirectTo: '#' },
              { menuName: 'Blog', redirectTo: '#' },
              { menuName: 'Contact sales', redirectTo: '#' },
            ]}
          />
        </Col>
        <Col lg="3" xs="6">
          <MenuBlock 
            menuList={[
              { menuName: 'Terms & Conditions', redirectTo: '#' },
              { menuName: 'Privacy Policy', redirectTo: '#' },
              { menuName: 'Prohibited Businesses', redirectTo: '#' },
              { menuName: 'System status', redirectTo: '#' },
            ]}
          />
          <Social>
            <a href="#">
              <Img src="/static/facebook-white.svg" alt="facebook-icon"/>
            </a>
            <a href="#" style={{marginLeft: '10px'}}>
              <Img src="/static/pinterest-white.svg" alt="pinterest-icon"/>
            </a>
          </Social>
        </Col>
      </Row>
    </Container>
  </Body>
)
export default FooterSection

const Social = styled.div`
  display: flex;
  margin-top: 10px;
  width: 100%;  
`

const Img = styled.img`
  width: 30px;
`

const Body = styled.div`
  background-color: #04070D;
`
