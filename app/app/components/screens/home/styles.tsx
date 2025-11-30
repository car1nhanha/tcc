import { styled } from "styled-components/native";
import { AppText } from "../../atoms/text/text";

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const ContainerHeaderLeft = styled.View``;

export const Avatar = styled.Image`
  width: 48px;
  height: 48px;
  border-radius: 24px;
`;

export const WellcomeText = styled(AppText)`
  font-size: 24px;
  color: #000;
`;

export const SubWellcomeText = styled(AppText)`
  font-size: 16px;
  color: rgb(37, 123, 244);
`;

export const SelectQuizText = styled(AppText)`
  font-size: 24px;
  color: #000;
  margin-top: 36px;
  margin-bottom: 24px;
`;

export const QuizList = styled.ScrollView`
  width: 100%;
  flex-direction: column;
`;
