import styled from "styled-components";

export const Container: React.FC = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  /* background-color: #333; */
`;

export const Header: React.FC = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 32px 24px 64px;

  /* border: dashed 3px #fff;
  border-radius: 8px; */

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

  p {
    font-size: 17px;
  }
`;

export const Card: React.FC = styled.div`
  width: 80%;
  max-width: 1200px;
  padding: 48px;
  margin-bottom: 18px;

  border: dashed 3px #888;
  border-radius: 8px;
  background-color: #282c34;
`;

export const Footer: React.FC = styled.div`
  margin: 20px;

  text-align: center;
`;

export const IconsContainer: React.FC = styled.div`
  padding: 20px;
  display: flex;

  a {
    text-decoration: none;
    color: transparent;
  }

  svg {
    background: none;
    margin: 0 10px;
    color: #777;
  }
`;
