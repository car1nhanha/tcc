import { useNavigation, useRoute } from "@react-navigation/native";
import { X } from "lucide-react-native";
import { useMemo, useState } from "react";
import { Button } from "../../atoms/button/button";
import { AppText } from "../../atoms/text/text";
import { DefaultTemplate } from "../../templates/default/default";
import {
  ActionItem,
  Actions,
  Card,
  CircleButton,
  Header,
  ProgressBar,
  ProgressFill,
  QuestionImage,
  QuestionSubtitle,
  QuestionTitle,
  TimerPill,
  Title,
} from "./styles";

type QuestionOption = { id: string; text: string; isCorrect: boolean };
type Question = { id: string; title: string; subtitle?: string; image?: string; options: QuestionOption[] };

export const QuizScreen = () => {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();

  const title: string = route?.params?.title ?? "Quiz";
  const questions: Question[] = route?.params?.questions ?? [];

  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);

  const total = questions.length;
  const current = questions[index];

  const handleAnswer = (opt: QuestionOption) => {
    if (opt.isCorrect) setScore((s) => s + 1);
    const next = index + 1;
    if (next < total) {
      setIndex(next);
    } else {
      navigation.navigate("result", {
        score: opt.isCorrect ? score + 1 : score,
        total,
        title,
        questions,
      });
    }
  };

  // Se não houver perguntas, volta para Home
  useMemo(() => {
    if (!total) navigation.navigate("Home");
  }, [total]);

  if (!current) return null;

  const progress = ((index + 1) / total) * 100;
  const remaining = total - (index + 1); // perguntas que faltam para acabar

  return (
    <DefaultTemplate>
      <Header>
        <CircleButton onPress={() => navigation.navigate("Home")}>
          <X color="#fff" size={20} />
        </CircleButton>
        <Title weight="bold">{title}</Title>
        <TimerPill>
          <AppText weight="bold" style={{ color: "#fff" }}>
            {remaining}
          </AppText>
        </TimerPill>
      </Header>

      <ProgressBar>
        <ProgressFill style={{ width: `${progress}%` }} />
      </ProgressBar>

      <Card>
        <QuestionTitle weight="bold">{current.title}</QuestionTitle>
        {current.subtitle ? <QuestionSubtitle weight="light">{current.subtitle}</QuestionSubtitle> : null}
        {current.image ? <QuestionImage source={{ uri: current.image }} /> : null}
      </Card>

      <Actions>
        {current.options.map((opt, idx) => {
          const colors = ["#FFD700", "#90EE90", "#FFB6C1", "#FFA500"];
          const bg = colors[idx % colors.length];
          return (
            <ActionItem key={opt.id}>
              <Button bgColor={bg} textColor="#001244" onPress={() => handleAnswer(opt)}>
                {opt.text}
              </Button>
            </ActionItem>
          );
        })}
      </Actions>
    </DefaultTemplate>
  );
};
