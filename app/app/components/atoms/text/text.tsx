import React from "react";
import { StyleProp, Text, TextProps, TextStyle } from "react-native";

export type AppFontWeight = "regular" | "bold" | "light";

type Props = TextProps & {
  weight?: AppFontWeight;
  style?: StyleProp<TextStyle>;
};

// apoio da documentação do Exop - https://docs.expo.dev/develop/user-interface/fonts/
const FONT_MAP: Record<AppFontWeight, string> = {
  regular: "ComicNeue-Regular",
  bold: "ComicNeue-Bold",
  light: "ComicNeue-Light",
};

export function AppText({ weight = "regular", style, ...rest }: Props) {
  return <Text {...rest} style={[{ fontFamily: FONT_MAP[weight] }, style]} />;
}
