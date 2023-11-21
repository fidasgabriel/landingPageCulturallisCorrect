import styled, { css } from "styled-components";

interface ITextProps {
  colorText?: string;
}

export const Text = styled.p<ITextProps>(
  ({ colorText }) => css`
    font-size: 1.57rem;
    color: ${colorText ? colorText : "#0e0e0e"};
    line-height: 2rem;
    letter-spacing: 0.15rem;

    & > span {
      font-weight: bold;
    }

    @media (max-width: 1450px) {
      font-size: 1.3rem;
      letter-spacing: 0.04rem;
    }
  `
);
