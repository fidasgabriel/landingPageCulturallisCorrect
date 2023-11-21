import { styled, css } from "styled-components";

export const Footer = styled.footer(
  () => css`
    width: 100%;
    background-color: #f5e6fd;
    padding: 4rem 6rem 2rem 6rem;
    @media (max-width: 670px) {
      width: 100%;
      padding: 0;
      padding-top: 2rem;
    }
  `
);

export const Container = styled.div(
  () => css`
    display: flex;
    width: 100%;
    flex-direction: row;
    align-items: space-between;
    gap: 8rem;
    @media (max-width: 720px) {
      width: 100%;
      gap: 2rem;
      justify-content: center;
    }
  `
);

export const LinksBox = styled.div(
  () => css`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1.1rem;
    height: fit-content;
    justify-content: space-between;
    @media (max-width: 720px) {
      width: 40%;
    }
  `
);

export const LogoBox = styled.div(
  () => css`
    width: 8rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    padding: 1rem 0;
  `
);

export const TextLogo = styled.p(
  () => css`
    font-size: 1rem;
    font-weight: 600;
    color: #000;
  `
);

export const ImageLogo = styled.img(
  () => css`
    height: 90%;
  `
);

export const Title = styled.h2(
  () => css`
    font-size: 1.7rem;
    font-weight: 500;
    color: #8802c7;

    @media (max-width: 540px) {
      font-size: 1.4rem;
    }
  `
);

export const Link = styled.a(
  () => css`
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: 600;
    color: #313131;
    cursor: pointer;
    width: fit-content;
    transition: 0.2s;
    gap: 1rem;
    &:hover {
      transition: 0.2s;
      color: #919191;
    }
  `
);

export const Copyright = styled.p(
  () => css`
    width: 100%;
    display: flex;
    justify-content: center;
    font-size: 0.8rem;
    font-weight: 100;
    color: #313131;
  `
);

export const WrapperLogo = styled("div")(
  () => css`
    padding-top: 2.5rem;
    width: 100%;
    display: flex;
    justify-content: center;
  `
);