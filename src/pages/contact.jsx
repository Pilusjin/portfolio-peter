import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";

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
  max-width: 800px; // Adjust as per design requirement
`;

const ContactLink = styled.a`
  display: block;
  font-size: 1rem;
  margin-top: 10px;
  text-decoration: none;
  color: #007bff;
  &:hover {
    text-decoration: underline;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 400px;
  margin-top: 20px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const SubmitButton = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Form Submitted"); // Here, you will typically handle form submission, e.g., API call
  };

  return (
    <div>
      <Header />
      <Main>
        <Image src="src/assets/porfilbilde.jpg" alt="Peter Ilusjin" />
        <Title>Peter Ilusjin</Title>
        <SubTitle>Web Developer</SubTitle>
        <Text>
          Hello! I am Peter, a passionate web developer specialized in frontend
          technologies. If you have a project in mind, want to collaborate or
          just want to say hi, feel free to get in touch!
        </Text>
        <ContactLink href="mailto:ilusjin123@gmail.com">
          ilusjn123@gmail.com
        </ContactLink>
        <ContactLink
          href="https://www.linkedin.com/in/peter-ilusjin-8b96ba230/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn Profile
        </ContactLink>

        {/* Contact Form */}
        <Form onSubmit={handleSubmit}>
          <Input type="text" placeholder="Your Name" required />
          <Input type="email" placeholder="Your Email" required />
          <TextArea rows="4" placeholder="Your Message" required />
          <SubmitButton type="submit">Send Message</SubmitButton>
        </Form>
      </Main>
      <Footer />
    </div>
  );
};

export default Contact;
