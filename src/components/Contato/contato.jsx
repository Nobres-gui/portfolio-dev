import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export function Contato() {
  const form = useRef(); // Referência para o formulário
  // Estado para a mensagem de feedback (sucesso ou erro)
  const [feedback, setFeedback] = useState({ exibir: false, msg: '', tipo: '' });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID, 
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID, 
      form.current, 
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then((result) => {
        // Define a mensagem de sucesso
        setFeedback({ 
          exibir: true, 
          msg: "Mensagem enviada com sucesso! 🚀", 
          tipo: 'sucesso' 
        });
        
        e.target.reset(); // Limpa os inputs

        // Faz a mensagem sumir após 5 segundos
        setTimeout(() => {
          setFeedback({ exibir: false, msg: '', tipo: '' });
        }, 5000);
        
    }, (error) => {
        // Define a mensagem de erro
        setFeedback({ 
          exibir: true, 
          msg: "Erro ao enviar. Tente novamente mais tarde.", 
          tipo: 'erro' 
        });
        console.log(error.text);
    });
  };

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
              <i className="fa-solid fa-at"></i> guilhermenobres27@gmail.com
            </span>
          </div>

          <div className="content__info-icons">
            <h2>Redes Socias</h2>
            <div className="info__icons">
              <span>
                <a href="https://github.com" target="_blank" rel="noreferrer">
                  <i className="fa-brands fa-github"></i>
                </a>
              </span>
              <span>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </span>
            </div>
          </div>
        </div>

        <form ref={form} onSubmit={sendEmail} className="contato__content-forms">
          <div className="campo">
            <label htmlFor="nome">Nome</label>
            <input 
              type="text" 
              name="user_name" 
              id="nome" 
              placeholder="Seu nome" 
              required 
            />
          </div>

          <div className="campo">
            <label htmlFor="email">E-mail</label>
            <input 
              type="email" 
              name="user_email" 
              id="email" 
              placeholder="seu.email@exemplo.com" 
              required 
            />
          </div>

          <div className="campo">
            <label htmlFor="mensagem">Mensagem</label>
            <textarea
              name="message"
              id="mensagem"
              rows="6"
              placeholder="Como posso ajudar?"
              required
            ></textarea>
          </div>

          {/* Exibição da mensagem sem alert */}
          {feedback.exibir && (
            <span className={`feedback-msg ${feedback.tipo}`}>
              {feedback.msg}
            </span>
          )}

          <button type="submit">Enviar Mensagem</button>
        </form>
      </div>
    </section>
  );
}
