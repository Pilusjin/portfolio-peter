import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const CardWrapper = styled(Link)`
  // Modify styled component to style Link
  display: block; // Makes sure Link takes up entire space of CardWrapper
  text-decoration: none; // Removes underline from Link component
  color: inherit; // Inherit text color to keep it consistent
  background-color: #2e0a0a;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 20px;
  margin: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 300px;
  text-align: left;

  // Optional: Add a hover effect
  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease-in-out;
  }
`;

const Title = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 1rem;
`;

const Image = styled.img`
  max-width: 100%;
`;

const LinksWrapper = styled.div`
  margin-top: 10px;
`;

const ExternalLink = styled.a`
  // Renamed to avoid name conflict with react-router's Link
  color: #007bff;
  text-decoration: none;
  margin-right: 10px;
`;

function Card({ id, title, description, image, githubLink, liveSiteLink }) {
  return (
    // Updated CardWrapper component call to use "to" prop
    <CardWrapper to={`/projects/${id}`}>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Image src={image} alt={title} />
      <LinksWrapper>
        <ExternalLink
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub Repo
        </ExternalLink>
        {liveSiteLink && (
          <ExternalLink
            href={liveSiteLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Site
          </ExternalLink>
        )}
      </LinksWrapper>
    </CardWrapper>
  );
}

export default Card;
