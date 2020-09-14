import styled from "styled-components";

export const Container: React.FC = styled.div`
  display: flex;
  justify-content: center;

  background-color: #333;
`;

export const Header: React.FC = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 32px 24px 64px;

  border-bottom: dashed 3px #fff;

  img {
    width: 300px;
    height: 300px;

    border: solid 1px #8777;
    border-radius: 50%;

    margin: 48px 0 24px;
  }

  h1 {
    font-size: 24px;
    color: #bbb;
    margin: 12px 0;
  }
`;
