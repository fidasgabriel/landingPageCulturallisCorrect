import React from "react";
import * as S from "./styles";

export const FloatingWords = () => {
  return (
    <S.Wrapper>
      <S.Yellow className="fonteUnboundedBold" position="left">
        Diversidade
      </S.Yellow>
      <S.Purple className="fonteUnboundedBold" position="rigth">
        Acesso para Todos
      </S.Purple>
      <S.Red className="fonteUnboundedBold" position="left">
        Inclusão
      </S.Red>
      <S.Green className="fonteUnboundedBold" position="center">
        Igualdade
      </S.Green>
      <S.Purple className="fonteUnboundedBold" position="left" gap={4}>
        Arte
      </S.Purple>
      <S.Yellow className="fonteUnboundedBold" position="center">
        Criatividade
      </S.Yellow>
    </S.Wrapper>
  );
};
