function Footer() {

    return (
        <footer className="footer">
        <div className="footer-content">
          <p>
            © {new Date().getFullYear()} Kauê Virgolino— Desenvolvedor Full Stack
          </p>

          <div className="footer-links">
            <a
              href="https://wa.me/5583996549087"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>

            <a
              href="https://instagram.com/kauevirgolino"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </div>
        </div>
      </footer>
    );
    
}

export default Footer;