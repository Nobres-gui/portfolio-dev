export function SobreMim() {
  return (
    <div className="sobreMim">
      <div className="SobreMim__card1">
        <span className="SobreMim__card-title">
          Sobre Mim
        </span>
        <p>
            Sou um desenvolvedor Back-End apaixonado por arquitetura de software e
          sistemas de alta performance. Minha jornada começou quando percebi que
          a verdadeira mágica da internet acontece nos bastidores.
          </p>
          <p>
            Atualmente, meu foco é construir APIs robustas e escaláveis, garantindo que os
          dados fluam com segurança e eficiência. Gosto de resolver problemas
          complexos com soluções simples e elegantes.
        </p>
        <p>
            Quando não estou otimizando queries SQL ou configurando containers no Docker,
          provavelmente estou lendo sobre design de sistemas ou contribuindo
          para projetos open-source.
        </p>
      </div>

      <div className="SobreMim__card2">
        <p>
          Arquitetura de APIs <br />
          Design RESTful, GraphQL, gRPC e WebSockets com foco
          em latência mínima e alta disponibilidade.

        </p>
        <p>
          Bancos de Dados <br />
          Modelagem relacional e NoSQL. Otimização de queries, indexação e estratégias de
          cache eficientes. 
        </p>
        <p>
          DevOps & Infra <br />
          Containerização, orquestração e pipelines CI/CD automatizados para deploys contínuos.
        </p>
      </div>
    </div>
  );
}
