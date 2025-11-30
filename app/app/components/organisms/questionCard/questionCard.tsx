import { TouchableOpacityProps, View } from "react-native";
import { BackendQuizSummary } from "../../../services/backend";
import { ButtonIcon, CardContent, Image, QuestionText } from "./styles";

interface QuestionCardProps extends TouchableOpacityProps {
  quiz: BackendQuizSummary;
}

export const QuestionCard = ({ quiz, ...touchableProps }: QuestionCardProps) => {
  return (
    <CardContent activeOpacity={0.8} {...touchableProps}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image source={{ uri: quiz.image }} />
        <QuestionText weight="bold">{quiz.title}</QuestionText>
      </View>
      <ButtonIcon source={require("../../../../assets/icons/arrow-right.png")} />
    </CardContent>
  );
};
