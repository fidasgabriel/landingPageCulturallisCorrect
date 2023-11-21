import React from "react";
import * as S from "./styles";

interface IBigNumberProps {
  firstNumber?: number | string;
  secondNumber?: number | string;
  thirdNumber?: number | string;
  description?: string;
}

export const BigNumbers = (props: IBigNumberProps) => {
  return (
    <S.Wrapper>
      <S.ContainerNumbers>
        <S.ContainerNumber>
          <S.Number className="fonteUnboundedBold" fontColor={"#E72929"}>
            <span>{props.firstNumber}</span>%
          </S.Number>
          <S.Info className="fonteInterRegular">
            Dos brasileiros não têm <br />
            acesso à cultura{" "}
          </S.Info>
        </S.ContainerNumber>
        <S.ContainerNumber>
          <S.Number className="fonteUnboundedBold" fontColor={"#06A73B"}>
            R$<span>{props.secondNumber}</span>
            Bilhões
          </S.Number>
          <S.Info className="fonteInterRegular">
            Foram movimentados nas
            <br /> periferias em 2022
          </S.Info>
        </S.ContainerNumber>
        <S.ContainerNumber>
          <S.Number className="fonteUnboundedBold" fontColor={"#FFC700"}>
            <span>{props.thirdNumber}</span>%
            <br />
          </S.Number>
          <S.Info className="fonteInterRegular">
            Das pessoas têm interesse <br />
            em consumir cultura
          </S.Info>
        </S.ContainerNumber>
      </S.ContainerNumbers>
      <S.Description>{props?.description}</S.Description>
    </S.Wrapper>
  );
};