import { TouchableOpacityProps } from "react-native";
import { ButtonContainer, TextButton } from "./styles";

interface ButtonProps extends TouchableOpacityProps {
  outline?: boolean;
  children?: React.ReactNode;
  bgColor?: string;
  textColor?: string;
}

export const Button = ({ outline = false, children, bgColor, textColor, ...rest }: ButtonProps) => {
  return (
    <ButtonContainer outline={outline} bgColor={bgColor} {...rest}>
      <TextButton outline={outline} customColor={textColor} weight="bold">
        {children}
      </TextButton>
    </ButtonContainer>
  );
};
