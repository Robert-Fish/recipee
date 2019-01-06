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
top: 30%;
font-size: 3rem;
transform: translate(-50%, -50%);
`;

export default function Header() {
  return (
    <Container>
      <Title>Recipee</Title>
      <Icon className="fas fa-utensils fa-2x" />
      <SubTitle>What&apos;s on the menu today?</SubTitle>
      <SearchBar />
      <HeaderImg src="https://images.pexels.com/photos/1565982/pexels-photo-1565982.jpeg?cs=srgb&dl=bread-color-cooking-1565982.jpg&fm=jpg" />
    </Container>
  );
}
