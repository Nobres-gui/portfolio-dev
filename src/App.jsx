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
    // Evita rodar em ambiente de desenvolvimento
    if (window.location.hostname !== "localhost" && window.location.hostname !== "127.0.0.1") {
      
      const templateParams = {
        to_name: "Guilherme",
        message: "Alguém acabou de acessar seu portfólio na Vercel!",
        time: new Date().toLocaleString(),
        user_agent: navigator.userAgent,
      };

      emailjs
        .send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          templateParams,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
        .then(() => {
          console.log("Notificação de acesso enviada.");
        })
        .catch((err) => {
          console.error("Erro na notificação de acesso:", err);
        });
    }
  }, []);

  return (
    <div className="body_page">
      <NavBar />
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