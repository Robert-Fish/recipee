import React from 'react';
import Styled from 'styled-components';

const SearchBarInput = Styled.input`
width: 30%;
position: absolute;
top: 40%;
left: 50%;
transform: translate(-50%, -50%);

// Remove default styling
outline: none;
border: .3rem solid #fff;
height: 2rem;


text-indent: 1rem;
font-size: 1.3rem;
padding: .3rem;

&:hover{

  transition: all ease-in-out .2s;
  
}

&:focus{
  font-weight: bold;
}
`;

export default function SearchBar() {
  return <SearchBarInput placeholder="Search a Recipe" autoFocus />;
}
