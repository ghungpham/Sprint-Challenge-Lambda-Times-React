import React from 'react';
import styled from 'styled-components';
// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file
const HeaderWrap = styled.div `
display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  background-color: #fff;
  border-bottom: 1px solid lightgrey;
  width: 100%;
  height: 120px;
  margin-top: 44px;
  padding-bottom: 15px;
}
@media (min-width: 1280px) {
  .header {
    width: 1280px;
  }
`

const Headerh1 =styled.h1 `
font-size: 60px;
font-family: Didot, serif;
font-weight: bold;
flex: 8;
text-align: center;
color: #000;`

const Headerspan = styled.span `
align-self: flex-end;
font-size: 11px;
font-weight: bold;
letter-spacing: 1px;
`
const Headerspandate = styled.div `
margin-left: 25px;
  flex: 1;
`
const Headertemp = styled.div `
text-align: right;
margin-right: 25px;
flex: 1;
`

const Header = () => {
  return (
    <HeaderWrap>
      <Headerspan><Headerspandate>SMARCH 32, 2018</Headerspandate></Headerspan>
      <Headerh1>Lambda Times</Headerh1>
      <Headerspan><Headertemp>98°</Headertemp></Headerspan>
      
    </HeaderWrap>
  )
}

export default Header