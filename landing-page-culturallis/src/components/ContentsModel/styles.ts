import styled, { css } from "styled-components";

interface IContentProps {
  hasBackground?: string;
}

interface IContainerProps {
  sizeImg?: string;
}

export const Wrapper = styled.div<IContentProps>(
  ({ hasBackground }) => css`
    height: 60vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 3rem;
    background: ${hasBackground ? hasBackground : "transparent"};

    @media (min-width: 768px) {
      flex-direction: row;
      justify-content: space-around;
    }

    @media (max-width: 670px) {
      height: 100%;
      width: 100%;
    }
  `
);

export const Container = styled.div<IContainerProps>(
  ({ sizeImg }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
    width: ${sizeImg ? sizeImg : "70%"};
    margin: 1rem;
    & > .iframe {
      height: 100%;
      border-radius: 16px;
      overflow: hidden;
      border: none;
    }
  `
);

export const Title = styled.h3(
  () =>
    css`
      font-size: 2.2rem;
      letter-spacing: 0.2rem;
      @media (max-width: 768px) {
        font-size: 1.7rem;
      }
    `
);
