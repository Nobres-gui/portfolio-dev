import { NavBar } from "./components/NavBar/navbar";
import { Banner } from "./components/Banner/banner";
import { SobreMim } from "./components/Sobre Mim/sobreMim";
import { Projetos } from "./components/Projetos/projetos";
import { Habilidades } from "./components/Habilidades/habilidades";
import { Contato } from "./components/Contato/contato";
import { Footer } from "./components/Footer/footer";
import "./App.css";

import { useEffect } from "react";
import emailjs from "@emailjs/browser";

function App() {
  useEffect(() => {
    // Verifica se NÃO é localhost para evitar gastos desnecessários do plano do EmailJS
    if (window.location.hostname !== "localhost") {
      const notificacaoVisita = {
        to_name: "Guilherme",
        message: "Alguém acabou de acessar seu portfólio na Vercel!",
        time: new Date().toLocaleString(),
        user_agent: navigator.userAgent, // Opcional: para saber o navegador do visitante
      };

      emailjs
        .sendForm(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          form.current,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        )
        .then(() => {
          console.log("Notificação de acesso enviada.");
        })
        .catch((err) => {
          console.error("Falha ao enviar notificação:", err);
        });
    }
  }, []); // O array vazio garante que rode apenas UMA VEZ por acesso

  return (
    <div className="body_page">
      <NavBar className="body__page-navBar" />
      <Banner />
      <SobreMim />
      <Projetos />
      <Habilidades />
      <Contato />
      <Footer />
    </div>
  );
}

export default App;
