export function Banner() {
  return (
    <section className="banner">
      <div className="banner__container">
        <span className="banner__pre-title">Olá, meu nome é</span>
        <div className="banner__title">
          <span>Guilherme Nobres.</span>
          <span className="banner__title-destaque">
            Desenvolvedor Back-End.
          </span>
        </div>
      </div>
      <div className="banner__text">
        Construo sistemas distribuídos, APIs escaláveis e bancos de dados
        resilientes. Escrevo código que funciona de forma invisível, mas é
        inesquecível quando falha. Precisão e performance em cada requisição.
      </div>

      <div className="banner__buttons">
        <a href="" className="banner__button type1"> Entrar em Contato</a>
        <a href="" className="banner__button type2"> Ver Projetos</a>
      </div>
    </section>
  );
}
