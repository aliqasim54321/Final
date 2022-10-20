import {Facebook,Instagram, MailOutline,Phone,Pinterest,Room,Twitter,} from "@mui/icons-material";
import styled from "styled-components";
//   import { mobile } from "../responsive";
const Container = styled.div`
  display: flex;
  height: 150px;
`;
const Logo = styled.h1``;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 40px;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  margin: 20px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;
const Center = styled.div`
  flex: 1;
  padding: 20px;
`;
const Title = styled.h3`
  margin-bottom: 30px;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;
const Right = styled.div`
  flex: 1;
  padding: 30px;
  margin-left: 20px;
  text-align: center;
`;
const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  margin-left: 20px;
  text-align: center;
  justify-content: auto;
`;
// const
const Footer = () => {
  return (
    <Container>
      <Left>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>About</ListItem>
          <ListItem>Contact</ListItem>
          <ListItem>Blogs</ListItem>
          <ListItem>Privacy</ListItem>
        </List>
      </Left>
      {/* ----------------------------------------- */}
      <Center>
        <Logo style={{ marginLeft: "100px" }}>VELTRIC</Logo>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Center>
      {/* ---------------------------------------- */}
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} />
          Code For India , Hyderabad
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} />
          +91 9394804040
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} /> contact@veltric
        </ContactItem>
      </Right>
    </Container>
  );
};
export default Footer;
