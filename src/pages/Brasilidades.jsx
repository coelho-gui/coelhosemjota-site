import React from "react";
import { Link } from "react-router-dom";

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
    </main>
  );
}
