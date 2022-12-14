import { ShoppingCartOutlined} from "@mui/icons-material";
import { Badge } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";
import Logo from "../images/Logo.png";

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  // flex: 1;
  // display: flex;
  // align-items: center;
`;

// const Language = styled.span`
//   font-size: 40px;
//   font-weight:50px;
//   cursor: pointer;
//   ${mobile({ display: "none" })}
// `;

// const SearchContainer = styled.div`
//   border: 0.5px solid lightgray;
//   display: flex;
//   align-items: center;
//   margin-left: 25px;
//   padding: 5px;
// `;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Image = styled.h1`
border: 2px solid red;
width: 400px;
height: 70px;
`;

const Title = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 23px;
  font-weight:bold;
  border: solid;
  border-radius:20%;
  padding : 1.5%;
  border:ronded;
   color:teal;
  background-color:white;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
        
        </Left>
        <Center>
          <Title>VELTRIC</Title>
        </Center>
        <Right>
          <MenuItem><Link to='/register'>SIGNUP</Link></MenuItem>
          <MenuItem><Link to='/Login'>LOGIN</Link></MenuItem>
          
         
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
