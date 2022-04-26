import styled from '@emotion/styled';

export const Button = styled.button`
  margin-left: 15px;
  cursor: pointer;
  background-color: rgb(184, 162, 174);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border: transparent;
  border-radius: 4px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    background-color: rgb(119, 111, 116);
  }
`;