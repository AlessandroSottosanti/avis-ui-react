

function AppFooter() {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container">
        <div className="row
        ">
          <div className="col-md-6 text-center">
            <h5>Contatti</h5>
            <ul className="list-unstyled">
              <li><a href="tel:+390123456789" className="text-white">Tel: +39 012 345 6789</a></li>
              <li><a href="mailto:info@avis.it" className="text-white">Email: info@avis.it</a></li>
              <li><a href="https://www.avis.it" target="_blank" rel="noopener noreferrer" className="text-white">Sito web: www.avis.it</a></li>
            </ul>
          </div>
          <div className="col-md-6 text-center">
            <h5>Seguici</h5>
            <ul className="list-unstyled">
              <li><a href="https://www.facebook.com/avis" target="_blank" rel="noopener noreferrer" className="text-white">Facebook</a></li>
              <li><a href="https://www.instagram.com/avis" target="_blank" rel="noopener noreferrer" className="text-white">Instagram</a></li>
              <li><a href="https://www.twitter.com/avis" target="_blank" rel="noopener noreferrer" className="text-white">Twitter</a></li>
            </ul>
          </div>
          <div className="col-12 text-center">
            <p className="m-0">© 2025 AVIS. Tutti i diritti riservati.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default AppFooter;
