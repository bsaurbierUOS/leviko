import { useRef } from "react";
import { useStickyScroll } from "../Components/customHooks/useStickyScroll";
import MarqueeBanner from "../Components/Banner/MarqueeBanner";
import HeroStartseite from "../Components/Hero/HeroStartseite";
import BildText from "../Components/InfoText/BildText";
import TextBild from "../Components/InfoText/TextBild";
import Institutionen from "../Components/Parallax/Institutionen";
import InstitutionenWhite from "../Components/Parallax/InstitutionenWhite";
import ImageFrau from "../assets/images/Frau_mit_Meta_Quest.webp";
import ImageBrille from "../assets/images/Meta_Quest_Brille.webp";
import ImageTablet from "../assets/images/Tablet_Zeichnung.webp";
import ImageMaestro from "../assets/images/person_plays_maestro.jpg";
import MireviWhite from "../assets/images/MIREVI_weiss.webp";
import HSDWhite from "../assets/images/HSD_Marke_v1_HSD_weiss.png";
import ParallaxSection from "../Components/UI/Parallax/ParallaxSection.styled";
import KontaktTeaser from "../Components/InfoText/KontaktTeaser";
import { Headline } from "../Components/UI/Headline.styled";
import MarqueePraxispartner from "../Components/Banner/MarqueePraxispartner";
import LogoTros from "../assets/images/hfm-trossingen-logo550x274.webp";
import LogoTrosWithBackground from "../assets/images/logo-hochschule-fuer-musik-trossingen.webp";
import MTDMLWhite from "../assets/images/MTDML Logo ohne Bildunterschrift invertiert 300px.webp";
import LogoOsnaGrau from "../assets/images/UOS-Logo_Grau_1C_v01.webp";
import Chris from "../assets/images/CGEI.webp";
import Phil from "../assets/images/Philipp Ahner.webp";
import Michael from "../assets/images/foto_oehler_uos.jpg";
import useDarkModeStore from "../Components/stores/useDarkModeStore";

const Startseite = () => {
  const refOne = useRef<HTMLDivElement>(null);
  const refTwo = useRef<HTMLDivElement>(null);
  const refThree = useRef<HTMLDivElement>(null);
  const refFour = useRef<HTMLDivElement>(null);

  const { isDarkModeOn } = useDarkModeStore();

  useStickyScroll([refOne, refTwo, refThree, refFour], {
    onEnter: (entry) => {
      entry.target.classList.add("sticky");
    },
    onLeave: (entry) => {
      entry.target.classList.remove("sticky");
    },
  });

  return (
    <div>
      <HeroStartseite
        imgSrc={ImageMaestro}
        imgAlt="Person playing maestro VR"
        headline="Erkunde neue Klangwelten"
        description="LEVIKO XR: Digitale Innovation im Musikunterricht."
        linkTo="/projekt"
        button="Erfahre mehr"
        $objectPosition="70%"
      />
      <MarqueeBanner />
      <BildText
        imgSrc={ImageFrau}
        imgAlt="Woman wearing VR glasses"
        headline="Unsere Ziele sind klar"
        description="Innovative VR/AR Lehr-Lern-Designs entwickeln, technische Möglichkeiten im Musikunterricht aufzeigen und eine breite Anwendung durch Partnerschaften sicherstellen."
        linkTo="/projekt"
        button="Erfahre mehr"
        $objectPosition="30%"
      />
      <TextBild
        imgSrc={ImageBrille}
        imgAlt="VR glasses and controller"
        headline="Neue Wege im Musikunterricht"
        description="Wir analysieren Einsatzmöglichkeiten von VR/AR im Musikunterricht, konzipieren Lehr-Lern-Designs und evaluieren kontinuierlich unter Berücksichtigung der User Experience."
        linkTo="/forschung"
        button="Erfahre mehr"
        $objectPosition="30%"
      />
      <BildText
        imgSrc={ImageTablet}
        imgAlt="Tablet with sketch"
        headline="Lehrkräftefortbildungen"
        description="Das Team von LEVIKO XR bietet Workshops und Fortbildungen in ganz Deutschland an. Wir freuen uns, dich an einem der Termine kennenzulernen."
        linkTo="/termine"
        button="Kommende Veranstaltungen"
        $objectPosition="30%"
      />
      <Headline>Institutionen</Headline>
      <ParallaxSection ref={refOne} className="sticky-section">
        <Institutionen
          imgSrc={Michael}
          imgAlt="Profilbild Michael Oehler"
          logoOneSrc={LogoOsnaGrau}
          logoOneAlt="Osnabrück Logo"
          logoTwoSrc={MTDMLWhite}
          logoTwoAlt="MTDML Logo"
          headline={
            <>
              <span>Verbundkoordination</span>
              <br />
              <span>Prof. Dr. Michael Oehler</span>
            </>
          }
          description="Universität Osnabrück Institut für Musikwissenschaft und Musikpädagogik Music Technology & Digital Musicology Lab (MTDML)"
          linkTo="mailto:michael.oehler@uos.de"
          button="E-Mail"
          $objectPosition="30%"
          $buttonVariant="secondary"
          $logoHeight="40px"
        />
      </ParallaxSection>
      <ParallaxSection ref={refTwo} className="sticky-section">
        <InstitutionenWhite
          imgSrc={Phil}
          imgAlt="Profilbild Philipp Ahner"
          logoOneSrc={!isDarkModeOn ? LogoTros : LogoTrosWithBackground}
          logoOneAlt="Logo Trossingen"
          logoTwoSrc=""
          logoTwoAlt=""
          headline={
            <>
              <span>Verbundpartner</span>
              <br />
              <span>Prof. Dr. Philipp Ahner</span>
            </>
          }
          description="Staatliche Hochschule für Musik Trossingen Landeszentrum MUSIK–DESIGN–PERFORMANCE"
          linkTo="mailto:p.ahner@doz.hfm-trossingen.de"
          button="E-Mail"
          $objectPosition="30%"
          $logoHeight="60px"
        />
      </ParallaxSection>
      <ParallaxSection ref={refThree} className="sticky-section">
        <Institutionen
          imgSrc={Chris}
          imgAlt="Profilbild Chris Geiger"
          logoOneSrc={MireviWhite}
          logoOneAlt="Mirevi Logo in White"
          logoTwoSrc={HSDWhite}
          logoTwoAlt="HSD Logo in White"
          headline={
            <>
              <span>Verbundpartner</span>
              <br />
              <span>Prof. Dr. Christian Geiger</span>
            </>
          }
          description="Hochschule Düsseldorf MIREVI (Mixed Reality and Visualization)"
          linkTo="mailto:geiger@hs-duesseldorf.de"
          button="E-Mail"
          $objectPosition="30%"
          $buttonVariant="secondary"
          $logoHeight="60px"
        />
      </ParallaxSection>
      <ParallaxSection ref={refFour} className="sticky-section">
        <KontaktTeaser
          headline="Lerne unser Team kennen!"
          descriptionOne="Hinter der Verbundkoordination und den Verbundpartnern steckt ein starkes Team aus wissenschaftlichen MitarbeiterInnen."
          descriptionTwo="Wir sind offen für Anregungen, Feedback und Kooperationsmöglichkeiten und freuen uns darauf, von dir zu hören!"
          linkTo="/team"
          button="Team"
          $buttonVariant="tertiary"
        />
      </ParallaxSection>
      <Headline>Praxispartner</Headline>
      <MarqueePraxispartner />
    </div>
  );
};

export default Startseite;
