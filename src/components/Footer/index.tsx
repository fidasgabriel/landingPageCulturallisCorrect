import React from "react";
import * as S from "./styles";
import LogoApoliz from "../../assets/images/Logo_Apoliz.png";

interface IFooterProps {
  idLocation?: string;
}

export const Footer = ({ idLocation }: IFooterProps) => {
  return (
    <S.Footer>
      <S.Container>
        <S.LinksBox>
          <S.Title className="fonteUnboundedBold">Links úteis</S.Title>
          <S.Link
            className="fonteInterRegular"
            onClick={() => {
              const element = document.getElementById("about");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Saiba mais sobre a Culturallis
          </S.Link>
          <S.Link className="fonteInterRegular">Cadastre-se</S.Link>
          <S.Link
            target="_blank"
            className="fonteInterRegular"
            href="mailto:apoliz.cultura@gmail.com"
          >
            Suporte
          </S.Link>
          <S.Link
            target="_blank"
            className="fonteInterRegular"
            href="mailto:apoliz.cultura@gmail.com"
          >
            FAQ
          </S.Link>
        </S.LinksBox>
        <S.LinksBox>
          <S.Title className="fonteUnboundedBold">Contato</S.Title>
          <S.Link
            target="_blank"
            className="fonteInterRegular"
            href="mailto:apoliz.cultura@gmail.com"
          >
            E-mail
          </S.Link>
          <S.Link
            target="_blank"
            className="fonteInterRegular"
            href="https://youtu.be/SgwzPGDl3c4"
          >
            Youtube
          </S.Link>
          <S.Link
            target="_blank"
            className="fonteInterRegular"
            href="https://instagram.com/culturallis_?igshid=OGQ5ZDc2ODk2ZA=="
          >
            Instagram
          </S.Link>
          {/* <S.Link className="fonteInterRegular">Tik Tok</S.Link> */}
        </S.LinksBox>
      </S.Container>
      <S.WrapperLogo>
        <S.LogoBox>
          <S.TextLogo className="fonteInterRegular">App By</S.TextLogo>
          <S.ImageLogo src={LogoApoliz} />
        </S.LogoBox>
      </S.WrapperLogo>
      <S.Copyright className="fonteInterRegular">
        Culturallis <span dangerouslySetInnerHTML={{ __html: "&copy;" }} />
      </S.Copyright>
    </S.Footer>
  );
};
