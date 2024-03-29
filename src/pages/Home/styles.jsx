import styled from "styled-components/";
import { darken } from "polished";

export const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  list-style: none;

  li {
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 4px;
    padding: 20px;

    img {
      align-self: center;
      max-width: 250px;
    }
    > strong {
      font-size: 16px;
      line-height: 20px;
      color: #333;
      margin-top: 5px;
    }
    > span {
      font-size: 21px;
      font-weight: bold;
      margin: 5px 0 20px;
    }

    button {
      background: var(--green);
      color: #fff;
      border: 0;
      border-radius: 4px;
      overflow: hidden;
      margin-top: auto;
      display: flex;
      align-items: center;
      transition: background 0.2s;
      &:hover {
        background: ${darken(0.1, "#81D8F7")};
      }

      div {
        display: flex;
        align-items: center;
        padding: 12px;
        background: rgb(0, 0, 0, 0.1);
        svg {
          margin-right: 5px;
        }
      }
      span {
        flex: 1;
        text-align: center;
        font-weight: bold;
      }
    }
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr 1fr;
    li {
      display: flex;
      flex-direction: column;
      background: #fff;
      border-radius: 4px;
      padding: 8px;

      img {
        align-self: center;
        max-width: 100px;
      }
      strong {
        font-size: 12px;
      }
      span {
        margin-top: auto;
        font-size: 18px;
      }
      button {
        span {
          font-size: 12px;
          padding-bottom: 5px;
        }
      }
    }
  }
`;
