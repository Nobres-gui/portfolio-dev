import { useState, useEffect } from 'react';

export function NavBar() {
  const [active, setActive] = useState(false);
  
  // 1. Inicializa o estado verificando: LocalStorage -> Preferência do Sistema -> Padrão Dark
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    // Se não houver salvo, checa a preferência do Windows/MacOS/Linux
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // 2. Aplica o tema e salva no LocalStorage sempre que o estado mudar
  useEffect(() => {
    const theme = isDarkMode ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [isDarkMode]);

  // 3. Opcional: Escuta se o usuário mudar o tema do sistema enquanto navega
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => {
      if (!localStorage.getItem('theme')) { // Só muda sozinho se o usuário não tiver escolhido manualmente
        setIsDarkMode(e.matches);
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const toggleMenu = () => setActive(!active);
  const closeMenu = () => setActive(false);
  
  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <nav className="navbar">
      <div className="navbar__name">
        <span className="navbar__name-destaque">&lt;</span>
        <div className="navbar-logo"> Guilherme </div>
        <span className="navbar__name-destaque">/&gt;</span>
      </div>

      <div className={`navbar__hamburger ${active ? 'active' : ''}`} onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      <ul className={`navbar__links ${active ? 'active' : ''}`}>
        <li><a className="navbar__links-item" href="#home" onClick={closeMenu}>Inicio</a></li>
        <li><a className="navbar__links-item" href="#about" onClick={closeMenu}>Sobre</a></li>
        <li><a className="navbar__links-item" href="#projects" onClick={closeMenu}>Projetos</a></li>
        <li><a className="navbar__links-item" href="#habilidades" onClick={closeMenu}>Habilidades</a></li>
        <li><a className="navbar__links-item" href="#contact" onClick={closeMenu}>Contato</a></li>
        
        <li className="navbar__links-item theme-toggle" onClick={toggleTheme} style={{ cursor: 'pointer' }}>
          {isDarkMode ? (
            <i className="fa-regular fa-lightbulb"></i>
          ) : (
            <i className="fa-solid fa-lightbulb"></i>
          )}
        </li>
      </ul>
    </nav>
  );
}
