// About.js
import React from 'react';
import styled from 'styled-components';

const AboutSection = styled.section`
  padding: 5rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-align: center;
`;

const Section = styled.div`
  width: 100%;
  max-width: 1000px;
  margin-bottom: 3rem;
`;

const Subtitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  text-align: center;
`;

const Paragraph = styled.p`
  font-size: 1rem;
  margin-bottom: 1rem;
  text-align: center;
  max-width: 600px;
`;

const FloatingSectionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap; /* Prevent wrapping */
  gap: 1rem;
  width: 100%;
`;

const FloatingSection = styled.div`
  background-color: #333;
  color: #fff;
  padding: 2rem;
  border-radius: 10px;
  width: 100%; /* Full width to maintain layout */
  max-width: 300px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s, box-shadow 0.2s;
  flex: 1; /* Ensure it grows to fill available space */
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const List = styled.ul`
  list-style: none; /* Remove bullet points */
  padding: 0;
  margin: 0;
  text-align: left;
`;

const ListItem = styled.li`
  margin-bottom: 1rem;
`;

const DateText = styled.p`
  margin: 0; /* Remove margin for clean alignment */
  font-size: 0.9rem; /* Slightly smaller font size for dates */
  color: #bbb; /* Lighter color for dates */
`;

const About = () => (
  <AboutSection>
    <Title>About Me</Title>

    <Section>
      <Subtitle>Technical Skills</Subtitle>
      <FloatingSectionContainer>
        <FloatingSection>
          <h3>Programming Languages</h3>
          <List>
            <ListItem>Python</ListItem>
            <ListItem>SQL</ListItem>
            <ListItem>Java</ListItem>
            <ListItem>HTML</ListItem>
            <ListItem>CSS</ListItem>
          </List>
        </FloatingSection>
        <FloatingSection>
          <h3>Libraries and Tools</h3>
          <List>
            <ListItem>Pandas</ListItem>
            <ListItem>Numpy</ListItem>
            <ListItem>Matplotlib</ListItem>
            <ListItem>Seaborn</ListItem>
            <ListItem>Sklearn</ListItem>
            <ListItem>audio-recorder-streamlit</ListItem>
            <ListItem>Git</ListItem>
            <ListItem>GitHub</ListItem>
            <ListItem>Linux</ListItem>
          </List>
        </FloatingSection>
        <FloatingSection>
          <h3>ML Architectures</h3>
          <List>
            <ListItem>CNN</ListItem>
            <ListItem>RNN</ListItem>
            <ListItem>Large Language Models (LLMs)</ListItem>
          </List>
        </FloatingSection>
      </FloatingSectionContainer>
    </Section>

    <Section>
      <Subtitle>Work Experience</Subtitle>
      <FloatingSectionContainer>
        <FloatingSection>
          <List>
            <ListItem>Machine Learning Intern, Feynn Labs</ListItem>
            <DateText>Jul 2024 - Present</DateText>
          </List>
        </FloatingSection>
        <FloatingSection>
          <List>
            <ListItem>Software Engineering Fellow, Headstarter</ListItem>
            <DateText>Jul 2024 - Present</DateText>
          </List>
        </FloatingSection>
      </FloatingSectionContainer>
    </Section>

    <Section>
      <Subtitle>Education</Subtitle>
      <FloatingSectionContainer>
        <FloatingSection style={{ margin: '0 auto' }}>
          <List>
            <ListItem>B.Tech in Artificial Intelligence and Data Science from Guru Gobind Singh Indraprastha University, Delhi</ListItem>
            <DateText>Current GPA: 7.53</DateText>
          </List>
        </FloatingSection>
      </FloatingSectionContainer>
    </Section>

    <Paragraph>“Driven by curiosity, I build intelligent systems to solve real-world problems.”</Paragraph>
  </AboutSection>
);

export default About;
