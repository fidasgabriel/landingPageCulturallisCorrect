import * as S from "./styles";
import React from "react";

interface IImportantNumbers {
  firstNumber?: number | string;
  secondNumber?: number | string;
  thirdNumber?: number | string;
  fourthNumber?: number | string;
  description?: string;
}

export const ImportantNumbers = (props: IImportantNumbers) => {
  return (
    <S.Wrapper>
      <S.Title className="fonteUnboundedBold">Números alcançados</S.Title>
      <S.ContainerNumbers>
        <S.ContainerNumber>
          <S.Number className="fonteUnboundedBold" fontColor={"#E72929"}>
            <span>{props.firstNumber}</span>
          </S.Number>
          <S.Info className="fonteInterRegular">
            Usuários
          </S.Info>
        </S.ContainerNumber>
        <S.ContainerNumber>
          <S.Number className="fonteUnboundedBold" fontColor={"#06A73B"}>
            <span>{props.secondNumber}</span>
          </S.Number>
          <S.Info className="fonteInterRegular">
            Cursos
          </S.Info>
        </S.ContainerNumber>
        <S.ContainerNumber>
          <S.Number className="fonteUnboundedBold" fontColor={"#FFC700"}>
            <span>{props.thirdNumber}</span>
          </S.Number>
          <S.Info className="fonteInterRegular">
            Posts
          </S.Info>
        </S.ContainerNumber>
        <S.ContainerNumber>
          <S.Number className="fonteUnboundedBold" fontColor={"#982EAC"}>
            <span>{props.fourthNumber}</span>
          </S.Number>
          <S.Info className="fonteInterRegular">
            Categorias
          </S.Info>
        </S.ContainerNumber>
      </S.ContainerNumbers>
    </S.Wrapper>
  );
};