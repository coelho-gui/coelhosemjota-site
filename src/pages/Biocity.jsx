
import React from "react";
import { Link } from "react-router-dom";

const biocityImages = [
  { src: "/images/projects/biocity/biocity-01.jpg", alt: "BioCity 01", className: "biocity-full" },
  { src: "/images/projects/biocity/biocity-02.jpg", alt: "BioCity 02", className: "biocity-five" },
  { src: "/images/projects/biocity/biocity-03.jpg", alt: "BioCity 03", className: "biocity-seven" },
  { src: "/images/projects/biocity/biocity-04.jpg", alt: "BioCity 04", className: "biocity-third" },
  { src: "/images/projects/biocity/biocity-05.jpg", alt: "BioCity 05", className: "biocity-third" },
  { src: "/images/projects/biocity/biocity-06.jpg", alt: "BioCity 06", className: "biocity-third" },
  { src: "/images/projects/biocity/biocity-07.jpg", alt: "BioCity 07", className: "biocity-half" },
  { src: "/images/projects/biocity/biocity-08.jpg", alt: "BioCity 08", className: "biocity-half" },
  { src: "/images/projects/biocity/biocity-09.jpg", alt: "BioCity 09", className: "biocity-full" },
  { src: "/images/projects/biocity/biocity-10.jpg", alt: "BioCity 10", className: "biocity-full" },
];

function GalleryImage({ image }) {
  return (
    <figure className={`biocity-gallery-item ${image.className}`}>
      <img src={image.src} alt={image.alt} loading="lazy" />
    </figure>
  );
}

export default function Biocity() {
  return (
    <main className="project-page">
      <header className="project-header">
        <Link to="/" className="project-back">voltar</Link>

        <p className="project-kicker">
          Wayfinding / Environmental Design / Architecture
        </p>

        <h1 className="project-title">BioCity Club</h1>

        <p className="project-description">
          Transformar espaço em direção, e direção em experiência.
          Um sistema de sinalização desenvolvido para integrar arquitetura,
          paisagem e orientação em uma linguagem visual contemporânea.
        </p>
      </header>

      <section className="project-hero">
        <img
          src="/images/projects/biocity/biocity-banner.jpg"
          alt="Wayfinding BioCity Club"
        />
      </section>

      <section className="project-content">
        <div>
          <p>Cliente</p>
          <strong>Únicos Incorporadora</strong>
        </div>

        <div>
          <p>Entrega</p>
          <strong>Wayfinding, sinalização e projeto de implantação</strong>
        </div>

        <div>
          <p>Ano</p>
          <strong>2026</strong>
        </div>
      </section>

      <section className="biocity-gallery-section">
        <div className="biocity-gallery">

          {biocityImages.slice(0, 3).map((image) => (
            <GalleryImage key={image.src} image={image} />
          ))}

          <section className="biocity-text-block">
            <span>01 / CONCEITO</span>
            <p>
              Transformar espaço em direção, e direção em experiência.
              Uma linguagem que nasce da própria arquitetura, conectando
              materiais, texturas e informações para tornar os percursos
              mais intuitivos e a circulação mais fluida.
            </p>
          </section>

          {biocityImages.slice(3, 8).map((image) => (
            <GalleryImage key={image.src} image={image} />
          ))}

          <section className="biocity-text-block">
            <span>02 / DESENVOLVIMENTO</span>
            <p>
              Do moodboard ao manual de implantação, cada etapa foi
              desenvolvida para transformar o conceito em um sistema
              aplicável. Totens, placas, pictogramas e direcionais
              foram detalhados com atenção à legibilidade, aos
              materiais e à integração com os espaços.
            </p>
          </section>

          {biocityImages.slice(8).map((image) => (
            <GalleryImage key={image.src} image={image} />
          ))}

        </div>
      </section>
    </main>
  );
}

