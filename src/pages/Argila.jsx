import React from "react";
import { Link } from "react-router-dom";

const argilaItems = [
  {
    type: "image",
    src: "/images/projects/argila/argila-01.jpg",
    alt: "Projeto Argila 01",
    className: "argila-full argila-banner",
  },
  {
    type: "video",
    src: "/videos/argila/argila-02.mp4",
    alt: "Vídeo Argila 02",
    className: "argila-short argila-block",
  },
  {
    type: "image",
    src: "/images/projects/argila/argila-03.jpg",
    alt: "Projeto Argila 03",
    className: "argila-long argila-block",
  },
  {
    type: "image",
    src: "/images/projects/argila/argila-04.jpg",
    alt: "Projeto Argila 04",
    className: "argila-long argila-block",
  },
  {
    type: "video",
    src: "/videos/argila/argila-05.mp4",
    alt: "Vídeo Argila 05",
    className: "argila-short argila-block",
  },
  {
    type: "image",
    src: "/images/projects/argila/argila-06.jpg",
    alt: "Projeto Argila 06",
    className: "argila-full argila-banner",
  },
  {
    type: "image",
    src: "/images/projects/argila/argila-07.jpg",
    alt: "Projeto Argila 07",
    className: "argila-half argila-vertical",
  },
  {
    type: "image",
    src: "/images/projects/argila/argila-08.jpg",
    alt: "Projeto Argila 08",
    className: "argila-half argila-vertical",
  },
  {
    type: "image",
    src: "/images/projects/argila/argila-09.jpg",
    alt: "Projeto Argila 09",
    className: "argila-full argila-thin-banner",
  },
];

export default function Argila() {
  return (
    <main className="project-page">
      <header className="project-header">
        <Link to="/" className="project-back">
          voltar
        </Link>

        <p className="project-kicker">Product / Still / Materiality</p>

        <h1 className="project-title">Argila</h1>

        <p className="project-description">
          Argila nasce como um exercício de matéria, silêncio e presença. Um
          projeto visual construído a partir da textura, da luz natural e do
          gesto manual, traduzindo objetos cerâmicos em uma narrativa sensível,
          tátil e contemplativa.
        </p>
      </header>

      <section className="project-hero">
        <img src="/images/projects/argila.jpg" alt="Projeto Argila" />
      </section>

      <section className="project-content">
        <div>
          <p>Cliente</p>
          <strong>Projeto autoral</strong>
        </div>

        <div>
          <p>Entrega</p>
          <strong>Direção criativa, fotografia, produto e materialidade</strong>
        </div>

        <div>
          <p>Ano</p>
          <strong>2026</strong>
        </div>
      </section>

      <section className="argila-gallery-section">
        <div className="argila-gallery">
          {argilaItems.map((item, index) => (
            <figure
              key={index}
              className={`argila-gallery-item ${item.className}`}
            >
              {item.type === "video" ? (
                <video
                  src={item.src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  aria-label={item.alt}
                />
              ) : (
                <img src={item.src} alt={item.alt} />
              )}
            </figure>
          ))}
        </div>
      </section>
    </main>
  );
}
