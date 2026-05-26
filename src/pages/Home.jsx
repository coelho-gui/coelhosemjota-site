import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const projects = [
  {
    title: "KOBI",
    kicker: "Branding / Campaign / Architecture",
    image: "/images/projects/kobi.jpg",
    align: "left",
    href: "/projetos/kobi",
  },
  {
    title: "ARTLAB.",
    kicker: "Creative Lab / fourlab.",
    image: "/images/projects/artlab.jpg",
    align: "right",
    href: "#contato",
  },
  {
    title: "BRASILIDADES",
    kicker: "Illustration / Visual Culture",
    image: "/images/projects/brasilidades.jpg",
    align: "left",
    href: "/projetos/brasilidades",
  },
  {
    title: "ARGILA",
    kicker: "Product / Still / Materiality",
    image: "/images/projects/argila.jpg",
    align: "right",
    href: "/projetos/argila",
  },
  {
    title: "PIZZA FUN",
    kicker: "Retail / Fashion / Lifestyle",
    image: "/images/projects/pizza-fun.jpg",
    align: "left",
    href: "/projetos/pizza-fun",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export default function Home() {
  const navigate = useNavigate();
  const [isLeavingLadoB, setIsLeavingLadoB] = useState(false);

  function handleLadoBClick(event) {
    event.preventDefault();
    setIsLeavingLadoB(true);

    setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "auto",
      });

      navigate("/lado-b");
    }, 900);
  }

  return (
    <main className={`site-shell ${isLeavingLadoB ? "is-leaving-lado-b" : ""}`}>
      <div className="grain" />
      <div className={`lado-b-transition ${isLeavingLadoB ? "is-active" : ""}`} />

      <header className="header">
        <a href="#top" className="nav-link brand">
          coelhosemjota
        </a>

        <nav className="nav">
          <a href="#sobre" className="nav-link">
            sobre
          </a>

          <a href="#projetos" className="nav-link">
            projetos
          </a>

          <a href="#contato" className="nav-link">
            contato
          </a>

          <button
            type="button"
            className="nav-link nav-button"
            onClick={handleLadoBClick}
          >
            lado b
          </button>
        </nav>
      </header>

      <section id="top" className="hero-video-section">
        <video
          className="hero-video image-treatment"
          src="/videos/banner.mp4"
          poster="/images/projects/kobi.jpg"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="hero-gradient" />
      </section>

      <section id="sobre" className="about-section">
        <div className="about-grid">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="portrait-card"
          >
            <img
              src="/images/profile/guilherme-coelho.jpg"
              alt="Retrato de Guilherme Coelho"
              className="image-treatment"
            />
            <div className="red-overlay" />
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="about-copy"
          >
            <p className="small-label">sobre*</p>

            <h1 className="pixel-title about-title">
              Creative
              <br />
              Director
            </h1>

            <p className="body-text">
              Designer e diretor criativo em movimento constante entre marca,
              espaço e cultura visual. Crio identidades, campanhas, narrativas e
              experiências que atravessam o digital, o físico e o sensorial,
              sempre buscando transformar estratégia em imagem, conceito em
              presença e projetos em mundos com personalidade própria.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="wide-image-section">
        <img
          src="/images/projects/middle_banner01.jpg"
          alt="Projeto Argila"
          className="image-treatment"
        />
        <div className="dark-overlay" />
      </section>

      <section id="projetos" className="projects-section">
        <div className="section-heading">
          <span>projetos</span>
          <span>creativehub</span>
        </div>

        <div className="project-list">
          {projects.map((project, index) => (
            <motion.a
              key={project.title}
              href={project.href}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.05 }}
              className="project-strip"
            >
              <img
                src={project.image}
                alt={project.title}
                className="image-treatment"
              />

              <div className="project-overlay" />

              <div
                className={`project-text ${
                  project.align === "left" ? "project-left" : "project-right"
                }`}
              >
                <span className="project-kicker">{project.kicker}</span>
                <span className="pixel-title project-title">
                  {project.title}
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      <section className="creative-grid-section">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="creative-card"
        >
          <h2 className="pixel-title big-word">Create</h2>

          <div className="creative-image">
            <img
              src="/images/projects/create01.jpg"
              alt="Create visual"
              className="image-treatment"
            />
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="creative-card creative-card-offset"
        >
          <p className="small-label right-label">creative hub</p>

          <div className="creative-image">
            <img
              src="/images/projects/colors01.jpg"
              alt="Colors visual"
              className="image-treatment"
            />
          </div>

          <h2 className="pixel-title big-word colors-word">Colors</h2>
        </motion.div>
      </section>

      <footer id="contato" className="footer">
        <p>coelhosemjota © creative direction</p>

        <div className="footer-links">
          <a href="mailto:guilherme@coletivobioma.com.br">email</a>

          <a
            href="https://www.instagram.com/coelhosemjota/"
            target="_blank"
            rel="noreferrer"
          >
            instagram
          </a>

          <a href="#top">topo</a>
        </div>
      </footer>
    </main>
  );
}
