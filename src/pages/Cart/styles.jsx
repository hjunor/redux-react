import styled from "styled-components";
import { darken } from "polished";
export const Container = styled.div`
  padding: 30px;
  background: #fff;
  border-radius: 4px;

  footer {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    button {
      background: var(--blue);
      color: #fff;
      border: 0;
      border-radius: 4px;
      padding: 12px 20px;
      font-weight: bold;
      text-transform: uppercase;
      transition: backgroud 0.2s;
      &:hover {
        background: ${darken(0.3, "#81D8F7")};
      }
    }
  }
  @media (max-width: 600px) {
    footer {
      button {
        width: 8rem;
        font-size: 0.6rem;
      }
    }
  }
`;
export const ProductTable = styled.table`
  width: 100%;
  thead tr {
    color: #999;
    text-align: left;
    padding: 12px;
    border: 1px solid red;
  }
  tbody td {
    padding: 12px;
    border-bottom: 1px solid #eee;
  }
  img {
    height: 100px;
  }
  strong {
    color: #333;
    display: block;
  }
  span {
    display: block;
    margin-top: 5px;
    font-size: 18px;
    font-weight: bold;
  }
  div {
    display: flex;
    align-items: center;

    input {
      border: 1px solid #ddd;
      border-radius: 4px;
      color: #666;
      padding: 6px;
      width: 50px;
    }
  }

  button {
    background: none;
    border: 0;
    padding: 6px;
  }

  @media (max-width: 600px) {
    gap: 3rem;
    thead tr th {
      display: none;
    }
    img {
      height: 40%;
    }
    tbody {
      td {
        display: flex;
        flex-direction: column;
        text-align: center;

        div {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          button {
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }
        button {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          svg {
            height: 30px;
            width: 30px;
          }
        }
      }
    }
  }
`;
export const Total = styled.div`
  display: flex;
  align-items: baseline;
  span {
    color: #999;
    font-weight: bold;
  }
  strong {
    font-size: 28px;
    margin-left: 5px;
  }
  @media (max-width: 600px) {
    strong {
      font-size: 22px;
    }
  }
`;
