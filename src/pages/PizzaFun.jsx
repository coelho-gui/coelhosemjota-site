import React from "react";
import { Link } from "react-router-dom";

const pizzaFunItems = [
  {
    type: "image",
    src: "/images/projects/pizza-fun/pizza-fun-01.jpg",
    alt: "Projeto Pizza Fun 01",
    className: "pizza-full pizza-banner",
  },
  {
    type: "image",
    src: "/images/projects/pizza-fun/pizza-fun-02.jpg",
    alt: "Projeto Pizza Fun 02",
    className: "pizza-third pizza-small-block",
  },
  {
    type: "image",
    src: "/images/projects/pizza-fun/pizza-fun-03.jpg",
    alt: "Projeto Pizza Fun 03",
    className: "pizza-third pizza-small-block",
  },
  {
    type: "image",
    src: "/images/projects/pizza-fun/pizza-fun-04.jpg",
    alt: "Projeto Pizza Fun 04",
    className: "pizza-third pizza-small-block",
  },
  {
    type: "image",
    src: "/images/projects/pizza-fun/pizza-fun-05.jpg",
    alt: "Projeto Pizza Fun 05",
    className: "pizza-half pizza-large-block",
  },
  {
    type: "image",
    src: "/images/projects/pizza-fun/pizza-fun-06.jpg",
    alt: "Projeto Pizza Fun 06",
    className: "pizza-half pizza-large-block",
  },
  {
    type: "video",
    src: "/videos/pizza-fun/pizza-fun-07.mp4",
    alt: "Vídeo Pizza Fun 07",
    className: "pizza-quarter pizza-video-block",
  },
  {
    type: "video",
    src: "/videos/pizza-fun/pizza-fun-08.mp4",
    alt: "Vídeo Pizza Fun 08",
    className: "pizza-quarter pizza-video-block",
  },
  {
    type: "video",
    src: "/videos/pizza-fun/pizza-fun-09.mp4",
    alt: "Vídeo Pizza Fun 09",
    className: "pizza-quarter pizza-video-block",
  },
  {
    type: "video",
    src: "/videos/pizza-fun/pizza-fun-10.mp4",
    alt: "Vídeo Pizza Fun 10",
    className: "pizza-quarter pizza-video-block",
  },
  {
    type: "image",
    src: "/images/projects/pizza-fun/pizza-fun-11.jpg",
    alt: "Projeto Pizza Fun 11",
    className: "pizza-half pizza-bottom-block",
  },
  {
    type: "image",
    src: "/images/projects/pizza-fun/pizza-fun-12.jpg",
    alt: "Projeto Pizza Fun 12",
    className: "pizza-half pizza-bottom-block",
  },
];

export default function PizzaFun() {
  return (
    <main className="project-page">
      <header className="project-header">
        <Link to="/" className="project-back">
          voltar
        </Link>

        <p className="project-kicker">Retail / Fashion / Lifestyle</p>

        <h1 className="project-title">Pizza Fun</h1>

        <p className="project-description">
          Pizza Fun é uma construção visual que aproxima moda, lifestyle e
          espontaneidade. O projeto parte de uma estética jovem, vibrante e
          provocativa, criando uma narrativa de marca que mistura produto,
          comportamento e presença em cena.
        </p>
      </header>

      <section className="project-hero">
  <video
    src="/videos/pizza-fun/pizza-fun-banner.mp4"
    autoPlay
    muted
    loop
    playsInline
    aria-label="Vídeo de abertura do projeto Pizza Fun"
  />
</section>

      <section className="project-content">
        <div>
          <p>Cliente</p>
          <strong>Fila / Pizza Fun</strong>
        </div>

        <div>
          <p>Entrega</p>
          <strong>Direção criativa, campanha, fotografia e conteúdo social</strong>
        </div>

        <div>
          <p>Ano</p>
          <strong>2026</strong>
        </div>
      </section>

      <section className="pizza-gallery-section">
        <div className="pizza-gallery">
          {pizzaFunItems.map((item, index) => (
            <figure
              key={index}
              className={`pizza-gallery-item ${item.className}`}
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
