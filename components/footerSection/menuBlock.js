import React from 'react'
import styled from 'styled-components'

const MenuBlock = ({ title, menuList }) => (
  <MenuBlockContainer>
    <Title>{title}</Title>
    <Ul>
      {
        menuList.map((data, index) => (
          <Li key={index}><a href={data.redirectTo}>{data.menuName}</a></Li>
        ))
      }        
    </Ul>
  </MenuBlockContainer>
)
export default MenuBlock

const MenuBlockContainer = styled.div`
  margin: 20px 0;
`

const Title = styled.div`
  color: #FFFFFF;
  font-weight: normal;
  font-family: sans-serif;
`
const Ul = styled.ul`
  margin: 0;
  padding: 0;
`
const Li = styled.li`
  list-style: none;
  color: #FFFFFF;
  font-size: 0.875rem;
  line-height: 2.2em;
  a {
    color: #FFFFFF;
  }
`