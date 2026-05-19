import React from "react";
import { Link } from "react-router-dom";

const brasilidadesImages = [
  {
    src: "/images/projects/brasilidades/brasilidades-01.jpg",
    alt: "Ilustração Brasilidades 01",
    className: "gallery-small",
  },
  {
    src: "/images/projects/brasilidades/brasilidades-02.jpg",
    alt: "Ilustração Brasilidades 02",
    className: "gallery-wide",
  },
  {
    src: "/images/projects/brasilidades/brasilidades-03.jpg",
    alt: "Ilustração Brasilidades 03",
    className: "gallery-wide",
  },
  {
    src: "/images/projects/brasilidades/brasilidades-04.jpg",
    alt: "Ilustração Brasilidades 04",
    className: "gallery-small",
  },
  {
    src: "/images/projects/brasilidades/brasilidades-05.jpg",
    alt: "Ilustração Brasilidades 05",
    className: "gallery-full",
  },
  {
    src: "/images/projects/brasilidades/brasilidades-06.jpg",
    alt: "Ilustração Brasilidades 06",
    className: "gallery-half",
  },
  {
    src: "/images/projects/brasilidades/brasilidades-07.jpg",
    alt: "Ilustração Brasilidades 07",
    className: "gallery-half",
  },
];

export default function Brasilidades() {
  return (
    <main className="project-page">
      <header className="project-header">
        <Link to="/" className="project-back">
          voltar
        </Link>

        <p className="project-kicker">Illustration / Visual Culture</p>

        <h1 className="project-title">Brasilidades</h1>

        <p className="project-description">
          Um projeto visual inspirado nas cores, símbolos, gestos e camadas da
          cultura brasileira. Brasilidades nasce como um exercício de identidade,
          memória e expressão gráfica, aproximando ilustração, estética popular e
          direção criativa em uma linguagem vibrante e contemporânea.
        </p>
      </header>

      <section className="project-hero">
        <img
          src="/images/projects/brasilidades.jpg"
          alt="Projeto Brasilidades"
        />
      </section>

      <section className="project-content">
        <div>
          <p>Cliente</p>
          <strong>Projeto autoral</strong>
        </div>

        <div>
          <p>Entrega</p>
          <strong>Direção criativa, ilustração e identidade visual</strong>
        </div>

        <div>
          <p>Ano</p>
          <strong>2026</strong>
        </div>
      </section>

      <section className="brasilidades-gallery-section">
        <div className="brasilidades-gallery">
          {brasilidadesImages.map((image, index) => (
            <figure
              key={index}
              className={`brasilidades-gallery-item ${image.className}`}
            >
              <img src={image.src} alt={image.alt} />
            </figure>
          ))}
        </div>
      </section>
    </main>
  );
}
