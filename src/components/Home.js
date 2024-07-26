// Home.js
import React from 'react';
import styled from 'styled-components';

const HomeSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #000000;
  color: #ffffff;
  text-align: center;
`;

const HiTextContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 5rem;
`;

const HiText = styled.span`
  font-size: 5rem;
`;

const NameText = styled.span`
  font-size: 3rem;
  margin-left: 1rem; // Adjust the spacing as needed
`;

const Description = styled.p`
  font-size: 1.5rem;
  margin-top: 1rem;
`;

const Home = () => (
  <HomeSection>
    <HiTextContainer>
      <HiText>Hi,</HiText>
      <NameText>I'm Anmol Mani Dubey</NameText>
    </HiTextContainer>
    <Description>
      I am a machine learning engineer and data science enthusiast.</Description>
      <Description> I specialize in building intelligent systems and data-driven solutions to solve complex problems.
    </Description>
  </HomeSection>
);

export default Home;
