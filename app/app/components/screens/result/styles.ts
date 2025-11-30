import styled from "styled-components/native";
import { AppText } from "../../atoms/text/text";

export const Content = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const ContentActions = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;

export const Congratulations = styled(AppText)`
  font-size: 32px;
  font-weight: bold;
  color: #fff;
`;
export const YouAreDone = styled(AppText)`
  font-size: 18px;
  color: #fff;
  margin-top: 8px;
  text-align: center;
`;
export const Card = styled.View`
  width: 100%;
  padding: 16px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ffffff36;
  border-radius: 16px;
  margin-top: 32px;
  gap: 8px;
`;

export const YourScore = styled(AppText)`
  font-size: 16px;
  color: #fff;
`;

export const ScoreValue = styled(AppText)`
  font-size: 64px;
  color: #fff;
`;
