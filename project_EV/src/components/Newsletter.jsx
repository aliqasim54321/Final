import { Send } from '@mui/icons-material'
import styled from 'styled-components'

const Container =styled.div`
height : 60vh;
background-color : white;
display : flex;
align-item: left;
justify-content : center;
flex-direction : column;
`;

const Title =styled.h1`
font-size : 70px;
margin-bottom : 20px;


`;
const Desc =styled.div`
    font-size: 30px;
    font-weight : 600;
    margin-bottom:20px;

`;
const InputContainer =styled.div`
    width : 50%;
    height:40px;
    background-color: white;
    display:flex;
    justify-content:space-between;
    border : 1px solid lightgray;
`;

const Input =styled.input`
    border: none;
    flex: 8;
    padding-left : 20px; 
`;
const Button =styled.button`
    flex : 1;
    border : none;
    background-color : teal;
    color: white;
`;

function Newsletter() {
  return (
    <Container>
        <Title>
            Newsletter
        </Title>
        <Desc>mere ku kyun ye css nahi aara
                    </Desc>
        <InputContainer>
            <Input placeholder="Your email"/>
            <Button>
                 <Send/>
            </Button>
        </InputContainer>
    </Container>
  )
}

export default Newsletter
