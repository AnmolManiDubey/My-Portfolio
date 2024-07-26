// Projects.js
import React from 'react';
import styled from 'styled-components';

const ProjectsSection = styled.section`
  padding: 5rem 2rem;
  background-color: #000000;
  color: #ffffff;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-align: center;
`;

const ProjectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
`;

const ProjectCard = styled.a`
  background-color: #333333;
  color: #ffffff;
  padding: 2rem;
  border-radius: 10px;
  text-decoration: none;
  width: 300px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s, box-shadow 0.2s;
  overflow: hidden; /* Ensure image does not overflow */

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const ProjectTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
`;
// add the images to the projects when necessary
// const ProjectImage = styled.img`
//   width: 100%;
//   height: 180px;
//   object-fit: cover;
//   border-radius: 10px;
//   margin-bottom: 1rem;
// `;

const ProjectTags = styled.div`
  margin-top: 1rem;
  font-size: 0.9rem;
  color: #ccc;
`;

const Tag = styled.span`
  background-color: #555;
  color: #fff;
  padding: 0.2rem 0.5rem;
  border-radius: 5px;
  margin-right: 0.5rem;
`;

const Projects = () => (
  <ProjectsSection>
    <Title>Projects</Title>
    <ProjectsContainer>
      <ProjectCard href="https://github.com/AnmolManiDubey/Medical-Insurance-Cost-Predictor" target="_blank" rel="noopener noreferrer">
        {/* <ProjectImage src="https://via.placeholder.com/300x180.png?text=Medical+Insurance" alt="Medical Insurance Cost Predictor" /> */}
        <ProjectTitle>Medical Insurance Cost Predictor</ProjectTitle>
        <ProjectDescription>
          Developed a Medical Insurance Cost Predictor leveraging machine learning algorithms including Random Forest, XGBoost, and CatBoost. Achieved impressive predictive performance with R2 values of 84.4, 86.7, and 87.6, respectively.
        </ProjectDescription>
        <ProjectTags>
          <Tag>Machine Learning</Tag>
          <Tag>Predictive Modeling</Tag>
        </ProjectTags>
      </ProjectCard>
      <ProjectCard href="https://github.com/AnmolManiDubey/Heart_stroke_predictor" target="_blank" rel="noopener noreferrer">
        {/* <ProjectImage src="https://via.placeholder.com/300x180.png?text=Heart+Stroke" alt="Heart Stroke Predictor" /> */}
        <ProjectTitle>Heart Stroke Predictor</ProjectTitle>
        <ProjectDescription>
          Developed a predictive model using machine learning techniques to identify individuals at risk of heart attack. Performed Exploratory Data Analysis (EDA) to gain insights into the dataset and visualize relevant patterns. Employed machine learning algorithms such as Random Forest and K-Nearest Neighbors (KNN) for prediction.
        </ProjectDescription>
        <ProjectTags>
          <Tag>Machine Learning</Tag>
          <Tag>EDA</Tag>
        </ProjectTags>
      </ProjectCard>
      <ProjectCard href="https://github.com/AnmolManiDubey/Transer" target="_blank" rel="noopener noreferrer">
        {/* <ProjectImage src="https://via.placeholder.com/300x180.png?text=Transer" alt="Transer" /> */}
        <ProjectTitle>Transer</ProjectTitle>
        <ProjectDescription>
          Transer extracts audio from video files, transcribes and translates the text into your desired language, and converts it back into an audio file. Seamlessly transform multimedia content with multilingual support.
        </ProjectDescription>
        <ProjectTags>
          <Tag>Audio Processing</Tag>
          <Tag>Translation</Tag>
        </ProjectTags>
      </ProjectCard>
    </ProjectsContainer>
  </ProjectsSection>
);

export default Projects;
