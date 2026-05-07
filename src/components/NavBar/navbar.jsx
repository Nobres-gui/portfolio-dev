export function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar__name">
        <span className="navbar__name-destaque">&lt;</span>
        <div className="navbar-logo"> My Portfolio </div>
        <span className="navbar__name-destaque">/&gt;</span>
      </div>
      <ul className="navbar__links">
        <li>
          <a className="navbar__links-item" href="#home">
            Inicio
          </a>
        </li>
        <li>
          <a className="navbar__links-item" href="#about">
            Sobre
          </a>
        </li>
        <li>
          <a className="navbar__links-item" href="#projects">
            Projetos
          </a>
        </li>
        <li>
          <a className="navbar__links-item" href="#contact">
            Habilidades
          </a>
        </li>
        <li>
          <a className="navbar__links-item" href="#contact">
            Contato
          </a>
        </li>
        <li className="navbar__links-item">
            <i className="fa-regular fa-lightbulb"></i>
          {/* <i className="fa-solid fa-lightbulb"></i> */}
        </li>
      </ul>
    </nav>
  );
}
