import { useNavigation, useRoute } from "@react-navigation/native";
import { Star } from "lucide-react-native";
import { useEffect, useState } from "react";
import { View } from "react-native";
import { Button } from "../../atoms/button/button";
import { DefaultTemplate } from "../../templates/default/default";
import { Card, Congratulations, Content, ContentActions, ScoreValue, YouAreDone, YourScore } from "./styles";

export const ResultScreen = () => {
  const route = useRoute<any>();
  const navigation = useNavigation<any>();
  const score = route?.params?.score ?? 8;
  const total = route?.params?.total ?? 10;
  const title = route?.params?.title;
  const questions = route?.params?.questions;
  const [stars, setStars] = useState([] as boolean[]);

  // Mensagens adaptadas para crianças conforme desempenho
  const getMessage = () => {
    if (score > 8) {
      return {
        main: "Parabéns!",
        sub: "Você arrasou! Mandou super bem nesta atividade!",
      };
    }
    if (score >= 6) {
      return {
        main: "Muito bom!",
        sub: "Ótimo esforço! Continue assim e ficará ainda melhor!",
      };
    }
    return {
      main: "Vamos tentar de novo?",
      sub: "Você está aprendendo. Pratique mais e vai conseguir!",
    };
  };
  const { main, sub } = getMessage();

  useEffect(() => {
    const halfFilled = Math.round((score / total) * 5);
    const filledStars = Array(halfFilled).fill(true);
    const emptyStars = Array(5 - halfFilled).fill(false);
    setStars([...filledStars, ...emptyStars]);
  }, [score, total]);

  return (
    <DefaultTemplate>
      <Content>
        <Congratulations weight="bold">{main}</Congratulations>
        <YouAreDone>{sub}</YouAreDone>
        <Card>
          <YourScore weight="bold">Sua pontuação final</YourScore>
          <ScoreValue weight="bold">
            {score}/{total}
          </ScoreValue>
          <View style={{ flexDirection: "row", gap: 4 }}>
            {stars.map((star, index) => (
              <Star color={star ? "yellow" : "gray"} key={index} />
            ))}
          </View>
        </Card>
      </Content>
      <ContentActions>
        <Button
          onPress={() => {
            if (questions?.length) {
              navigation.navigate("Quiz", { title: title ?? "Quiz", questions });
            } else {
              navigation.navigate("Home");
            }
          }}
        >
          Jogar novamente
        </Button>
        <Button outline onPress={() => navigation.navigate("Home")}>
          Voltar às atividades
        </Button>
      </ContentActions>
    </DefaultTemplate>
  );
};
