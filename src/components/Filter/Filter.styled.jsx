import styled from '@emotion/styled';

export const Field = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

export const Text = styled.span`
  margin-bottom: 4px;
  font-size: 20px;
  color: #212121;
`;

export const Input = styled.input`
  margin-top: 4px;
  width: 250px;
  height: 30px;
  padding-left: 10px;
  font-size: 18px;
  border: 1px solid rgba(33, 33, 33, 0.384);
  box-sizing: border-box;
  border-radius: 4px;
  outline: none;
  transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :focus-within {
    border: 1px solid rgb(88, 11, 34);
  }
`;