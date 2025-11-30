export type QuestionOption = { id: string; text: string; isCorrect: boolean };
export type Question = {
  id: string;
  title: string;
  subtitle?: string;
  image?: string;
  options: QuestionOption[];
};

export type QuizWithQuestions = {
  id: string;
  title: string;
  image: string;
  questions: Question[];
};

export const quizData: QuizWithQuestions[] = [
  {
    id: "1",
    title: "Sistema Solar",
    image: "https://img.freepik.com/free-vector/solar-system-with-planets_23-2148169833.jpg",
    questions: [
      {
        id: "solar-1",
        title: "Qual é o maior planeta do nosso sistema solar?",
        subtitle: "Ele é famoso pela sua Grande Mancha Vermelha!",
        image: "https://img.freepik.com/free-photo/planet-jupiter-illustration_23-2151774129.jpg",
        options: [
          { id: "a", text: "Terra", isCorrect: false },
          { id: "b", text: "Marte", isCorrect: false },
          { id: "c", text: "Júpiter", isCorrect: true },
          { id: "d", text: "Saturno", isCorrect: false },
        ],
      },
      {
        id: "solar-2",
        title: "Quantos planetas existem no sistema solar?",
        subtitle: "Plutão não é mais considerado um planeta!",
        options: [
          { id: "a", text: "7", isCorrect: false },
          { id: "b", text: "8", isCorrect: true },
          { id: "c", text: "9", isCorrect: false },
          { id: "d", text: "10", isCorrect: false },
        ],
      },
      {
        id: "solar-3",
        title: "Qual planeta é conhecido como o Planeta Vermelho?",
        image: "https://img.freepik.com/free-photo/view-planet-mars_23-2151738243.jpg",
        options: [
          { id: "a", text: "Vênus", isCorrect: false },
          { id: "b", text: "Marte", isCorrect: true },
          { id: "c", text: "Mercúrio", isCorrect: false },
          { id: "d", text: "Netuno", isCorrect: false },
        ],
      },
      {
        id: "solar-4",
        title: "Qual é o planeta mais próximo do Sol?",
        options: [
          { id: "a", text: "Terra", isCorrect: false },
          { id: "b", text: "Vênus", isCorrect: false },
          { id: "c", text: "Mercúrio", isCorrect: true },
          { id: "d", text: "Marte", isCorrect: false },
        ],
      },
      {
        id: "solar-5",
        title: "Qual planeta tem anéis visíveis?",
        subtitle: "É famoso por suas belas estruturas ao redor!",
        options: [
          { id: "a", text: "Júpiter", isCorrect: false },
          { id: "b", text: "Urano", isCorrect: false },
          { id: "c", text: "Saturno", isCorrect: true },
          { id: "d", text: "Netuno", isCorrect: false },
        ],
      },
      {
        id: "solar-6",
        title: "Em que planeta vivemos?",
        options: [
          { id: "a", text: "Marte", isCorrect: false },
          { id: "b", text: "Terra", isCorrect: true },
          { id: "c", text: "Vênus", isCorrect: false },
          { id: "d", text: "Júpiter", isCorrect: false },
        ],
      },
      {
        id: "solar-7",
        title: "Qual é o planeta mais frio do sistema solar?",
        options: [
          { id: "a", text: "Netuno", isCorrect: false },
          { id: "b", text: "Urano", isCorrect: true },
          { id: "c", text: "Plutão", isCorrect: false },
          { id: "d", text: "Saturno", isCorrect: false },
        ],
      },
      {
        id: "solar-8",
        title: "Qual planeta é conhecido por ter a Grande Mancha Vermelha?",
        options: [
          { id: "a", text: "Marte", isCorrect: false },
          { id: "b", text: "Saturno", isCorrect: false },
          { id: "c", text: "Júpiter", isCorrect: true },
          { id: "d", text: "Netuno", isCorrect: false },
        ],
      },
      {
        id: "solar-9",
        title: "Quantas luas tem a Terra?",
        options: [
          { id: "a", text: "0", isCorrect: false },
          { id: "b", text: "1", isCorrect: true },
          { id: "c", text: "2", isCorrect: false },
          { id: "d", text: "3", isCorrect: false },
        ],
      },
      {
        id: "solar-10",
        title: "Qual é a estrela do nosso sistema solar?",
        subtitle: "Ela nos dá luz e calor todos os dias!",
        options: [
          { id: "a", text: "Lua", isCorrect: false },
          { id: "b", text: "Sol", isCorrect: true },
          { id: "c", text: "Estrela Polar", isCorrect: false },
          { id: "d", text: "Sirius", isCorrect: false },
        ],
      },
    ],
  },
  {
    id: "2",
    title: "Animais",
    image: "https://img.freepik.com/free-vector/cute-animals-collection_23-2147525761.jpg",
    questions: [
      {
        id: "animals-1",
        title: "Qual é o maior animal terrestre?",
        image: "https://img.freepik.com/free-photo/elephant-walking-forest_23-2148686995.jpg",
        options: [
          { id: "a", text: "Girafa", isCorrect: false },
          { id: "b", text: "Elefante", isCorrect: true },
          { id: "c", text: "Rinoceronte", isCorrect: false },
          { id: "d", text: "Hipopótamo", isCorrect: false },
        ],
      },
      {
        id: "animals-2",
        title: "Que animal é conhecido como o rei da selva?",
        options: [
          { id: "a", text: "Tigre", isCorrect: false },
          { id: "b", text: "Leão", isCorrect: true },
          { id: "c", text: "Leopardo", isCorrect: false },
          { id: "d", text: "Pantera", isCorrect: false },
        ],
      },
      {
        id: "animals-3",
        title: "Qual animal vive no gelo e adora pescar?",
        subtitle: "Ele é branco e muito fofo!",
        options: [
          { id: "a", text: "Pinguim", isCorrect: false },
          { id: "b", text: "Urso Polar", isCorrect: true },
          { id: "c", text: "Foca", isCorrect: false },
          { id: "d", text: "Morsa", isCorrect: false },
        ],
      },
      {
        id: "animals-4",
        title: "Qual animal tem uma tromba longa?",
        options: [
          { id: "a", text: "Rinoceronte", isCorrect: false },
          { id: "b", text: "Hipopótamo", isCorrect: false },
          { id: "c", text: "Elefante", isCorrect: true },
          { id: "d", text: "Camelo", isCorrect: false },
        ],
      },
      {
        id: "animals-5",
        title: "Qual é o animal mais rápido do mundo?",
        options: [
          { id: "a", text: "Leão", isCorrect: false },
          { id: "b", text: "Guepardo", isCorrect: true },
          { id: "c", text: "Tigre", isCorrect: false },
          { id: "d", text: "Cavalo", isCorrect: false },
        ],
      },
      {
        id: "animals-6",
        title: "Que animal late?",
        options: [
          { id: "a", text: "Gato", isCorrect: false },
          { id: "b", text: "Cachorro", isCorrect: true },
          { id: "c", text: "Vaca", isCorrect: false },
          { id: "d", text: "Galinha", isCorrect: false },
        ],
      },
      {
        id: "animals-7",
        title: "Qual animal é conhecido por mudar de cor?",
        subtitle: "Ele consegue se camuflar muito bem!",
        options: [
          { id: "a", text: "Lagarto", isCorrect: false },
          { id: "b", text: "Camaleão", isCorrect: true },
          { id: "c", text: "Iguana", isCorrect: false },
          { id: "d", text: "Salamandra", isCorrect: false },
        ],
      },
      {
        id: "animals-8",
        title: "Qual animal voa e faz mel?",
        options: [
          { id: "a", text: "Borboleta", isCorrect: false },
          { id: "b", text: "Abelha", isCorrect: true },
          { id: "c", text: "Vespa", isCorrect: false },
          { id: "d", text: "Mosquito", isCorrect: false },
        ],
      },
      {
        id: "animals-9",
        title: "Qual é o maior animal marinho?",
        options: [
          { id: "a", text: "Tubarão", isCorrect: false },
          { id: "b", text: "Baleia Azul", isCorrect: true },
          { id: "c", text: "Golfinho", isCorrect: false },
          { id: "d", text: "Orca", isCorrect: false },
        ],
      },
      {
        id: "animals-10",
        title: "Que animal mia?",
        options: [
          { id: "a", text: "Cachorro", isCorrect: false },
          { id: "b", text: "Gato", isCorrect: true },
          { id: "c", text: "Ovelha", isCorrect: false },
          { id: "d", text: "Pato", isCorrect: false },
        ],
      },
    ],
  },
  {
    id: "3",
    title: "Matemática",
    image: "https://t3.ftcdn.net/jpg/01/34/55/32/360_F_134553262_ZvMReHZjOt1IieyFiaYHLuH0kgxDpwFE.jpg",
    questions: [
      {
        id: "math-1",
        title: "Quanto é 5 + 3?",
        options: [
          { id: "a", text: "6", isCorrect: false },
          { id: "b", text: "7", isCorrect: false },
          { id: "c", text: "8", isCorrect: true },
          { id: "d", text: "9", isCorrect: false },
        ],
      },
      {
        id: "math-2",
        title: "Quanto é 10 - 4?",
        options: [
          { id: "a", text: "5", isCorrect: false },
          { id: "b", text: "6", isCorrect: true },
          { id: "c", text: "7", isCorrect: false },
          { id: "d", text: "8", isCorrect: false },
        ],
      },
      {
        id: "math-3",
        title: "Quanto é 2 x 4?",
        subtitle: "Multiplicação é somar várias vezes!",
        options: [
          { id: "a", text: "6", isCorrect: false },
          { id: "b", text: "8", isCorrect: true },
          { id: "c", text: "10", isCorrect: false },
          { id: "d", text: "12", isCorrect: false },
        ],
      },
      {
        id: "math-4",
        title: "Quanto é 15 ÷ 3?",
        options: [
          { id: "a", text: "3", isCorrect: false },
          { id: "b", text: "4", isCorrect: false },
          { id: "c", text: "5", isCorrect: true },
          { id: "d", text: "6", isCorrect: false },
        ],
      },
      {
        id: "math-5",
        title: "Qual número vem depois do 9?",
        options: [
          { id: "a", text: "8", isCorrect: false },
          { id: "b", text: "10", isCorrect: true },
          { id: "c", text: "11", isCorrect: false },
          { id: "d", text: "12", isCorrect: false },
        ],
      },
      {
        id: "math-6",
        title: "Quanto é 7 + 7?",
        options: [
          { id: "a", text: "12", isCorrect: false },
          { id: "b", text: "13", isCorrect: false },
          { id: "c", text: "14", isCorrect: true },
          { id: "d", text: "15", isCorrect: false },
        ],
      },
      {
        id: "math-7",
        title: "Quanto é 20 - 8?",
        options: [
          { id: "a", text: "10", isCorrect: false },
          { id: "b", text: "11", isCorrect: false },
          { id: "c", text: "12", isCorrect: true },
          { id: "d", text: "13", isCorrect: false },
        ],
      },
      {
        id: "math-8",
        title: "Quanto é 3 x 3?",
        options: [
          { id: "a", text: "6", isCorrect: false },
          { id: "b", text: "9", isCorrect: true },
          { id: "c", text: "12", isCorrect: false },
          { id: "d", text: "15", isCorrect: false },
        ],
      },
      {
        id: "math-9",
        title: "Quanto é 18 ÷ 2?",
        options: [
          { id: "a", text: "8", isCorrect: false },
          { id: "b", text: "9", isCorrect: true },
          { id: "c", text: "10", isCorrect: false },
          { id: "d", text: "11", isCorrect: false },
        ],
      },
      {
        id: "math-10",
        title: "Qual é o dobro de 6?",
        subtitle: "Dobro é multiplicar por 2!",
        options: [
          { id: "a", text: "10", isCorrect: false },
          { id: "b", text: "11", isCorrect: false },
          { id: "c", text: "12", isCorrect: true },
          { id: "d", text: "13", isCorrect: false },
        ],
      },
    ],
  },
  {
    id: "4",
    title: "Cores e Formas",
    image: "https://img.freepik.com/free-vector/colorful-geometric-shapes_23-2147527678.jpg",
    questions: [
      {
        id: "shapes-1",
        title: "Qual forma tem 3 lados?",
        options: [
          { id: "a", text: "Quadrado", isCorrect: false },
          { id: "b", text: "Triângulo", isCorrect: true },
          { id: "c", text: "Círculo", isCorrect: false },
          { id: "d", text: "Retângulo", isCorrect: false },
        ],
      },
      {
        id: "shapes-2",
        title: "Qual é a cor do céu em um dia ensolarado?",
        options: [
          { id: "a", text: "Verde", isCorrect: false },
          { id: "b", text: "Azul", isCorrect: true },
          { id: "c", text: "Vermelho", isCorrect: false },
          { id: "d", text: "Amarelo", isCorrect: false },
        ],
      },
      {
        id: "shapes-3",
        title: "Quantos lados tem um quadrado?",
        options: [
          { id: "a", text: "3", isCorrect: false },
          { id: "b", text: "4", isCorrect: true },
          { id: "c", text: "5", isCorrect: false },
          { id: "d", text: "6", isCorrect: false },
        ],
      },
      {
        id: "shapes-4",
        title: "Qual é a cor de uma banana?",
        subtitle: "É uma fruta muito gostosa!",
        options: [
          { id: "a", text: "Verde", isCorrect: false },
          { id: "b", text: "Amarelo", isCorrect: true },
          { id: "c", text: "Vermelho", isCorrect: false },
          { id: "d", text: "Azul", isCorrect: false },
        ],
      },
      {
        id: "shapes-5",
        title: "Qual forma não tem pontas?",
        options: [
          { id: "a", text: "Triângulo", isCorrect: false },
          { id: "b", text: "Quadrado", isCorrect: false },
          { id: "c", text: "Círculo", isCorrect: true },
          { id: "d", text: "Estrela", isCorrect: false },
        ],
      },
      {
        id: "shapes-6",
        title: "Qual é a cor da grama?",
        options: [
          { id: "a", text: "Azul", isCorrect: false },
          { id: "b", text: "Verde", isCorrect: true },
          { id: "c", text: "Marrom", isCorrect: false },
          { id: "d", text: "Roxo", isCorrect: false },
        ],
      },
      {
        id: "shapes-7",
        title: "Quantos lados tem um retângulo?",
        options: [
          { id: "a", text: "2", isCorrect: false },
          { id: "b", text: "3", isCorrect: false },
          { id: "c", text: "4", isCorrect: true },
          { id: "d", text: "5", isCorrect: false },
        ],
      },
      {
        id: "shapes-8",
        title: "Qual é a cor do Sol?",
        subtitle: "Ele brilha no céu todos os dias!",
        options: [
          { id: "a", text: "Azul", isCorrect: false },
          { id: "b", text: "Amarelo", isCorrect: true },
          { id: "c", text: "Verde", isCorrect: false },
          { id: "d", text: "Vermelho", isCorrect: false },
        ],
      },
      {
        id: "shapes-9",
        title: "Qual forma tem pontas?",
        options: [
          { id: "a", text: "Círculo", isCorrect: false },
          { id: "b", text: "Estrela", isCorrect: true },
          { id: "c", text: "Oval", isCorrect: false },
          { id: "d", text: "Esfera", isCorrect: false },
        ],
      },
      {
        id: "shapes-10",
        title: "Qual é a cor de uma maçã vermelha?",
        options: [
          { id: "a", text: "Azul", isCorrect: false },
          { id: "b", text: "Verde", isCorrect: false },
          { id: "c", text: "Vermelho", isCorrect: true },
          { id: "d", text: "Amarelo", isCorrect: false },
        ],
      },
    ],
  },
  {
    id: "5",
    title: "Corpo Humano",
    image: "https://img.freepik.com/free-vector/human-body-parts_23-2148180289.jpg",
    questions: [
      {
        id: "body-1",
        title: "Quantos dedos temos em cada mão?",
        options: [
          { id: "a", text: "4", isCorrect: false },
          { id: "b", text: "5", isCorrect: true },
          { id: "c", text: "6", isCorrect: false },
          { id: "d", text: "10", isCorrect: false },
        ],
      },
      {
        id: "body-2",
        title: "Com que parte do corpo enxergamos?",
        options: [
          { id: "a", text: "Orelhas", isCorrect: false },
          { id: "b", text: "Olhos", isCorrect: true },
          { id: "c", text: "Nariz", isCorrect: false },
          { id: "d", text: "Boca", isCorrect: false },
        ],
      },
      {
        id: "body-3",
        title: "Com que parte do corpo ouvimos?",
        options: [
          { id: "a", text: "Olhos", isCorrect: false },
          { id: "b", text: "Orelhas", isCorrect: true },
          { id: "c", text: "Nariz", isCorrect: false },
          { id: "d", text: "Língua", isCorrect: false },
        ],
      },
      {
        id: "body-4",
        title: "Onde fica o coração?",
        subtitle: "Ele bate o tempo todo dentro de você!",
        options: [
          { id: "a", text: "Na cabeça", isCorrect: false },
          { id: "b", text: "No peito", isCorrect: true },
          { id: "c", text: "Na barriga", isCorrect: false },
          { id: "d", text: "Nas pernas", isCorrect: false },
        ],
      },
      {
        id: "body-5",
        title: "Quantos olhos temos?",
        options: [
          { id: "a", text: "1", isCorrect: false },
          { id: "b", text: "2", isCorrect: true },
          { id: "c", text: "3", isCorrect: false },
          { id: "d", text: "4", isCorrect: false },
        ],
      },
      {
        id: "body-6",
        title: "Com que parte do corpo cheiramos?",
        options: [
          { id: "a", text: "Boca", isCorrect: false },
          { id: "b", text: "Nariz", isCorrect: true },
          { id: "c", text: "Orelhas", isCorrect: false },
          { id: "d", text: "Olhos", isCorrect: false },
        ],
      },
      {
        id: "body-7",
        title: "Quantas pernas temos?",
        options: [
          { id: "a", text: "1", isCorrect: false },
          { id: "b", text: "2", isCorrect: true },
          { id: "c", text: "3", isCorrect: false },
          { id: "d", text: "4", isCorrect: false },
        ],
      },
      {
        id: "body-8",
        title: "O que protege nosso cérebro?",
        subtitle: "É duro e fica na nossa cabeça!",
        options: [
          { id: "a", text: "Cabelo", isCorrect: false },
          { id: "b", text: "Crânio", isCorrect: true },
          { id: "c", text: "Pele", isCorrect: false },
          { id: "d", text: "Orelhas", isCorrect: false },
        ],
      },
      {
        id: "body-9",
        title: "Com que parte do corpo mastigamos?",
        options: [
          { id: "a", text: "Nariz", isCorrect: false },
          { id: "b", text: "Dentes", isCorrect: true },
          { id: "c", text: "Língua", isCorrect: false },
          { id: "d", text: "Lábios", isCorrect: false },
        ],
      },
      {
        id: "body-10",
        title: "Quantos braços temos?",
        options: [
          { id: "a", text: "1", isCorrect: false },
          { id: "b", text: "2", isCorrect: true },
          { id: "c", text: "3", isCorrect: false },
          { id: "d", text: "4", isCorrect: false },
        ],
      },
    ],
  },
];
