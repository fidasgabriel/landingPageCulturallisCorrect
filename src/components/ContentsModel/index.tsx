import React from "react";
import * as S from "./styles";

interface IContentsModel {
  firstChild?: React.ReactNode;
  title?: string;
  secondChild?: React.ReactNode;
  hasBackground?: string;
  color?: string;
  idLocation?: string;
}
const widthImg = "22rem"

export const ContentsModel = (props: IContentsModel) => {
  return (
    <S.Wrapper hasBackground={props.hasBackground} id={props.idLocation}>
      <S.Container sizeImg={widthImg}>{props?.firstChild}</S.Container>
      <S.Container style={{ color: props.color }} className="fonteInterRegular">
        <S.Title
          style={{ color: props?.color }}
          className={"fonteUnboundedBold"}
        >
          {props?.title}
        </S.Title>
        {props?.secondChild}
      </S.Container>
    </S.Wrapper>
  );
};