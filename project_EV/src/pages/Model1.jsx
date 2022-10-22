import styled from "styled-components";
import mqi from "../images/model1/mqi.png";
import mqi2 from "../images/model3/nqi2.png";
import mqi3 from "../images/model1/mqi3.jpg";
import vid1 from '../images/model1/vid1.mp4'



const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  margin-left: 20px;
  height : 40%;
  margin-right:20px;
  display: flex;
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 59vh;
  object-fit: cover;
  flex: 1;
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


const Model1 = () => {
  return (

    <>

    <Container>
      <Wrapper>
        {/* <ImgContainer>
          <Image src="https://images.unsplash.com/photo-1648204834832-78e68052c04f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" />
          <br></br>
        </ImgContainer> */}

        <div className="images-class">
          <Image src={mqi3} />
          <br></br>
        </div>

        <InfoContainer>
          <Title>THE COMMUTING ALL-ST</Title>
          <Desc>
            The new MQi GT EVO is the best in its class - period. Featuring a
            large, solid frame, but with a relatively light weight of only
            128kg, the 5000W motor powers the EVO to speeds of up to 100km/h,
            effortlessly competing with any 125cc moped on the market, petrol or
            electric. A customizable LED dashboard, 3 easy-to-switch riding
            modes, and brilliant lighting ensure that you can conquer any
            commute with ease.
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
        <br></br>
      </Wrapper>
      <div className="images-class">
          <Image src={mqi2} />
          <br></br>
        </div>

<br></br>
        <div className="video" >
                  <video controls autoPlay><source src={vid1}/></video>
                  </div>



    </Container>

    </>
  );
};

export default Model1;
