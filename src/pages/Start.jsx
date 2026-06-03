import React from "react";
import { Link } from "react-router-dom";

const startItems = [
  { src: "/images/projects/start/start-01.jpg", alt: "Projeto START 01", className: "start-full start-banner" },
  { src: "/images/projects/start/start-02.jpg", alt: "Projeto START 02", className: "start-short start-block" },
  { src: "/images/projects/start/start-03.jpg", alt: "Projeto START 03", className: "start-long start-block" },
  { src: "/images/projects/start/start-04.jpg", alt: "Projeto START 04", className: "start-third start-small" },
  { src: "/images/projects/start/start-05.jpg", alt: "Projeto START 05", className: "start-third start-small" },
  { src: "/images/projects/start/start-06.jpg", alt: "Projeto START 06", className: "start-third start-small" },
  { src: "/images/projects/start/start-07.jpg", alt: "Projeto START 07", className: "start-big-left" },
  { type: "text", className: "start-text-block" },
  { src: "/images/projects/start/start-08.jpg", alt: "Projeto START 08", className: "start-full start-thin-banner" },
  { src: "/images/projects/start/start-09.jpg", alt: "Projeto START 09", className: "start-full start-wide-photo" },
  { src: "/images/projects/start/start-10.jpg", alt: "Projeto START 10", className: "start-half start-vertical" },
  { src: "/images/projects/start/start-11.jpg", alt: "Projeto START 11", className: "start-half start-vertical" },
  { src: "/images/projects/start/start-12.jpg", alt: "Projeto START 12", className: "start-third start-product" },
  { src: "/images/projects/start/start-13.jpg", alt: "Projeto START 13", className: "start-third start-product" },
  { src: "/images/projects/start/start-14.jpg", alt: "Projeto START 14", className: "start-third start-product" },
];

export default function Start() {
  return (
    <main className="project-page">
      <header className="project-header">
        <Link to="/" className="project-back">
          voltar
        </Link>

        <p className="project-kicker">Identity / Running / Community</p>

        <h1 className="project-title">START</h1>

        <p className="project-description">
          START é um projeto de identidade visual e estamparia criado para o
          lançamento do grupo de corrida da Surf Track. A proposta nasce do
          encontro entre esporte, cidade e comunidade: primeiro, conectando os
          principais pontos de corrida de São José do Rio Preto em camisetas
          ilustradas; depois, evoluindo para uma fase mais humana, colorida e
          coletiva, com corredores diversos, movimento e a presença da FILA como
          patrocinadora do projeto.
        </p>
      </header>

      <section className="project-hero">
        <img src="/images/projects/start/start-01.jpg" alt="Projeto START" />
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
          {startItems.map((item, index) => {
            if (item.type === "text") {
              return (
                <div key={`text-${index}`} className={item.className}>
                  <p>
                    A primeira fase traduz a cidade como mapa afetivo da corrida:
                    pontos de encontro, percursos e símbolos urbanos aparecem nas
                    estampas como uma forma de conectar pessoas pelo movimento. A
                    segunda fase acompanha o amadurecimento do grupo, trazendo mais
                    cor, velocidade e diversidade para celebrar a comunidade que se
                    formou ao longo dos meses.
                  </p>
                </div>
              );
            }

            return (
              <figure key={item.src} className={`start-gallery-item ${item.className}`}>
                <img src={item.src} alt={item.alt} />
              </figure>
            );
          })}
        </div>
      </section>
    </main>
  );
}
