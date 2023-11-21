import React, { Fragment, useEffect, useState } from "react";
import { Navbar } from "./components/Navbar/index";
import { Footer } from "./components/Footer/index";
import { DownloadsContainer } from "./components/DownloadsContainer/index";
import { ContentsModel } from "./components/ContentsModel/index";
import { CardPhoto } from "./components/CardPhoto/index";
import Sobre_Culturallis from "./assets/images/Sobre_Culturallis.png";
import { ParagraphText } from "./common/ParagraghText/index";
import * as T from "./assets/texts/texts";
import Historia_Culturallis from "./assets/images/Historia_Culturallis.png";
import { BigNumbers } from "./components/BigNumbers/index";
import { CellphonesModel } from "./components/CellphonesModel/index";
import * as S from "./styles";
import { OurTeam } from "./components/OurTeam/index";
import { Slogan } from "./components/Slogan/index";
import { database } from "./firebaseConnection";
import { onValue, ref } from "firebase/database";
import { CardYoutube } from "./components/CardYoutube/index";
import { ImportantNumbers } from "./components/ImportantNumber/index";

function Landing() {
  const opts = {
    height: "100%",
    width: "100%",
  };

  const [data, setData] = useState<any>();

  useEffect(() => {
    const dadosRef = ref(database, "Culturallis-LandingPage");

    const unsubscribe = onValue(dadosRef, (snapshot) => {
      if (snapshot.exists()) {
        const resultData = snapshot.val();
        setData(resultData);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <>
      <Navbar
        handleClickAboutUs={() => {
          const element = document.getElementById("about");
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }}
        handleClickResources={() => {
          const element = document.getElementById("resources");
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }}
        handleClickTellUs={() => {
          const element = document.getElementById("footer");
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }}
      />
      <DownloadsContainer/>
      <ContentsModel
        firstChild={<CardPhoto img={Sobre_Culturallis}></CardPhoto>}
        idLocation={"about"}
        title={"SOBRE A CULTURALLIS"}
        secondChild={
          <Fragment>
            <ParagraphText
              text={
                <>
                  A Culturallis surgiu com o objetivo de diminuir a desigualdade
                  cultural e criar um ecossistema <span>completo</span> e{" "}
                  <span>igualitário</span> para todos os artistas e consumidores
                  de cultura.
                </>
              }
            />
            <ParagraphText text={T.sobreCulturalisBaixo} />
          </Fragment>
        }
      />
      <CardYoutube />
      <ContentsModel
        hasBackground="#F4B413"
        color="#EFEFEF"
        firstChild={<CardPhoto img={Historia_Culturallis} />}
        title="NOSSA HISTÓRIA"
        secondChild={
          <Fragment>
            <ParagraphText color="#Efefef" text={T.historiaCulturallisCima} />
            <ParagraphText color="#Efefef" text={T.historiaCulturallisBaixo} />
          </Fragment>
        }
      />
      <BigNumbers
        firstNumber={T.firstBigNumber}
        secondNumber={T.secondBigNumber}
        thirdNumber={T.thirdBigNumber}
      />
      <CellphonesModel
        idLocation={"resources"}
        direction="left"
        color="#982EAC"
        title={T.CellphonesFirstTitle}
        sectionName={T.SectionFirstTitle}
        sectionList={
          <div
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <ParagraphText
              sizeFont={"1.2rem"}
              nameClass={"fonteInterRegular"}
              color="#EFEFEF"
              text={"Divulgação simples e dinâmica"}
            />
            <ParagraphText
              sizeFont={"1.2rem"}
              nameClass={"fonteInterRegular"}
              color="#EFEFEF"
              text={"Diversos tipos de postagens"}
            />
            <ParagraphText
              sizeFont={"1.2rem"}
              nameClass={"fonteInterRegular"}
              color="#EFEFEF"
              text={
                <>
                  Possibilidade de expandir
                  <br />
                  sua visão cultural
                </>
              }
            />
            <ParagraphText
              sizeFont={"1.2rem"}
              nameClass={"fonteInterRegular"}
              color="#EFEFEF"
              text={
                <>
                  Exposição focada na
                  <br />
                  igualdade e interesses
                  <br />
                  pessoais
                </>
              }
            />
          </div>
        }
      />
      <CellphonesModel
        color="#E82E28"
        title={T.CellphonesSecondTitle}
        direction="right"
        sectionName={T.SectionSecondTitle}
        sectionList={
          <div
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <ParagraphText
              sizeFont={"1.2rem"}
              nameClass={"fonteInterRegular"}
              color="#EFEFEF"
              text={
                <>
                  Aprenda com quem tem
                  <br />
                  mais experiência
                </>
              }
            />
            <ParagraphText
              sizeFont={"1.2rem"}
              nameClass={"fonteInterRegular"}
              color="#EFEFEF"
              text={<>Conheça a fundo</>}
            />
            <ParagraphText
              sizeFont={"1.2rem"}
              nameClass={"fonteInterRegular"}
              color="#EFEFEF"
              text={
                <>
                  Comece também
                  <br />a gerar cultura
                </>
              }
            />
            <ParagraphText
              sizeFont={"1.2rem"}
              nameClass={"fonteInterRegular"}
              color="#EFEFEF"
              text={
                <>
                  Acesso gratuito
                  <br />
                  ou pago
                </>
              }
            />
          </div>
        }
      />
      {data && (
        <ImportantNumbers
          firstNumber={data["Usuarios"] && Object.keys(data["Usuarios"]).length}
          secondNumber={data["Cursos"] && Object.keys(data["Cursos"]).length}
          thirdNumber={data["Posts"] && Object.keys(data["Posts"]).length}
          fourthNumber={
            data["Categorias"] && Object.keys(data["Categorias"]).length
          }
        />
      )}
      <OurTeam />
      <Slogan text={T.sloganText} />
      <Footer idLocation={"footer"} />
    </>
  );
}

export default Landing;