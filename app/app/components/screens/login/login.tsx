import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Button } from "../../atoms/button/button";
import { DefaultTemplate } from "../../templates/default/default";
import { ButtonContainer, CodeInput, Content, ErrorText, HelpText, InputContainer, Title } from "./styles";

export const LoginScreen = () => {
  const navigation = useNavigation<any>();
  const [code, setCode] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    // todo - ligar com a api
    if (code.length === 4) {
      navigation.navigate("Home", { userCode: code });
    } else {
      setError("Código deve ter 4 dígitos");
    }
  };

  return (
    <DefaultTemplate>
      <Content>
        <Title weight="bold">Insira seu Código Secreto</Title>

        <InputContainer>
          <CodeInput
            maxLength={4}
            keyboardType="number-pad"
            value={code}
            onChangeText={(text) => {
              setCode(text);
              setError("");
            }}
            placeholder="****"
            placeholderTextColor="rgba(255, 255, 255, 0.5)"
            secureTextEntry
          />
        </InputContainer>

        {error ? <ErrorText weight="regular">{error}</ErrorText> : null}

        <ButtonContainer>
          <Button bgColor="#FFA500" textColor="#001244" onPress={handleLogin}>
            Entrar
          </Button>
        </ButtonContainer>

        <HelpText weight="light">Precisa de ajuda?</HelpText>
      </Content>
    </DefaultTemplate>
  );
};
