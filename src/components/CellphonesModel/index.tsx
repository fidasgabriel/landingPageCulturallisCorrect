import React from "react";
import * as S from "./styles";
import imagePosts from "../../assets/images/imagePosts.png";
import imageCourses from "../../assets/images/imageCourses.png";

interface ICellphonesModelProps {
  color?: string;
  title?: string;
  direction: "right" | "left";
  sectionName?: string;
  sectionList?: React.ReactNode;
  idLocation?: string;
}

export const CellphonesModel = (props: ICellphonesModelProps) => {
  return (
    <S.BigWrapper id={props?.idLocation}>
      <S.Wrapper colorName={props?.color} direction={props?.direction}>
        {props.direction === "left" ? (
          <S.Title
            colorName={"#EFEFEF"}
            className="fonteInterRegular"
            direction={props?.direction}
          >
            {props?.title}
          </S.Title>
        ) : (
          <S.TitleRight
            colorName={"#EFEFEF"}
            className="fonteInterRegular"
            direction={props?.direction}
          >
            {props?.title}
          </S.TitleRight>
        )}

        {props?.direction === "left" ? (
          <>
            <S.ContainerCellphone direction={props.direction}>
              <S.Cellphone src={imagePosts} />
            </S.ContainerCellphone>
            <S.AppSection
              className="fonteInterRegular"
              direction={props.direction}
            >
              <S.SectionTitle
                className="fonteUnboundedBold"
                direction={props.direction}
              >
                {props?.sectionName}
              </S.SectionTitle>
              <S.SectionDescription direction={props.direction}>
                {props?.sectionList}
              </S.SectionDescription>
            </S.AppSection>{" "}
          </>
        ) : (
          <>
            <S.AppSection
              className="fonteInterRegular"
              direction={props.direction}
            >
              <S.SectionTitle
                className="fonteUnboundedBold"
                direction={props.direction}
              >
                {props?.sectionName}
              </S.SectionTitle>
              <S.SectionDescription direction={props.direction}>
                {props?.sectionList}
              </S.SectionDescription>
            </S.AppSection>
            <S.ContainerCellphone direction={props.direction}>
              <S.Cellphone src={imageCourses}/>
            </S.ContainerCellphone>
          </>
        )}
      </S.Wrapper>
    </S.BigWrapper>
  );
};