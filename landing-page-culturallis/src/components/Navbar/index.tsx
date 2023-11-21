import React from "react";
import * as S from "./styles";
import logoCulturallis from "../../assets/images/logoCulturallisBigSize.png";

interface INavbarProps{
  handleClickAboutUs?: () => void;
  handleClickResources?: () => void;
  handleClickTellUs?:() => void;
}

export const Navbar = (props:INavbarProps) => {
  return (
    <S.Navbar>
      <S.BoxAvatar>
        <S.BoxColor>
          <S.Logo src={logoCulturallis} />
        </S.BoxColor>
        <S.Triangle />
      </S.BoxAvatar>
      <S.PageTabs>
        <S.Title onClick={props?.handleClickAboutUs} className={"fonteUnboundedBold"}>Sobre nós</S.Title>
        <S.Title onClick={props?.handleClickResources} className={"fonteUnboundedBold"}>Recursos</S.Title>
        <S.Title onClick={props?.handleClickTellUs} className={"fonteUnboundedBold"}>Contato</S.Title>
      </S.PageTabs>
    </S.Navbar>
  );
};