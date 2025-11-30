import { styled } from "styled-components/native";
import { AppText } from "../../atoms/text/text";

export const Content = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 24px;
`;

export const Title = styled(AppText)`
  font-size: 32px;
  color: #fff;
  text-align: center;
  margin-bottom: 40px;
`;

export const InputContainer = styled.View`
  width: 100%;
  align-items: center;
  margin-bottom: 32px;
`;

export const CodeInput = styled.TextInput`
  width: 80%;
  max-width: 300px;
  padding: 20px;
  font-size: 32px;
  text-align: center;
  color: #fff;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  letter-spacing: 12px;
  font-family: "ComicNeue-Bold";
`;

export const ErrorText = styled(AppText)`
  font-size: 14px;
  color: #ff6b6b;
  margin-bottom: 16px;
`;

export const ButtonContainer = styled.View`
  width: 100%;
  max-width: 400px;
  margin-bottom: 24px;
`;

export const HelpText = styled(AppText)`
  font-size: 16px;
  color: rgba(255, 255, 255, 0.7);
  text-decoration: underline;
`;
