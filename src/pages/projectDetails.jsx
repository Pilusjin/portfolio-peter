import React from "react";
import { useParams } from "react-router-dom";
import { projects } from "../data/prosjects"; // Ensure this path is correct
import styled from "styled-components";

const Section = styled.section`
  display: flex;
  max-width: 1000px;
  margin: auto;
  padding: 20px;
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
`;

const Title = styled.h1`
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 20px;
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 4px;
  margin-bottom: 12px;
`;

const Description = styled.p`
  font-size: 18px;
  margin-bottom: 12px;
`;

const Technologies = styled.p`
  margin-bottom: 16px;
`;

const Button = styled.a`
  display: inline-block;
  background-color: #f7d9c6;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 18px;
  text-transform: uppercase;
  border-radius: 8px;
  margin: 10px 0;
  &:hover {
    background-color: #e6c3b1; // Adjust hover color
  }
`;

function ProjectDetail() {
  const { projectId } = useParams();
  const project = projects.find((p) => p.id === parseInt(projectId, 10));

  if (!project) {
    return <Section>Project not found.</Section>;
  }

  return (
    <Section>
      <Content>
        <Title>{project.title}</Title>
        <Image src={project.image} alt={project.title} />
        <Description>{project.description}</Description>
        {project.technologies && (
          <Technologies>
            Technologies Used: {project.technologies.join(", ")}
          </Technologies>
        )}
        <Button
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </Button>
        <Button
          href={project.liveDemoLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          Live Demo
        </Button>
      </Content>
    </Section>
  );
}

export default ProjectDetail;
