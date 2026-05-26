import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const videoIndexes = [2, 16, 17, 20];

const ladoBProjects = Array.from({ length: 28 }, (_, index) => {
  const number = index + 1;
  const paddedNumber = String(number).padStart(3, "0");
  const isVideo = videoIndexes.includes(number);

  return {
    type: isVideo ? "video" : "image",
    src: isVideo
      ? `/videos/lado-b/ladob-${paddedNumber}.mp4`
      : `/images/lado-b/ladob-${paddedNumber}.jpg`,
    alt: `Projeto Lado B ${paddedNumber}`,
  };
});

export default function LadoB() {
  const [activeIndex, setActiveIndex] = useState(null);

  const activeProject =
    activeIndex !== null ? ladoBProjects[activeIndex] : null;

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  }, []);

  useEffect(() => {
    function handleKeyDown(event) {
      if (activeIndex === null) return;

      if (event.key === "Escape") {
        setActiveIndex(null);
      }

      if (event.key === "ArrowRight") {
        goToNext();
      }

      if (event.key === "ArrowLeft") {
        goToPrevious();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex]);

  function goToNext() {
    setActiveIndex((currentIndex) => {
      if (currentIndex === null) return 0;
      return (currentIndex + 1) % ladoBProjects.length;
    });
  }

  function goToPrevious() {
    setActiveIndex((currentIndex) => {
      if (currentIndex === null) return 0;
      return (
        (currentIndex - 1 + ladoBProjects.length) % ladoBProjects.length
      );
    });
  }

  return (
    <main className="lado-b-page">
      <div className="lado-b-vinyl">
        <img src="/images/lado-b/vinyl.png" alt="Disco de vinil girando" />
      </div>

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

        <h1>Projetos antigos, estudos e ideias que nunca foram ao ar.</h1>

        <p>
          O Lado B reúne caminhos que ficaram no processo: propostas não
          aprovadas, estudos visuais, testes de linguagem, arquivos esquecidos e
          ideias que, mesmo sem chegar ao mundo, ainda dizem muito sobre como eu
          penso, erro, tento e construo direção criativa.
        </p>
      </section>

      <section className="lado-b-gallery" aria-label="Galeria Lado B">
        {ladoBProjects.map((project, index) => (
          <button
            key={project.src}
            type="button"
            className="lado-b-gallery-item"
            onClick={() => setActiveIndex(index)}
            aria-label={`Abrir item ${index + 1}`}
          >
            {project.type === "video" ? (
              <video
                src={project.src}
                muted
                loop
                playsInline
                preload="metadata"
              />
            ) : (
              <img src={project.src} alt={project.alt} />
            )}
          </button>
        ))}
      </section>

      {activeProject && (
        <section className="lado-b-lightbox" aria-modal="true" role="dialog">
          <div
            className="lado-b-lightbox-backdrop"
            onClick={() => setActiveIndex(null)}
          />

          <p className="lado-b-lightbox-counter">
            {activeIndex + 1} / {ladoBProjects.length}
          </p>

          <button
            type="button"
            className="lado-b-lightbox-close"
            onClick={() => setActiveIndex(null)}
            aria-label="Fechar"
          >
            ×
          </button>

          <button
            type="button"
            className="lado-b-lightbox-arrow lado-b-lightbox-prev"
            onClick={goToPrevious}
            aria-label="Item anterior"
          >
            ←
          </button>

          <figure className="lado-b-lightbox-content">
            {activeProject.type === "video" ? (
              <video
                src={activeProject.src}
                autoPlay
                muted
                loop
                playsInline
                controls
                aria-label={activeProject.alt}
              />
            ) : (
              <img src={activeProject.src} alt={activeProject.alt} />
            )}
          </figure>

          <button
            type="button"
            className="lado-b-lightbox-arrow lado-b-lightbox-next"
            onClick={goToNext}
            aria-label="Próximo item"
          >
            →
          </button>
        </section>
      )}
    </main>
  );
}
