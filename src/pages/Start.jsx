import React from "react";
import { Link } from "react-router-dom";

const startTopImages = [
  {
    src: "/images/projects/start/start-01.jpg",
    alt: "Projeto Start 01",
    className: "start-full start-logo-banner",
  },
  {
  type: "video",
  src: "/videos/start/start-02.mp4",
  alt: "Projeto Start 02",
  className: "start-five start-medium-block",
},
  {
    src: "/images/projects/start/start-03.jpg",
    alt: "Projeto Start 03",
    className: "start-seven start-medium-block",
  },
  {
  type: "video",
  src: "/videos/start/start-04.mp4",
  alt: "Projeto Start 04",
  className: "start-third start-small-block",
},
  {
    src: "/images/projects/start/start-05.jpg",
    alt: "Projeto Start 05",
    className: "start-third start-small-block",
  },
  {
  type: "video",
  src: "/videos/start/start-06.mp4",
  alt: "Projeto Start 06",
  className: "start-third start-small-block",
},
];

const startBottomImages = [
  {
    src: "/images/projects/start/start-08.jpg",
    alt: "Projeto Start 08",
    className: "start-full start-strip",
  },
  {
    src: "/images/projects/start/start-09.jpg",
    alt: "Projeto Start 09",
    className: "start-full start-photo-wide",
  },
  {
    src: "/images/projects/start/start-10.jpg",
    alt: "Projeto Start 10",
    className: "start-half start-photo-tall",
  },
  {
    src: "/images/projects/start/start-11.jpg",
    alt: "Projeto Start 11",
    className: "start-half start-photo-tall",
  },
  {
    src: "/images/projects/start/start-12.jpg",
    alt: "Projeto Start 12",
    className: "start-third start-product",
  },
  {
    src: "/images/projects/start/start-13.jpg",
    alt: "Projeto Start 13",
    className: "start-third start-product",
  },
  {
    src: "/images/projects/start/start-14.jpg",
    alt: "Projeto Start 14",
    className: "start-third start-product",
  },
];

export default function Start() {
  return (
    <main className="project-page">
      <header className="project-header">
        <Link to="/" className="project-back">
          voltar
        </Link>

        <p className="project-kicker">Identity / Running / Community</p>

        <h1 className="project-title">Start</h1>

        <p className="project-description">
          Projeto de identidade visual e estamparia desenvolvido para o
          lançamento do grupo de corrida da Surf Track. A primeira fase conecta
          os principais pontos de corrida de São José do Rio Preto em ilustrações
          aplicadas às camisetas. A segunda fase amplia a narrativa para as
          pessoas: corredores diversos, tênis em movimento, comunidade e energia
          coletiva em uma fase mais colorida, viva e madura do Start.
        </p>
      </header>

      <section className="project-hero">
        <img src="/images/projects/start/start-09.jpg" alt="Projeto Start" />
      </section>

      <section className="project-content">
        <div>
          <p>Cliente</p>
          <strong>Surf Track / Start Running Crew</strong>
        </div>

        <div>
          <p>Entrega</p>
          <strong>Identidade visual, ilustração e estamparia</strong>
        </div>

        <div>
          <p>Ano</p>
          <strong>2026</strong>
        </div>
      </section>

      <section className="start-gallery-section">
        <div className="start-gallery">
          {startTopImages.map((image, index) => (
            <figure
              key={index}
              className={`start-gallery-item ${image.className}`}
            >
              <img src={image.src} alt={image.alt} />
            </figure>
          ))}

          <figure className="start-gallery-item start-big-photo">
            <img src="/images/projects/start/start-07.jpg" alt="Projeto Start 07" />
          </figure>

          <section className="start-text-block">
            <p>
              A primeira fase traduz a cidade como mapa afetivo da corrida:
              pontos de encontro, percursos e símbolos urbanos aparecem nas
              estampas como uma forma de conectar pessoas pelo movimento. A
              segunda fase acompanha o amadurecimento do grupo, trazendo mais
              cor, velocidade e diversidade para celebrar a comunidade que se
              formou ao longo dos meses.
            </p>
          </section>

          {startBottomImages.map((image, index) => (
            <figure
              key={index}
              className={`start-gallery-item ${image.className}`}
            >
              <img src={image.src} alt={image.alt} />
            </figure>
          ))}
        </div>
      </section>
    </main>
  );
}
