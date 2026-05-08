export function Contato() {
  return (
    <section className="contato" id="contact">
      <span className="container__title-destaque">
        .04 Qual é o próximo passo?
      </span>
      <h2 className="contato__container-title">Vamos conversar</h2>
      <span className="contato__container-subtitle">
        Estou sempre aberto a novas oportunidades e desafios técnicos. Se você
        tem uma vaga, um projeto ou apenas quer dizer oi, me envie uma mensagem.
      </span>
      <div className="contato__content">
        <div className="contato__content-info">
          <div className="content__info">
            <h2>Informações de Contato</h2>
            <span>
              <i class="fa-solid fa-at"></i> guilhermenobres27@gmail.com
            </span>
          </div>

          <div className="content__info-icons">
            <h2>Redes Socias</h2>
            <div className="info__icons">
              <span>
                <a href="https://github.com/Nobres-gui">
                  <i class="fa-brands fa-github"></i>
                </a>
              </span>
              <span>
                <a href="https://www.linkedin.com/in/guilhermenobres">
                  <i class="fa-brands fa-linkedin"></i>
                </a>
              </span>
            </div>
          </div>
        </div>

        <form className="contato__content-forms">
          <div className="campo">
            <label htmlFor="nome">Nome</label>
            <input type="text" id="nome" placeholder="Seu nome" />
          </div>

          <div className="campo">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              placeholder="seu.email@exemplo.com"
            />
          </div>

          <div className="campo">
            <label htmlFor="mensagem">Mensagem</label>
            <textarea
              id="mensagem"
              rows="6"
              placeholder="Como posso ajudar?"
            ></textarea>
          </div>

          <button type="submit">Enviar Mensagem</button>
        </form>
      </div>
    </section>
  );
}
