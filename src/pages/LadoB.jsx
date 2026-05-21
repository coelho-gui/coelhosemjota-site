import React from "react";
import { Link } from "react-router-dom";

const ladoBProjects = [
  {
    title: "ESTUDO 01",
    description: "Exploração visual, teste de linguagem e direção estética.",
    image: "/images/lado-b/lado-b-01.jpg",
  },
  {
    title: "ESTUDO 02",
    description: "Projeto experimental desenvolvido como investigação gráfica.",
    image: "/images/lado-b/lado-b-02.jpg",
  },
  {
    title: "ESTUDO 03",
    description: "Ideia antiga, caminho não publicado ou proposta em construção.",
    image: "/images/lado-b/lado-b-03.jpg",
  },
];

export default function LadoB() {
  return (
    <main className="lado-b-page">
      <header className="lado-b-nav">
        <Link to="/" className="lado-b-brand">
          coelhosemjota
        </Link>

        <nav className="lado-b-menu">
          <Link to="/">home</Link>
          <a href="mailto:guilherme@coletivobioma.com.br">contato</a>
        </nav>
      </header>

      <section className="lado-b-hero">
        <p className="lado-b-kicker">lado b*</p>

        <h1>
          Projetos antigos, estudos e ideias que nunca foram ao ar.
        </h1>

        <p>
          O Lado B reúne caminhos que ficaram no processo: propostas não
          aprovadas, estudos visuais, testes de linguagem, arquivos esquecidos e
          ideias que, mesmo sem chegar ao mundo, ainda dizem muito sobre como eu
          penso, erro, tento e construo direção criativa.
        </p>
      </section>

      <section className="lado-b-projects">
        {ladoBProjects.map((project, index) => (
          <article className="lado-b-card" key={index}>
            <div className="lado-b-card-image">
              <img src={project.image} alt={project.title} />
            </div>

            <div className="lado-b-card-copy">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
