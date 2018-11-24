import React from 'react'
// import Container from '<components>/container' 
import { Button, Container } from 'reactstrap'
import styled from 'styled-components'

const ShowcasePage = () => (
  <Container style={{padding: '20px 0'}}>
    <FlexColumn>
      <ProfileCircle/>
      <ButtonContainer>
        <ButtonWrapper color="primary">Profile</ButtonWrapper>
        <ButtonWrapper color="primary">Blog</ButtonWrapper>
        <ButtonWrapper color="primary">Setting</ButtonWrapper>
        <ButtonWrapper color="primary">Logout</ButtonWrapper>
      </ButtonContainer>      
    </FlexColumn>
  </Container>
)
export default ShowcasePage


const FlexColumn = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const ProfileCircle = styled.div`
  border: 1px solid;
  border-radius: 50%;
  width: 70px;
  height: 70px;
`
const ButtonWrapper = styled(Button)`
  margin: 7px;
  cursor: pointer;
`

const ButtonContainer = styled.div`
  margin-top: 15px;
  display: flex;
`