import styled, { css } from "styled-components";

export const Navbar = styled.nav(
  () => css`
    width: 100%;
    height: 6rem;
    display: flex;
    justify-content: space-between;
    background-color: #a200ee;
    box-shadow: 1px 5px 8px 0px rgba(0, 0, 0, 0.25);
    z-index: 1000000;
    position: fixed;
  `
);

export const BoxAvatar = styled.div(
  () => css`
    width: 50%;
    height: 100%;
    display: flex;

    @media (max-width: 768px) {
      width: 40%;
    }
  `
);

export const BoxColor = styled.div(
  () => css`
    width: 100%;
    height: 100%;
    background: #8802c7;
    display: flex;
    align-items: center;
    padding-left: 2rem;
  `
);

export const Triangle = styled.div(
  () => css`
    width: 0px;
    height: 0px;
    border-style: solid;
    border-width: 6rem 8rem 0 0px;
    border-color: #8802c7 transparent transparent transparent;
  `
);

export const Logo = styled("img")(
  () => css`
    height: 3rem;

    @media (max-width: 768px) {
       height: 2rem;
    }
  `
);

export const PageTabs = styled.div(
  () =>
    css`
      width: 50%;
      height: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      media (max-width: 900px) {
        width: 25%;
      }

      @media (max-width: 768px) {
        width: 60%;
      }@media (max-width: 768px) {
        width: 60%;
      }
    `
);

export const Title = styled.h2(
  () => css`
    font-size: 1.2rem;
    color: #f1f1f1;
    font-weight: bold;
    cursor: pointer;
    transition: 0.2s;

    &:hover {
      scale: 1.2;
      transition: 0.2s;
    }

    @media (max-width: 768px) {
      font-size: 0.7rem;
    }
  `
);