import styled from 'styled-components';

export const OptionsList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
  margin-left: 55px;
`;

export const Button = styled.button`
  width: 100px;
  height: 30px;
  font-family: 'Verdana';
  font-weight: 400;
  font-size: 14px;
  font-style: bold;
  /* background: transparent; */
  border: 2px solid #66ccff;
  border-radius: 18px;
  outline: 0;
  text-align: center;
  text-decoration: none;
  background-color: #ccffff;
  margin: 0 0.25em;
  padding: 0.25em 1em;
  background: linear-gradient(0deg, #c2bcd8, #4abde3);
  box-shadow: 4px 1px 4px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
  transition: color cubic-bezier(0.075, 0.82, 0.165, 1), transform 1s;
  :hover {
    color: #ccffff;
    font-size: 14px;
    opacity: 0.75;
    transform: scale(1.2);
  }
`;
