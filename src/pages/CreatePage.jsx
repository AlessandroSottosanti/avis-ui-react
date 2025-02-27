import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import CreateDonatorForm from "../components/CreateDonatorForm";

const apiUrl = import.meta.env.VITE_API_URL;

function CreatePage() {
    const navigate = useNavigate();
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
    
        if (!donatore.nome || !donatore.cognome || !donatore.gruppoSanguigno || !donatore.ultimaDonazione) {
            alert("Tutti i campi sono obbligatori!");
            return;
        }
    
        axios.post(`${apiUrl}/donatori`, donatore)
            .then(() => {
                alert("Donatore aggiunto con successo!");
                navigate("/"); // Torna alla lista
            })
            .catch(error => {
                console.error("Errore nell'inserimento:", error);
                alert("Errore nell'inserimento del donatore");
            });
    };
    
    return (
        <main>
            <CreateDonatorForm 
                donatore={donatore}
                gruppiSanguigni={gruppiSanguigni}
                onChange={handleChange}
                onSubmit={handleSubmit}
            />
        </main>
    );
}

export default CreatePage;
