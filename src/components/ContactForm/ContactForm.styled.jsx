import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 350px;
  border: 2px solid rgb(51, 4, 31);
  border-radius: 10px;
  padding: 20px;
  background-color: #e2b3b3;
`;

export const Field = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

export const Text = styled.span`
  margin-bottom: 4px;
  font-size: 24px;
  font-weight: 700;
  color: rgb(88, 11, 34);
`;

export const Input = styled.input`
  margin-top: 4px;
  height: 30px;
  padding-left: 10px;
  font-size: 20px;
  border: 1px solid rgba(33, 33, 33, 0.2);
  box-sizing: border-box;
  border-radius: 4px;
  outline: none;
  transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :focus-within {
  border: 1px solid rgb(88, 11, 34);
  }
`;

export const Button = styled.button`
  margin: 0 auto;
  max-width: 300px;
  padding-left: 30px;
  padding-right: 30px;
  height: 40px;
  cursor: pointer;
  background-color: rgb(88, 11, 34);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  border: transparent;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.87;
  text-align: center;
  letter-spacing: 0.06em;
  color: #ffffff;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
  background-color: rgb(51, 4, 31);
  }
`;