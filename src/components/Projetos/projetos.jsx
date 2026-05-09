import { useEffect, useRef, useState } from "react";

export function Projetos() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="projetos" id="projects" ref={sectionRef}>
      {/* Título com animação simples */}
      <h2
        className={`projetos__container-title reveal-projetos ${visible ? "active" : ""}`}
      >
        <span className="container__title-destaque">.02</span> Projetos
      </h2>

      <div className="projetos__cards">
        {/* Coluna 1 - Surge Primeiro */}
        <div
          className={`projetos__card-column reveal-projetos ${visible ? "active" : ""}`}
          style={{ transitionDelay: "0.2s" }}
        >
          <div className="projetos__card">
            <div className="projetos__card-icons">
              <i className="fa-solid fa-code-branch"></i>
              <ul className="card__icons-lista">
                <li>
                  <i className="fa-brands fa-github"></i>
                </li>
                <li>
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </li>
              </ul>
            </div>
            <div className="projetos__card-content">
              <h2> EM BREVE </h2>
              <span>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Quibusdam aspernatur autem rerum deleniti beatae maiores
                distinctio reprehenderit necessitatibus commodi excepturi minus
              </span>
              <span>LINGUAGENS E FRAMEWORKS</span>
            </div>
          </div>

          <div className="projetos__card">
            <div className="projetos__card-icons">
              <i className="fa-solid fa-code-branch"></i>
              <ul className="card__icons-lista">
                <li>
                  <i className="fa-brands fa-github"></i>
                </li>
                <li>
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </li>
              </ul>
            </div>
            <div className="projetos__card-content">
              <h2> EM BREVE </h2>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptate eos velit repudiandae optio quidem veniam repellendus!
                Corporis velit pariatur laborum vel, repudiandae deleniti
              </span>
              <span>LINGUAGENS E FRAMEWORKS</span>
            </div>
          </div>
        </div>

        {/* Coluna 2 - Surge com um atraso maior (0.4s) */}
        <div
          className={`projetos__card-column reveal-projetos ${visible ? "active" : ""}`}
          style={{ transitionDelay: "0.4s" }}
        >
          <div className="projetos__card">
            <div className="projetos__card-icons">
              <i className="fa-solid fa-code-branch"></i>
              <ul className="card__icons-lista">
                <li>
                  <i className="fa-brands fa-github"></i>
                </li>
                <li>
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </li>
              </ul>
            </div>
            <div className="projetos__card-content">
              <h2> EM BREVE </h2>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptate eos velit repudiandae optio quidem veniam repellendus!
                Corporis velit pariatur laborum vel, repudiandae deleniti
              </span>
              <span>LINGUAGENS E FRAMEWORKS</span>
            </div>
          </div>

          <div className="projetos__card">
            <div className="projetos__card-icons">
              <i className="fa-solid fa-code-branch"></i>
              <ul className="card__icons-lista">
                <li>
                  <i className="fa-brands fa-github"></i>
                </li>
                <li>
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </li>
              </ul>
            </div>
            <div className="projetos__card-content">
              <h2> EM BREVE </h2>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptate eos velit repudiandae optio quidem veniam repellendus!
                Corporis velit pariatur laborum vel, repudiandae deleniti
              </span>
              <span>LINGUAGENS E FRAMEWORKS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
