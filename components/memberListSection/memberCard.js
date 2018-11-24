import React from 'react'
import styled from 'styled-components'

const MemberCard = ({ avatar, fname, lname, profile }) => (
  <FlexColumn>
    <AvatarWrapper>
      <Avatar src="https://static.spin.com/files/2018/05/taylor-swift-sweats-take-a-shower-interview-video-1527633941-640x427.jpg"/>
    </AvatarWrapper>
    <Name>{fname} {lname}</Name>
    <Profile>{profile}</Profile>
  </FlexColumn>
)

export default MemberCard


const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  line-height: 1.5em;
`
const AvatarWrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 15em;
`
const Avatar = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  background-image: url(${props => props.src});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 10px;
  width: 100%;
  height: 100%;
  transition: 0.5s;
  cursor: pointer;
  :hover {
    transform: scale(1.2);
  }
  
`
const Name = styled.div`
  font-size: 20px;  
  margin-top: 10px;
`
const Profile = styled.div`
  font-weight: 300;
`
