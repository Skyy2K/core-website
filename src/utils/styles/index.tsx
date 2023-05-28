import styled from "styled-components";

export const HomePageStyle = styled.div`
  height: 100%;
  padding: 100px 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const MainButton = styled.div`
  display: flex;
  width: 250px;
  align-items: center;
  justify-content: space-evenly;
  background-color: #2121217d;
  padding: 4px 0px;
  box-sizing: border-box;
  border-radius: 5px;
  border: 1px solid #58585863;
  margin: 10px 0;
  box-shadow: 0px 1px 5px 0px #00000018;

  &:hover {
    cursor: pointer;
  }
`;

export const Page = styled.div`
  padding: 50px;
`;