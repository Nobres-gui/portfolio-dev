import { useEffect, useState } from 'react'; 

export function Footer() {
  const [active, setActive] = useState(false); 

  useEffect(() => {
    const handleScroll = () => {

      const isBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100;
      setActive(isBottom);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <footer className="footer" id='footer'>
      <p>
        Desenvolvido com precisão por
        <span>Guilherme Nobres © 2026</span>
      </p>

      <a className={`btn-topo ${active ? 'show' : ''}`} id='btnVoltar' href="#home">
        <i className="fa-solid fa-up-long"></i>
      </a>
    </footer>
  );
}
