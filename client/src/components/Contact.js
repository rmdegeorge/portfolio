import React from "react";
import styled from "styled-components";

import ContactForm from "../components/ContactForm";

const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  width: 90%;
  max-width: 650px;
  margin: auto;
`;
const ContactTitle = styled.h1``;

function Contact(props) {
  return (
    <ContactWrapper>
      <ContactTitle>Contact</ContactTitle>
      <ContactForm />
    </ContactWrapper>
  );
}

export default Contact;
