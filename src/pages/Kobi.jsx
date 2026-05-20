import React from "react";
import { Link } from "react-router-dom";

const kobiImages = [
  {
    src: "/images/projects/kobi/kobi-01.jpg",
    alt: "Projeto Kobi 01",
    className: "kobi-full",
  },
  {
    src: "/images/projects/kobi/kobi-02.jpg",
    alt: "Projeto Kobi 02",
    className: "kobi-half",
  },
  {
    src: "/images/projects/kobi/kobi-03.jpg",
    alt: "Projeto Kobi 03",
    className: "kobi-half",
  },
  {
    src: "/images/projects/kobi/kobi-04.jpg",
    alt: "Projeto Kobi 04",
    className: "kobi-third",
  },
  {
    src: "/images/projects/kobi/kobi-05.jpg",
    alt: "Projeto Kobi 05",
    className: "kobi-third",
  },
  {
    src: "/images/projects/kobi/kobi-06.jpg",
    alt: "Projeto Kobi 06",
    className: "kobi-third",
  },
];

const kobiBottomImages = [
  {
    src: "/images/projects/kobi/kobi-08.jpg",
    alt: "Projeto Kobi 08",
  },
  {
    src: "/images/projects/kobi/kobi-09.jpg",
    alt: "Projeto Kobi 09",
  },
];

export default function Kobi() {
  return (
    <main className="project-page">
      <header className="project-header">
        <Link to="/" className="project-back">
          voltar
        </Link>

        <p className="project-kicker">Branding / Campaign / Architecture</p>

        <h1 className="project-title">Kobi</h1>

        <p className="project-description">
          Um projeto de identidade e atmosfera visual construído a partir da
          tensão entre presença, luz e memória. Kobi nasce como uma experiência
          de marca que atravessa fotografia, ambientação, direção criativa e
          narrativa visual.
        </p>
      </header>

      <section className="project-hero">
        <img src="/images/projects/kobi.jpg" alt="Projeto Kobi" />
      </section>

      <section className="project-content">
        <div>
          <p>Cliente</p>
          <strong>Kobi Izakaya</strong>
        </div>

        <div>
          <p>Entrega</p>
          <strong>Direção criativa, identidade visual e campanha</strong>
        </div>

        <div>
          <p>Ano</p>
          <strong>2026</strong>
        </div>
      </section>

      <section className="kobi-gallery-section">
        <div className="kobi-gallery">
          {kobiImages.map((image, index) => (
            <figure
              key={index}
              className={`kobi-gallery-item ${image.className}`}
            >
              <img src={image.src} alt={image.alt} />
            </figure>
          ))}
        </div>
      </section>

      <section className="kobi-text-block-full">
        <div className="kobi-text-inner">
          <p className="kobi-text-label">Direção visual / Social film</p>

          <p>
            A direção visual foi construída a partir da tensão entre atmosfera,
            presença e desejo. O filme desenvolvido para as redes sociais de
            Lucas Fernandes traduz a experiência do espaço em uma narrativa
            sensorial, onde luz baixa, recortes de cena, movimento e textura
            criam uma estética íntima, noturna e cinematográfica.
          </p>

          <p>
            Mais do que apresentar um ambiente, a proposta foi construir uma
            percepção: transformar o Kobi em imagem, ritmo e memória. Cada
            enquadramento parte da relação entre corpo, objeto e lugar, criando
            uma linguagem visual que aproxima arquitetura, lifestyle e direção
            criativa em uma mesma narrativa.
          </p>
        </div>
      </section>

      <section className="kobi-gallery-section">
        <div className="kobi-gallery">
          {kobiBottomImages.map((image, index) => (
            <figure key={index} className="kobi-gallery-item kobi-bottom-half">
              <img src={image.src} alt={image.alt} />
            </figure>
          ))}
        </div>
      </section>
    </main>
  );
}
