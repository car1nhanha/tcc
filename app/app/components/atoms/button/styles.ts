import { styled } from "styled-components/native";
import { AppText } from "../text/text";

interface ButtonContainerProps {
  outline?: boolean;
  bgColor?: string;
}

export const ButtonContainer = styled.TouchableOpacity<ButtonContainerProps>`
  background-color: ${({ outline, bgColor }) => (outline ? "transparent" : bgColor || "#fff")};
  border: 2px solid #fff;
  padding: 16px 24px;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

interface TextButtonProps {
  outline?: boolean;
  customColor?: string;
}

export const TextButton = styled(AppText)<TextButtonProps>`
  color: ${({ outline, customColor }) => (outline ? "#fff" : customColor || "#001244")};
  font-size: 16px;
`;
