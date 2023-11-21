import { styled, css } from "styled-components";

export const SloganSection = styled("section")(
  () => css`
    height: 55vh;
    width: 100%;
    background-color: #06a73b;
    padding: 6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 670px) {
      width: 100%;
    }
  `
);

export const SloganText = styled("h2")(
  () => css`
    font-size: 4rem;
    color: #f1f1f1;
    @media (max-width: 800px) {
      font-size: 3.5rem;
      text-align: center;
    }

    @media (max-width: 540px) {
      font-size: 3rem;
    }
  `
);