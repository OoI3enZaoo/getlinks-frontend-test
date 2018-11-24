import React from 'react'
import styled from 'styled-components'
import { Jumbotron, Container } from 'reactstrap'

const Main = () => (
  <Jumbotron>
    <Container>
      <FlexColumn>
        <h1 className="display-5">Hello, world!</h1>
        <p className="lead">
          This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured 
          content or information.
          It uses utility classes for typography and spacing to space content out within the larger container.
        </p>
      </FlexColumn>
    </Container>
  </Jumbotron>
)
export default Main

const FlexColumn = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`