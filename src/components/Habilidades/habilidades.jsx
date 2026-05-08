import { useEffect, useRef, useState } from 'react';

export function Habilidades() {
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="habilidades" id="habilidades" ref={sectionRef}>
      <h2 className={`habilidades__container-title reveal-habilidades ${visible ? 'active' : ''}`}>
        <span className="container__title-destaque">.03</span> Habilidades
      </h2>

      <div className="habilidades__container">
        {/* LINGUAGENS */}
        <div className={`habilidades__container-topicos reveal-habilidades ${visible ? 'active' : ''}`} style={{ transitionDelay: '0.1s' }}>
          <h1>Linguagens</h1>
          <div className="habilidades__progress-bars">
            {[
              { name: "Python", level: "Intermediário", width: "66.66%", icon: "fa-python" },
              { name: "SQL", level: "Intermediário", width: "66.66%", icon: "fa-database" },
              { name: "JavaScript", level: "Intermediário", width: "66.66%", icon: "fa-js" },
              { name: "C", level: "Intermediário", width: "66.66%", icon: "fa-c" }
            ].map((skill, index) => (
              <div className="progress__bar-linguagem" key={index}>
                <div className="progress__linguagem-titulo">
                  <h2><i className={`fa-brands ${skill.icon}`}></i> {skill.name}</h2>
                  <span>{skill.level}</span>
                </div>
                <div className="progress">
                  <div className="progress-bar" style={{ width: visible ? skill.width : "0%" }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FRAMEWORKS */}
        <div className={`habilidades__container-topicos reveal-habilidades ${visible ? 'active' : ''}`} style={{ transitionDelay: '0.2s' }}>
          <h1>Frameworks</h1>
          <div className="habilidades__progress-bars">
            {[
              { name: "Flask", level: "Intermediário", width: "66.66%" },
              { name: "FastAPI", level: "Básico", width: "33.33%" },
              { name: "Django", level: "Básico", width: "33.33%" },
              { name: "Pandas", level: "Básico", width: "50%" }
            ].map((skill, index) => (
              <div className="progress__bar-linguagem" key={index}>
                <div className="progress__linguagem-titulo">
                  <h2><i className="fa-brands fa-python"></i> {skill.name}</h2>
                  <span>{skill.level}</span>
                </div>
                <div className="progress">
                  <div className="progress-bar" style={{ width: visible ? skill.width : "0%" }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* BANCO DE DADOS E BI */}
        <div className={`habilidades__container-topicos reveal-habilidades ${visible ? 'active' : ''}`} style={{ transitionDelay: '0.3s' }}>
          <h1>Bancos de Dados & BI</h1>
          <div className="habilidades__progress-bars">
            {[
              { name: "MySQL", level: "Intermediário", width: "66.66%" },
              { name: "PostgreSQL", level: "Básico", width: "33.33%" },
              { name: "MongoDB", level: "Básico", width: "33.33%" },
              { name: "Power BI", level: "Intermediário", width: "33.33%" }
            ].map((skill, index) => (
              <div className="progress__bar-linguagem" key={index}>
                <div className="progress__linguagem-titulo">
                  <h2><i className="fa-brands fa-python"></i> {skill.name}</h2>
                  <span>{skill.level}</span>
                </div>
                <div className="progress">
                  <div className="progress-bar" style={{ width: visible ? skill.width : "0%" }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CLOUD & VERSIONAMENTO */}
        <div className={`habilidades__container-topicos reveal-habilidades ${visible ? 'active' : ''}`} style={{ transitionDelay: '0.4s' }}>
          <h1>Cloud & Versionamento</h1>
          <div className="habilidades__progress-bars">
            {[
              { name: "Github / GitBash", level: "Intermediário", width: "66.66%" },
              { name: "AWS", level: "Básico", width: "33.33%" },
              { name: "Google Cloud", level: "Básico", width: "33.33%" }
            ].map((skill, index) => (
              <div className="progress__bar-linguagem" key={index}>
                <div className="progress__linguagem-titulo">
                  <h2><i className="fa-brands fa-python"></i> {skill.name}</h2>
                  <span>{skill.level}</span>
                </div>
                <div className="progress">
                  <div className="progress-bar" style={{ width: visible ? skill.width : "0%" }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
