import { styled } from "styled-components/native";
import { AppText } from "../../atoms/text/text";

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const CircleButton = styled.TouchableOpacity`
  width: 36px;
  height: 36px;
  border-radius: 18px;
  border: 2px solid #fff;
  align-items: center;
  justify-content: center;
`;

export const Title = styled(AppText)`
  font-size: 28px;
  color: #fff;
`;

export const TimerPill = styled.View`
  padding: 6px 12px;
  border-radius: 20px;
  border: 2px solid #fff;
`;

export const ProgressBar = styled.View`
  height: 10px;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 8px;
  margin: 12px 0 16px 0;
  overflow: hidden;
`;

export const ProgressFill = styled.View`
  height: 100%;
  background-color: #ffd200;
`;

export const Card = styled.View`
  width: 100%;
  padding: 16px;
  background-color: #ffffffdd;
  border-radius: 24px;
  margin: 8px 0 24px 0;
  align-items: center;
`;

export const QuestionTitle = styled(AppText)`
  font-size: 24px;
  color: #001244;
  text-align: center;
`;

export const QuestionSubtitle = styled(AppText)`
  font-size: 16px;
  color: #4a6fa8;
  margin-top: 8px;
  text-align: center;
`;

export const QuestionImage = styled.Image`
  width: 300px;
  height: 260px;
  border-radius: 12px;
  margin-top: 16px;
`;

export const Actions = styled.View`
  width: 100%;
`;

export const ActionItem = styled.View`
  margin-bottom: 12px;
`;
