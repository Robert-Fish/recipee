import React from 'react';
import Styled from 'styled-components';
import SearchBar from './SearchBar';

const HeaderImg = Styled.img`
  max-width: 100%;
  height: auto;
`;

const Icon = Styled.i`
position: absolute;
top: 2.3rem;
left: 10rem;
`;

const Container = Styled.div`
position: relative;
  text-align: center;
  color: white;
`;

const Title = Styled.h1`
position: absolute;
top: 8px;
user-select: none;
left: 16px;
font-family: 'Nunito Sans', sans-serif;
`;

const SubTitle = Styled.h3`
position: absolute;
left: 50%;
text-shadow: 2px 2px 12px black;
top: 28%;
font-size: 3rem;
transform: translate(-50%, -50%);
`;

const Categories = Styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  background: #95BF3E;
`;

const Category = Styled.div`
color: #fff;
margin: 0 1rem;
padding: .4rem;
cursor: pointer;
transition: all ease-in-out .3s;

&:hover{
  background: #fff;
  color: #95BF3E;
}
`;

export default function Header() {
  return (
    <Container>
      <Title>Recipee</Title>
      <Categories>
        <Category>Beef</Category>
        <Category>Chicken</Category>
        <Category>Desert</Category>
        <Category>Lamb</Category>
        <Category>Misc.</Category>
        <Category>Pasta</Category>
        <Category>Pork</Category>
      </Categories>
      <Icon className="fas fa-utensils fa-2x" />
      <SubTitle>What&apos;s on the menu today?</SubTitle>
      <SearchBar />
      <HeaderImg src="https://images.pexels.com/photos/1565982/pexels-photo-1565982.jpeg?cs=srgb&dl=bread-color-cooking-1565982.jpg&fm=jpg" />
    </Container>
  );
}
