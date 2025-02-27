import { Link } from "react-router-dom";

function HomePage() {
    return (
        <main className="home-container">
            {/* Sezione Call to Action */}
            
            <section className="hero-section rounded">
                <div className="hero-content">
                    <h1>Benvenuti nel gestionale Avis</h1>
                    <p>Gestisci facilmente i tuoi donatori e le donazioni</p>
                    <Link to="/create" className="btn btn-primary">Aggiungi un Donatore</Link>
                </div>
            </section>
           

            {/* Sezione Features */}
            <section className="features">
                <div className="feature-item">
                    <i className="fa-solid fa-users"></i>
                    <h3>Gestione Donatori</h3>
                    <p>Gestisci tutti i dati dei donatori in un unico posto.</p>
                </div>
                <div className="feature-item">
                    <i className="fa-solid fa-hand-holding-heart"></i>
                    <h3>Donazioni</h3>
                    <p>Monitora lo storico delle donazioni effettuate dai donatori.</p>
                </div>
                <div className="feature-item">
                    <i className="fa-solid fa-calendar-check"></i>
                    <h3>Programma Donazioni</h3>
                    <p>Organizza e pianifica la data della prossima donazione.</p>
                </div>
            </section>
           
            <section className="call-to-action">
                <h2>Lista Donatori</h2>
                <p>Visualizza e gestisci facilmente tutti i donatori registrati nel nostro sistema.</p>
                <Link to="/donators" className="btn btn-success">Vai alla Lista Donatori</Link>
            </section>

        </main>
    );
}

export default HomePage;
