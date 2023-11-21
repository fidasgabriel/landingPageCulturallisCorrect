import styled, { css } from "styled-components";

interface IPositionprops {
  position: string;
  gap?: number;
}

export const Yellow = styled.h2<IPositionprops>(
  ({ position, gap }) => css`
    font-size: 2.7rem;
    color: #ffc700;
    align-self: ${position === "left"
      ? "flex-start"
      : position === "center"
      ? "center"
      : "flex-end"};
    padding-left: ${gap}rem;
  `
);

export const Purple = styled.h2<IPositionprops>(
  ({ position, gap }) => css`
    font-size: 2.7rem;
    color: #8802c7;
    align-self: ${position === "left"
      ? "flex-start"
      : position === "center"
      ? "center"
      : "flex-end"};
    padding-left: ${gap}rem;
  `
);

export const Red = styled.h2<IPositionprops>(
  ({ position, gap }) => css`
    font-size: 2.7rem;
    color: #e72929;
    align-self: ${position === "left"
      ? "flex-start"
      : position === "center"
      ? "center"
      : "flex-end"};
    padding-left: ${gap}rem;
  `
);

export const Green = styled.h2<IPositionprops>(
  ({ position, gap }) => css`
    font-size: 2.7rem;
    color: #06a73b;
    align-self: ${position === "left"
      ? "flex-start"
      : position === "center"
      ? "center"
      : "flex-end"};
    padding-left: ${gap}rem;
  `
);

export const Wrapper = styled.div(
  () => css`
    width: 100%;
    max-width: 50rem;
    display: flex;
    flex-direction: column;
    gap: 1.8rem;
    justify-content: space-between;
  `
);
