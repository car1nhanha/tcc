import { styled } from "styled-components/native";
import { AppText } from "../../atoms/text/text";

export const CardContent = styled.TouchableOpacity`
  width: 100%;
  padding: 8px;
  background-color: #fff;
  border-radius: 24px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`;

export const Image = styled.Image`
  width: 64px;
  height: 64px;
  border-radius: 20px;
  margin-right: 10px;
`;

export const QuestionText = styled(AppText)`
  font-size: 18px;
  color: #000;
`;

export const ButtonIcon = styled.Image`
  width: 36px;
  height: 36px;
`;
