import styled, { css } from "styled-components";
import Box from "@mui/material/Box";

export const Container = styled.div(
  () => css`
    display: flex;
    background-color: #f6f6f6;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    @media (max-width: 670px) {
      width: 100%;
    }
  `
);

export const Wrapper = styled(Box)(
  () => css`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    position: relative;
    background-color: #f6f6f6;
    margin: 5rem;
    width: 100%;
    @media (max-width: 1065px) {
      justify-content: center;
      margin: 0;
      padding: 4rem;
    }
  `
);

export const Image = styled.img(
  () => css`
    width: 30.5rem;
    height: 34.5rem;
    z-index: 1;
    @media (max-width: 1065px) {
      display: none;
    }
  `
);

export const InfoContainer = styled.div(
  () =>
    css`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      gap: 2rem;
      width: 100%;
      padding-top: 2rem;
    `
);

export const ImageLogo = styled.img(
  () => css`
    padding: 2rem 0;
    width: 10rem;
    @media (max-width: 540px) {
      width: 6rem;
    }
  `
);

export const Title = styled.h1(
  () =>
    css`
      font-size: 2.8rem;
      text-weight: bold;
      text-align: center;
      text-transform: uppercase;

      @media (max-width: 540px) {
        font-size: 2rem;
      }
    `
);

export const ContainerDownload = styled.div(
  () => css`
    display: flex;
    justify-content: center;
    gap: 2rem;
    height: 3rem;
  `
);

export const GooglePlay = styled.img(
  () =>
    css`
      height: 100%;
      width: 10rem;
      @media (max-width: 540px) {
        width: 6rem;
        height: 60%;
      }
    `
);

export const AppleStore = styled.img(
  () =>
    css`
      height: 100%;
      width: 10rem;
      @media (max-width: 540px) {
        width: 6rem;
        height: 60%;
      }
    `
);

export const Navigate = styled.a(
  () => css`
    cursor: pointer;
  `
);

export const LogoContainer = styled.div(
  () => css`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  `
);