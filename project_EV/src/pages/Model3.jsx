import styled from "styled-components";
import uqi1 from "../images/model3/uqi1.png";
import uqi2 from "../images/model3/uqi2.png";
import uqi3 from "../images/model3/uqi3.jpg";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    background-color: #f8f4f4;
  }
`;

const Model3 = () => {
  return (
    <Container>
      <Wrapper>
        <ImgContainer>
          <Image src="https://images.unsplash.com/photo-1648204834832-78e68052c04f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" />
          <Image src ={uqi1} />
          <Image src = {uqi2} />
          <Image src = {uqi3}/>
        </ImgContainer>
        <InfoContainer>
          <Title><b>UQi GT</b></Title>
          <Desc>
            The UQi GT takes the popular UQi platform and fills it full of more
            powerful technology, resulting in a longer range, a more powerful
            motor, and a higher speed. By using the NIU app, riders can track
            their mopeds status, get alerts when unauthorized movement is
            detected, and be notified when an error occurs. The UQi GT is
            lighter than most electric mopeds, making it perfectly suited to
            city riding. Easy to manoeuvre and powered by a BOSCH 1500W motor,
            the UQi GT Pro is fun and easy to use. The UQi GT is popular amongst
            new riders and makes the perfect accessory for campervan and motor
            home users thanks to its small profile and lightweight design
          </Desc>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="darkblue" />
              <FilterColor color="gray" />
            </Filter>
          </FilterContainer>
          <AddContainer>
            <Button>Order now</Button>
            <Button>Free test drive</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
    </Container>
  );
};

export default Model3;
