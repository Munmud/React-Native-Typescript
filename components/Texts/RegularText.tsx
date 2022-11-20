import React, { FunctionComponent } from "react";
import styled from "styled-components/native";

import { colors } from "../color";
import { TextProps } from "./types";

const StyledText = styled.Text`
  font-size: 15px;
  color: ${colors.white};
  text-allign: left;
  font-family: Lato-Bold;
`;

const RegulatText: FunctionComponent<TextProps> = (props) => {
  return <StyledText style={props.textStyles}>{props.children}</StyledText>;
};

export default RegulatText;
