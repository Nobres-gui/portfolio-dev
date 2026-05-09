import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export function Contato() {
  const form = useRef(); 
  const [feedback, setFeedback] = useState({ exibir: false, msg: '', tipo: '' });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID, 
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID, 
      form.current, 
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then(() => {
        setFeedback({ 
          exibir: true, 
          msg: "Mensagem enviada com sucesso! 🚀", 
          tipo: 'sucesso' 
        });
        
        // CORREÇÃO: Resetar usando a referência do React
        if (form.current) form.current.reset(); 

        setTimeout(() => {
          setFeedback({ exibir: false, msg: '', tipo: '' });
        }, 5000);
        
    }, (error) => {
        setFeedback({ 
          exibir: true, 
          msg: "Erro ao enviar. Tente novamente mais tarde.", 
          tipo: 'erro' 
        });
        // MELHORIA: Log de erro apropriado
        console.error("Erro EmailJS:", error.text);
    });
  };

  return (
    <section className="contato" id="contact">
      <span className="container__title-destaque">.04 Qual é o próximo passo?</span>
      <h2 className="contato__container-title">Vamos conversar</h2>
      <span className="contato__container-subtitle">
        Estou sempre aberto a novas oportunidades e desafios técnicos.
      </span>

      <div className="contato__content">
        <div className="contato__content-info">
          <div className="content__info">
            <h2>Informações de Contato</h2>
            <span><i className="fa-solid fa-at"></i> guilhermenobres27@gmail.com</span>
          </div>
          <div className="content__info-icons">
            <h2>Redes Sociais</h2>
            <div className="info__icons">
              <a href="https://github.com" target="_blank" rel="noreferrer"><i className="fa-brands fa-github"></i></a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin"></i></a>
            </div>
          </div>
        </div>

        <form ref={form} onSubmit={sendEmail} className="contato__content-forms">
          <div className="campo">
            <label htmlFor="nome">Nome</label>
            <input type="text" name="user_name" id="nome" placeholder="Seu nome" required />
          </div>

          <div className="campo">
            <label htmlFor="email">E-mail</label>
            <input type="email" name="user_email" id="email" placeholder="seu.email@exemplo.com" required />
          </div>

          <div className="campo">
            <label htmlFor="mensagem">Mensagem</label>
            <textarea name="message" id="mensagem" rows="6" placeholder="Como posso ajudar?" required></textarea>
          </div>

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