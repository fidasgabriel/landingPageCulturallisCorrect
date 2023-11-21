import styled, { css } from "styled-components";

interface INumberProps {
  fontColor: string;
}

export const Wrapper = styled.div(
  () => css`
    width: 100%;
    background: #f3f3f3;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 12rem 6rem;
    @media (max-width: 1450px) {
      padding: 8rem 6rem;
    }
    @media (max-width: 1200px) {
      padding: 4rem 2rem;
    }
    @media (max-width: 670px) {
      width: 100%;
    }
  `
);

export const ContainerNumbers = styled.div(
  () => css`
    width: 100%;
    display: flex;
    justify-content: space-around;
    height: 100%;
    gap: 3rem;
    align-items: center;
    @media (max-width: 1200px) {
      flex-direction: column;
    }

    @media (max-width: 540px) {
      gap: 4rem;
    }
  `
);

export const ContainerNumber = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    width: 55%;
    @media (max-width: 850px) {
      width: 70%;
      gap: 1rem;
    }
  `
);

export const Number = styled.div<INumberProps>(
  ({ fontColor }) => css`
    font-size: 1.8rem;
    color: ${fontColor};
    font-weight: 500;
    text-align: center;
    height: 10rem;

    & > span {
      font-weight: 700;
      font-size: 5.8rem;
      height: fit-content;
      display: inline-block;

      @media (max-width: 540px) {
        font-size: 4.6rem;
      }
    }

    & > div {
      font-size: 2.2rem;
      text-align: center;
    }
  `
);

export const Info = styled.h4(
  () => css`
    font-size: 1.6rem;
    text-align: center;
    align-self: center;
    font-weight: 500;
  `
);

export const Description = styled.p(
  () => css`
    font-size: 1.3rem;
    text-align: center;
    display: flex;
    line-height: 1.7rem;
    align-items: center;
    justify-content: center;
  `
);