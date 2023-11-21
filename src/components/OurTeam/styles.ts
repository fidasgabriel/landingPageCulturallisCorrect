import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  padding: 6rem 6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 670px) {
    width: 100%;
    padding: 2rem;
  }
`;

export const Title = styled.h2`
  font-size: 1.8rem;
  letter-spacing: 0.15rem;
  text-align: center;
`;

export const TeamWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 8rem;
  gap: 8rem;
  @media (max-width: 1450px) {
    width: 100%;
  }
`;

export const TitleTeam = styled.h2`
  width: fit:content;
  align-self: flex-end;
  font-size: 2.4rem;
  @media (max-width: 960px){
    align-self: center;
  }
`;

export const FirstGradeWrapper = styled.div`
  display: flex;
  gap: 3rem;
  width: 100%;
  flex-direction: column;
  margin-top: -4rem;
  @media (max-width: 960px) {
    flex-direction: row-reverse;
  }

  @media (max-width: 540px) {
    flex-direction: column;
  }
`;

export const FirstLine = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  gap: 4rem;
  @media (max-width: 960px) {
    flex-direction: column-reverse;
    gap: 2rem;
  }
`;

export const SecondLine = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 4rem;
  width: 100%;
  @media (max-width: 960px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

export const Info = styled.h3`
  font-size: 1.6rem;
  width: fit-content;
  align-self: flex-end;
  margin-bottom: 0rem;

  @media (max-width: 540px) {
    align-self: center;
    text-align: center;
  }
`;

export const SecondGradeWrapper = styled.div`
  display: flex;
  gap: 3rem;
  width: 100%;
  flex-direction: column;
  margin-top: -4rem;
  margin-bottom: 4rem;
  @media (max-width: 960px) {
    flex-direction: row-reverse;
  }

  @media (max-width: 540px) {
    flex-direction: column;
  }
`;

export const ImgIntegrantes = styled.img``;