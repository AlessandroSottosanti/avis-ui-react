import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import CreateDonatorForm from "../components/CreateDonatorForm";
import { useAlertContext } from "../contexts/AlertContext";

const apiUrl = import.meta.env.VITE_API_URL;

function CreatePage() {
    const navigate = useNavigate();
    const { setError, setMessage } = useAlertContext(); // Usa il contesto per gestire gli alert
    const [donatore, setDonatore] = useState({
        nome: "",
        cognome: "",
        gruppoSanguigno: "",
        ultimaDonazione: "",
    });

    const gruppiSanguigni = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDonatore({ ...donatore, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Controllo campi obbligatori
        if (!donatore.nome || !donatore.cognome || !donatore.gruppoSanguigno || !donatore.ultimaDonazione) {
            setError("Tutti i campi sono obbligatori!");

            // Rimuovi il messaggio di errore dopo 5 secondi
            setTimeout(() => {
                setError(""); 
            }, 5000);
            return;
        }

        // Invio del donatore al server
        axios.post(`${apiUrl}/donatori`, donatore)
            .then(() => {
                setMessage("Donatore aggiunto con successo!");
                navigate("/donators"); // Torna alla lista

                setTimeout(() => {
                    setMessage(""); 
                }, 5000);
            })
            .catch(error => {
                console.error("Errore nell'inserimento:", error);
                setError("Errore nell'inserimento del donatore");

                setTimeout(() => {
                    setError(""); 
                }, 5000);
            });
    };

    return (
        <main>
            <CreateDonatorForm 
                donatore={donatore}
                gruppiSanguigni={gruppiSanguigni}
                onChange={handleChange}
                onSubmit={handleSubmit}
                setError={setError}
                setMessage={setMessage}
            />
        </main>
    );
}

export default CreatePage;
