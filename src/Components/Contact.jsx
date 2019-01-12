import React from 'react';
import styled from 'styled-components';

const ContactForm = styled.form`
  display: block;
  margin: 0 auto;
  width: 7rem;
  font-size: 1.7rem;
`;

const Input = styled.input`
  padding: 0.4rem;
  font-size: 1.7rem;
  border: 1px solid #95bf3e;
`;

const Submit = styled.button`
  background: #95bf3e;
  padding: 1rem 9rem;
  color: #fff;
  font-size: 1.3rem;
  display: block;
  width: 7rem;
  margin: 0 auto;
`;
export default function Contact() {
  return (
    <ContactForm name="contact" netlify data-netlify="true">
      <p>
        <label>
          Name
          <br />
          <Input type="text" name="name" />
        </label>
      </p>
      <p>
        <label>
          Email
          <Input type="email" name="email" />
        </label>
      </p>
      <p>
        <Submit type="submit">Send</Submit>
      </p>
    </ContactForm>
  );
}
