import styled from "styled-components";
import { mobile } from "../responsive";
import {Link} from "react-router-dom"

const Container = styled.div`
  flex: 1;
  border: 1px solid;
  padding: 10px;
  box-shadow: 5px 10px;
  margin: 3px;
  height: 70vh;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ height: "20vh" })}

`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
    position: absolute;
    bottom: 0;
    color:black;
    margin-bottom: 20px;
`;

const Button = styled.button`
    border:none;
    padding: 10px;
    background-color: white;
    color:black;
    cursor: pointer;
    font-weight: 600;
`;

const CategoryItem = ({ item ,key,index}) => {
  console.log(index)
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button><Link to={`/model${index+1}` } >BOOK NOW</Link></Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;
