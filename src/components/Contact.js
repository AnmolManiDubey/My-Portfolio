import React from 'react';
import styled from 'styled-components';
import { FaEnvelope, FaLinkedin, FaGithub, FaFileAlt } from 'react-icons/fa';

const ContactSection = styled.section`
  padding: 5rem 2rem;
  background-color: #000000;
  color: #ffffff;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

const ContactList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ContactItem = styled.li`
  margin-bottom: 1rem;
  font-size: 1.5rem;

  a {
    color: #ffffff;
    text-decoration: none;
    transition: color 0.3s;

    &:hover {
      color: #1e90ff; /* Change this to your desired hover color */
    }

    svg {
      margin-right: 0.5rem;
    }
  }
`;

// Add a media query for responsiveness
const ResponsiveContactSection = styled(ContactSection)`
  @media (max-width: 768px) {
    padding: 3rem 1rem;

    ${Title} {
      font-size: 2rem;
    }

    ${ContactItem} {
      font-size: 1.2rem;
    }
  }
`;

const Contact = () => (
  <ResponsiveContactSection>
    <Title>Contact</Title>
    <ContactList>
      <ContactItem>
        <a href="mailto:anmolkumardubey1@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email Anmol Mani Dubey">
          <FaEnvelope /> anmolkumardubey1@gmail.com
        </a>
      </ContactItem>
      <ContactItem>
        <a href="https://www.linkedin.com/in/anmol-mani-dubey-29b984153/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
          <FaLinkedin /> linkedin.com/in/Anmol-Mani-Dubey
        </a>
      </ContactItem>
      <ContactItem>
        <a href="https://github.com/AnmolManiDubey" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
          <FaGithub /> github.com/Anmol0308
        </a>
      </ContactItem>
      <ContactItem>
        <a href="https://drive.google.com/file/d/1jiwVxczxCveLRSONqMmdI1L1T7vPQFM7/view?usp=sharing" target="_blank" rel="noopener noreferrer" aria-label="Resume">
          <FaFileAlt /> Resume
        </a>
      </ContactItem>
    </ContactList>
  </ResponsiveContactSection>
);

export default Contact;
