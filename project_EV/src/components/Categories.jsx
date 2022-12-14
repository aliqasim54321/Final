import styled from "styled-components";
import { categories } from "../data";
import { mobile } from "../responsive";
import CategoryItem from "./CategoryItem";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({ padding: "0px", flexDirection:"column" })}

`;

console.log(categories)

const Categories = () => {
  return (
    <Container>
      {categories.map((item,i) => (
        <CategoryItem item={item} key={item.id} index={i} />
      ))}
    </Container>
  );
};

export default Categories;
