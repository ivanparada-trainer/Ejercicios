import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Arial', sans-serif;
    background-color: #f0f0f0;
    color: #333;
    margin: 0;
    padding: 0;
  }

  .container {
    max-width: 600px;
    margin: 50px auto;
    padding: 20px;
    background-color: #fff;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
  }

  input, button {
    padding: 10px;
    margin: 10px 0;
    width: 100%;
    border-radius: 25px;
    border: 1px solid #ccc;
    font-size: 16px;
  }

  button {
    background-color: #540080;
    color: white;
    cursor: pointer;
    border: none;
    transition: background-color 0.3s;
  }

  button:hover {
    background-color: #7d00b5;
  }

  h2 {
    color: #540080;
  }

  .user-item {
    display: flex;
    justify-content: space-between;
    margin: 10px 0;
    padding: 10px;
    background-color: #f9f9f9;
    border-radius: 5px;
  }

  .user-item button {
    margin-left: 10px;
    width: auto;
  }
`;
