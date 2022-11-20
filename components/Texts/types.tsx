import { ReactNode } from "react";
import { StyleProp, TextStyle } from "react-native";
// 5: 46
export interface TextProps {
  textStyles?: StyleProp<TextStyle>;
  children: ReactNode;
}
