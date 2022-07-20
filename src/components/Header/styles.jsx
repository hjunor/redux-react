import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 50px;
  img {
    transition: opacity 0.2s;
    &:hover {
      opacity: 0.7;
    }
  }
  @media (max-width: 600px) {
    margin: 0;
    padding: 20px 0;
    img {
      width: 12rem;
    }
    a:nth-child(2) {
      margin-left: auto;
    }
  }
`;
export const Cart = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: opacity 0.2s;
  &:hover {
    opacity: 0.7;
  }
  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #fff;
    }
    span {
      font-size: 12px;
      color: #999;
    }
  }
  @media (max-width: 600px) {
  }
`;
