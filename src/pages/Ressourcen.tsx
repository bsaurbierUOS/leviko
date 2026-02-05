import { useRef } from "react";
import { useStickyScroll } from "../Components/customHooks/useStickyScroll";
import { Headline } from "../Components/UI/Headline.styled";
import { SubHeadline } from "../Components/UI/SubHeadline.styled";
import HeroProjekt from "../Components/Hero/HeroProjekt.tsx";
import LinkBoxL from "../Components/InfoText/LinkboxL.tsx";
import LinkBoxR from "../Components/InfoText/LinkboxR.tsx";
import ImageManWithHMD from "../assets/images/Mann_mit_VRBrille_und_roten_Pulli.webp";
import leitfaden from "../assets/images/LEVIKO_Leitfaden.webp";
import Icon_add_post from "../assets/images/undraw_add-post_prex.png"
import Icon_blog_post from "../assets/images/undraw_blog-post_f68f.png"
import Icon_online_collaboration from "../assets/images/undraw_online-collaboration_xon8.png"
import Icon_bright_ideas from "../assets/images/undraw_bright-ideas_z7u9.png"
import Icon_education from "../assets/images/undraw_education_3vwh.png"
import Icon_ar from "../assets/images/undraw_augmented-reality_3ie0.png"



const RessourcenPage = () => {
  const refOne = useRef<HTMLDivElement>(null);
  const refTwo = useRef<HTMLDivElement>(null);
  const refThree = useRef<HTMLDivElement>(null);
  const refFour = useRef<HTMLDivElement>(null);

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
	  <HeroProjekt
        $imgSrc={ImageManWithHMD}
        imgAlt="person who plays maestro VR"
        headline="XR im Musikunterricht"
        description="Unsere Handreichung für Lehrkräfte und weitere Ressourcen"
        linkTo="/ressourcen"
        button="Erfahre mehr"
        $objectPosition="center 20%"
      />
	  <Headline>Extended Reality im Musikunterricht.</Headline>
	  <LinkBoxL
		imgSrc={leitfaden}
		imgAlt="Deckblatt Handreichung"
        headline="Unsere Handreichung für Lehrkräfte"
		description="In dieser Broschüre finden Sie alles, was Sie brauchen, um ihren Musikunterricht um die Extended Reality Welt zu erweitern. Die Handreichung enthält drei Lehr-Lern-Designs mit Arbeitsblättern, die im Projekt entwickelt und deutschlandweit in Lehrkräftefortbildungen evaluiert wurden, sowie viele weitere Anwendungen und Anregungen für den Einsatz von XR im Musikunterricht."
		linkTo="https://lernen.digital/wissen-und-formate/publikationen/?article=ca959770-f846-11f0-a14c-9eac6ef72815"
		button="Handreichung"
      />
	  <Headline>Links und Ressourcen:</Headline>
	  <SubHeadline>Die folgenden Links und Angaben beziehen sich auf die in der Handreichung für Lehrkräfte angegebenen Links und Ressourcen.</SubHeadline>
	  <LinkBoxL
	    imgSrc={Icon_add_post}
		imgAlt="Symbolbild"
        headline="Unsere Publikationen"
		description="Wissenschaftliche Beiträge aus dem Projekt zum Thema XR im Musikunterricht:"
		linkTo="/publikationen"
		button="Publikationen"
      />
	  <LinkBoxR
	    imgSrc={Icon_online_collaboration}
		imgAlt="Symbolbild"
        headline="ComPleTT"
		description="Übersicht über alle LEVIKO-XR Materialien auf der Plattform ComPleTT Link: Die Veröffentlichung ist noch in Arbeit und wird bis zum 28. 2. 2026 an dieser Stelle verlinkt."
		linkTo=""
		button="Publikationen"
      />
	  <LinkBoxL
	    imgSrc={Icon_ar}
		imgAlt="Symbolbild"
        headline="How to VR"
		description="Tipps zur Technik, Organisation und Begleitung beim Einsatz von Virtual Reality Brillen. Broschüre des Projekts DigiProSMK. Befindet sich derzeit noch in Veröffentlichung"
		linkTo=""
		button="Publikationen"
      />
	  <LinkBoxR
	    imgSrc={Icon_blog_post}
		imgAlt="Symbolbild"
        headline="Positionspapier"
		description="Gemeinsames XR Positionspapier der Projektverbünde im Kompetenzverbund lernen:digital: Befindet sich derzeit noch in Veröffentlichung"
		linkTo=""
		button="Publikationen"
      />
	  <LinkBoxL
	    imgSrc={Icon_education}
		imgAlt="Symbolbild"
        headline="Die Schule der Zukunft"
		description="Informationen und weiterführende Links aus dem Kompetenzverbund lernen:digital"
		linkTo="https://lernen.digital/zukunftsraum-beitrag/wow-haelt-die-begeisterung-fuer-vr-ar-im-unterricht-in-zukunft-an/"
		button="Artikel"
      />
	  <LinkBoxR
	    imgSrc={Icon_bright_ideas}
		imgAlt="Symbolbild"
        headline="Zukunftsraum"
		description="Bericht im Zukunftsraum Blog zum Start der Projekte LEVIKO-XR und KuMuS-ProNeD"
		linkTo="https://lernen.digital/zukunftsraum-beitrag/extended-music-learning-xr-und-die-zukunft-des-musikunterrichts/"
		button="Blogbeitrag"
      />
	</div>
  );
};

export default RessourcenPage;
