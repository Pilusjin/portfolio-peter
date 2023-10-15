import React from "react";
import styled from "styled-components";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Image = styled.img`
  max-width: 300px;
  border-radius: 50%;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  margin-top: 10px;
`;

const SubTitle = styled.h3`
  font-size: 1.2rem;
  margin-top: 5px;
`;

const Text = styled.p`
  text-align: center;
  margin: 10px 0;
  max-width: 800px;
`;

const ButtonLink = styled.a`
  display: inline-block;
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  margin-top: 10px;
  border-radius: 5px;
  text-decoration: none;
  font-size: 1rem;
  &:hover {
    background-color: #0056b3;
  }
`;

const Contact = () => {
  return (
    <div>
      <Main>
        <Image src="/profilbilde.jpeg" alt="Peter Ilusjin" />
        <Title>Peter Ilusjin</Title>
        <SubTitle>Web Developer</SubTitle>
        <Text>
          Hello! I am Peter, a passionate web developer specialized in frontend
          technologies. If you have a project in mind, want to collaborate or
          just want to say hi, feel free to get in touch!
        </Text>
        <ButtonLink href="mailto:ilusjin123@gmail.com">
          Send me an email
        </ButtonLink>
        <ButtonLink
          href="https://www.linkedin.com/in/peter-ilusjin-8b96ba230/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact me on LinkedIn
        </ButtonLink>
        <ButtonLink
          href="https://github.com/Pilusjin"
          target="_blank"
          rel="noopener noreferrer"
        >
          View my GitHub
        </ButtonLink>
      </Main>
    </div>
  );
};

export default Contact;
