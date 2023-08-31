import styled from '@emotion/styled'

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 300px;
  margin: 0 auto;
  padding: 40px;

`
export const FormText = styled.span`
 font-family: Pacifico, serif;
 font-size: 36px;
 margin-bottom: 20px;
 `

export const FormLabel = styled.label`
  font-family: Pacifico, serif;
  margin-bottom: 30px;
  font-size: 24px;
`
export const FormInput = styled.input`
  padding: 8px;
  margin-left: 20px;
  font-family: Pacifico, serif
  font-size: 14px;
  border: 1px solid #eeb338;
  border-radius: 10px;
`
export const Button = styled.button`
  font-family: Pacifico, serif
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #f1c40f;
  color: black;
  font-size: 16px;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  align-items: center;
    justify-content: center;
    display: flex;

 &:hover {
    background-color: #eeb338;
  }

`

