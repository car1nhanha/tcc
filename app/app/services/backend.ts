import AsyncStorage from "@react-native-async-storage/async-storage";
import { quizData } from "../data/quizData";

// Tipos
export type BackendQuizSummary = {
  id: string;
  title: string;
  image: string;
};

export type BackendQuestionOption = {
  id: string;
  text: string;
  isCorrect: boolean;
};

export type BackendQuestion = {
  id: string;
  title: string;
  subtitle?: string;
  image?: string;
  options: BackendQuestionOption[];
};

export type AuthResult = {
  token: string;
  user: {
    id: string;
    code: string;
    name: string;
    avatarUrl: string;
  };
};

// Geração simples de token mock
const generateMockToken = (code: string) => `mock-token-${code}-${Date.now()}`;

// Serviço centralizado
class BackendService {
  private token: string | null = null;

  async authenticate(code: string): Promise<AuthResult> {
    // Mock de usuário (poderia validar código em um backend real)
    const token = generateMockToken(code);
    this.token = token;
    await AsyncStorage.setItem("@app_token", token);

    return {
      token,
      user: {
        id: code,
        code,
        name: `Aluno ${code}`,
        avatarUrl: `https://api.dicebear.com/9.x/bottts-neutral/png?seed=${code}`,
      },
    };
  }

  async restoreToken(): Promise<string | null> {
    if (this.token) return this.token;
    const stored = await AsyncStorage.getItem("@app_token");
    this.token = stored;
    return stored;
  }

  async logout(): Promise<void> {
    this.token = null;
    await AsyncStorage.removeItem("@app_token");
  }

  async listQuizzes(): Promise<BackendQuizSummary[]> {
    return quizData.map((q) => ({ id: q.id, title: q.title, image: q.image }));
  }

  async listQuestions(quizId: string): Promise<BackendQuestion[]> {
    const quiz = quizData.find((q) => q.id === quizId);
    return quiz ? quiz.questions : [];
  }

  async getQuestion(quizId: string, questionId: string): Promise<BackendQuestion | undefined> {
    const quiz = quizData.find((q) => q.id === quizId);
    return quiz?.questions.find((q) => q.id === questionId);
  }

  async submitAnswers(
    quizId: string,
    answers: { questionId: string; optionId: string }[]
  ): Promise<{ score: number; total: number }> {
    const quiz = quizData.find((q) => q.id === quizId);
    if (!quiz) return { score: 0, total: 0 };
    let score = 0;
    for (const ans of answers) {
      const question = quiz.questions.find((q) => q.id === ans.questionId);
      const selected = question?.options.find((o) => o.id === ans.optionId);
      if (selected?.isCorrect) score += 1;
    }
    return { score, total: quiz.questions.length };
  }
}

export const backendService = new BackendService();
