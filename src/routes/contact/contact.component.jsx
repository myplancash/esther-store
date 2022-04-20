import {ContactContainer, ContactHeader, ImageContainer} from './contact.styles.jsx';

const Contact = () => {
  return (
    <ContactContainer>
      <ContactHeader>
        <h2>Ready for your next step?</h2>
        <h3>Esther Clothing is ready for you.</h3>
        <p>Build next-level fashion of self-awareness. And join a global Fashion designers community dedicated to shaping a better one.</p>
      </ContactHeader>
      <ImageContainer>
        <img src="https://i.ibb.co/4pYgspv/contact.jpg" alt="contact" border="0" />
      </ImageContainer>
    </ContactContainer>
    )
}

export default Contact;