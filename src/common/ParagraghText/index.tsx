import React from "react";
import * as S from "./styles";

interface IParagraphTextprops {
  text: React.ReactNode;
  color?: string;
  nameClass?: string;
  sizeFont?: string;
}

export const ParagraphText = ({
  text,
  color,
  nameClass,
  sizeFont,
}: IParagraphTextprops) => {
  return (
    <S.Text
      className={nameClass}
      style={{ fontSize: sizeFont }}
      colorText={color}
    >
      {text}
    </S.Text>
  );
};
