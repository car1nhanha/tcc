import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "react-native";
import { styled } from "styled-components/native";

export const DefaultTemplate = ({ children }: { children: React.ReactNode }) => {
  return (
    <LinearGradient colors={["#89cff0", "#4682b4"]} style={{ flex: 1 }}>
      <Container>
        <StatusBar
          backgroundColor="#89cff0"
          barStyle="light-content" // 'default', 'light-content', 'dark-content'
          hidden={false}
          translucent={false}
        />
        {children}
      </Container>
    </LinearGradient>
  );
};

const Container = styled.View`
  flex: 1;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 16px;
`;
