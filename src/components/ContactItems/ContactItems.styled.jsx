import styled from '@emotion/styled';

export const ContactLi = styled.li`
  font-family: Pacifico, serif;
  font-size: 36px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  padding: 30px;
  border: 4px solid #eeb338;
  border-radius: 30px;
  width: 300px;
`;

export const ContactText = styled.p`
  font-family: Pacifico, serif;
  margin-bottom: 10px;
  font-size: 24px;
`;

export const Button = styled.button`
  font-family: Pacifico, serif;
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #f1c40f;
  color: black;
  font-size: 16px;
  border: none;
  border-radius: 30px;
  cursor: pointer;

  &:hover {
    background-color: #eeb338;
  }
`;
