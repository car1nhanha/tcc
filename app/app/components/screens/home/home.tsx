import { useNavigation, useRoute } from "@react-navigation/native";
import { useMemo, useState } from "react";
import { BackendQuizSummary, backendService } from "../../../services/backend";
import { QuestionCard } from "../../organisms/questionCard/questionCard";
import { DefaultTemplate } from "../../templates/default/default";
import { Avatar, ContainerHeaderLeft, Header, QuizList, SelectQuizText, SubWellcomeText, WellcomeText } from "./styles";

export const HomeScreen = () => {
  const [quizzes, setQuizzes] = useState<BackendQuizSummary[]>([]);
  const navigation = useNavigation<any>();
  const route = useRoute<any>();

  // todo - ver a possibilidade de usar ou não 4 dígitos
  const userCode = route?.params?.userCode || "0000";
  // usando a api do https://www.dicebear.com/styles/bottts-neutral/
  const avatarUrl = `https://api.dicebear.com/9.x/bottts-neutral/png?seed=${userCode}`;

  const getQuizzes = async () => {
    try {
      const quizzes = await backendService.listQuizzes();
      console.log(quizzes);
      setQuizzes(quizzes);
    } catch (error) {
      console.error("Erro ao buscar quizzes:", error);
    }
  };

  useMemo(() => {
    getQuizzes();
  }, []);

  const handleQuizPress = async (quiz: BackendQuizSummary) => {
    try {
      const questions = await backendService.listQuestions(quiz.id);
      if (questions.length) {
        navigation.navigate("Quiz", { title: quiz.title, questions });
      }
    } catch (error) {
      console.error("Erro ao carregar quiz:", error);
    }
  };

  return (
    <DefaultTemplate>
      <Header>
        <ContainerHeaderLeft>
          <WellcomeText weight="bold">Olá, Léo</WellcomeText>
          <SubWellcomeText weight="light">Turma do Sol</SubWellcomeText>
        </ContainerHeaderLeft>

        <Avatar source={{ uri: avatarUrl }} />
      </Header>

      <SelectQuizText weight="bold">Escolha uma atividade</SelectQuizText>

      <QuizList>
        {quizzes.map((quiz) => (
          <QuestionCard key={quiz.id} quiz={quiz} onPress={() => handleQuizPress(quiz)} />
        ))}
      </QuizList>
    </DefaultTemplate>
  );
};
