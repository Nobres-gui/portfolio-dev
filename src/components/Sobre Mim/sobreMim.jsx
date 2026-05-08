export function SobreMim() {
  return (
    <div className="sobreMim" id="about">
      <div className="sobreMim__card1">
        <h2 className="sobreMim__card-title">
          <span className="card__title-destaque">.01</span> Sobre Mim
        </h2>
        <p>
          Sou um desenvolvedor Back-End apaixonado por arquitetura de software e
          sistemas de alta performance. Minha jornada começou quando percebi que
          a verdadeira mágica da internet acontece nos bastidores.
        </p>
        <p>
          Atualmente, meu foco é construir APIs robustas e escaláveis,
          garantindo que os dados fluam com segurança e eficiência. Gosto de
          resolver problemas complexos com soluções simples e elegantes.
        </p>
        <p>
          Quando não estou otimizando queries SQL ou configurando containers no
          Docker, provavelmente estou lendo sobre design de sistemas ou
          contribuindo para projetos open-source.
        </p>
        <div>
          <p>Algumas das tecnologias com as quais trabalho:</p>
          <br />
          <div className="sobreMim__card1-lista">
            <ul>
              <li className="card1__lista-item">Python & Django</li>
              <li className="card1__lista-item">Go</li>
              <li className="card1__lista-item">Redis</li>
            </ul>

            <ul>
              <li className="card1__lista-item">Node.js & Express</li>
              <li className="card1__lista-item">PostgreSQL</li>
              <li className="card1__lista-item">Docker & Kubernetes</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="sobreMim__card2">
        <div className="sobreMim__card2-item">
          <i className="fa-solid fa-server"></i>
          <div>
            <h2>Arquitetura de APIs</h2>
            <span>
              Design RESTful, GraphQL, gRPC e WebSockets com foco em latência
              mínima e alta disponibilidade.
            </span>
          </div>
        </div>
        <div className="sobreMim__card2-item">
          <i className="fa-solid fa-database"></i>
          <div>
            <h2>Bancos de Dados</h2>
            <span>
              Modelagem relacional e NoSQL. Otimização de queries, indexação e
              estratégias de cache eficientes.
            </span>
          </div>
        </div>

        <div className="sobreMim__card2-item">
          <i className="fa-solid fa-code-branch"></i>
          <div>
            <h2>DevOps & Infra</h2>
            <span>
              Containerização, orquestração e pipelines CI/CD automatizados para
              deploys contínuos.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
