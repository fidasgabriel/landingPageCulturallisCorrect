import styled, { css } from "styled-components";
import YouTube from "react-youtube";

interface ICardYoutubeProps {
  linkVideo: string;
}

export const CardYoutube = styled.div(
  () => css`
    background: #f3f3f3;
    height: fit-content;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 670px) {
      width: 100%;
    }
  `
);

export const Container = styled.div(
  () => css`
    padding: 6rem;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;

    @media (max-width: 670px) {
      width: 100%;
      padding: 6rem 1rem;
    }
  `
);

export const Title = styled.h3(
  () => css`
    font-size: 2.2rem;
    letter-spacing: 0.2rem;
    margin-bottom: 4rem;

    @media (max-width: 540px) {
      text-align: center;
      font-size: 1.6rem;
    }
  `
);
