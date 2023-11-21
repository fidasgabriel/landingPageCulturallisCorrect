import styled, { css } from "styled-components";

interface IWrapperProps {
  colorName?: string;
  direction?: string;
}

export const Wrapper = styled.div<IWrapperProps>`
  background: ${(props) => props.colorName};
  height: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  align-items: center;
  padding: 6rem 2rem;
  gap: 5rem;
  @media (max-width: 670px) {
    width: 100%;
    flex-direction: column;
  }
`;

export const Title = styled.h2<IWrapperProps>`
  font-size: 2rem;
  position: absolute;
  writing-mode: vertical-rl;
  left: 2rem;
  ${(props) => (props.direction === "left" ? "transform: rotate(180deg);" : "")}
  font-weight: 700;
  width: fit-content;
  color: ${(props) => props?.colorName};
  @media (max-width: 700px) {
    display: none;
  }
`;

export const TitleRight = styled.h2<IWrapperProps>`
  font-size: 2rem;
  position: absolute;
  writing-mode: vertical-rl;
  left: calc(100% - 4rem);
  ${(props) => (props.direction === "left" ? "transform: rotate(180deg);" : "")}
  font-weight: 700;
  width: fit-content;
  color: ${(props) => props?.colorName};
  @media (max-width: 700px) {
    display: none;
  }
`;

export const BigWrapper = styled.div(
  () => css`
    width: 100%;
  `
);

export const Cellphone = styled.img(
  () => css`
    height: 28rem;
    background: #d9d9d9;
    width: 14rem;
    border-radius: 0.8rem;

    @media (max-width: 540px) {
      width: 100%;
    }
  `
);

export const AppSection = styled.div<IWrapperProps>`
  height: 28rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 40%;

  ${(props) =>
    props.direction === "left"
      ? "align-items: flex-start;"
      : "align-items: flex-end;"}

  @media (max-width: 540px) {
    width: 80%;
  }
`;

export const SectionTitle = styled.h3<IWrapperProps>`
  font-size: 2.4rem;
  width: fit-content;
  letter-spacing: 0.1rem;
  color: #f1f1f1;
  text-transform: uppercase;
  font-weight: 800;
  @media (max-width: 700px) {
    font-size: 1.7rem;
  }
`;

export const SectionDescription = styled.div<IWrapperProps>`
  ${(props) =>
    props.direction === "left"
      ? "& p { text-align: left; } "
      : "& p { text-align: end; } "}
`;

export const ContainerCellphone = styled.div<IWrapperProps>`
  width: 40%;
  display: flex;
  align-items: center;
  ${(props) =>
    props.direction === "left"
      ? "justify-content: flex-end;"
      : "justify-content: flex-start;"}

  @media (max-width: 540px) {
    width: 80%;
  }
`;