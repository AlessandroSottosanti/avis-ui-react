import axios from "axios";
import { useEffect, useState } from "react";
import DonatoriFilter from "../components/DonatoriFIlter";

const apiUrl = import.meta.env.VITE_API_URL;

function DonatorsGridPage() {
  const [donatori, setDonatori] = useState([]);
  const [filters, setFilters] = useState({
    nome: "",
    cognome: "",
    gruppoSanguigno: "",
  });

  const formatDate = (date) => {
    const formatter = new Intl.DateTimeFormat("it-IT", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
    return formatter.format(new Date(date)); // Formatta la data nel formato italiano
  };

  const getDonatori = () => {
    const { nome, cognome, gruppoSanguigno } = filters;
    let query = `${apiUrl}/donatori?`;

    // Aggiungi i filtri all'URL
    if (nome) query += `nome=${nome}&`;
    if (cognome) query += `cognome=${cognome}&`;
    if (gruppoSanguigno) query += `gruppoSanguigno=${gruppoSanguigno}&`;

    query = query.slice(0, -1); // Rimuovi l'ultimo "&" extra

    console.log(query);
    return axios
      .get(query)
      .then(response => {
        console.log("Dati ricevuti:", response.data);
        setDonatori(response.data);
      })
      .catch(error => {
        console.error("Errore nel recupero dei donatori:", error);
        throw error;
      });
  };

  useEffect(() => {
    getDonatori();
  }, [filters]); // Ricarica i dati ogni volta che i filtri cambiano

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  // Aggiungi il controllo che verifica che donatori non sia vuoto
  const headers = donatori.length > 0 ? Object.keys(donatori[0]) : [];

  // Funzione per formattare i titoli delle colonne da camelCase a "Camel Case"
  const formatHeader = key => {
    return key.replace(/([A-Z])/g, " $1").replace(/^./, str => str.toUpperCase());
  };

  return (
    <main>
      <div className="mx-2 mt-4">
        {/* Sezione Filtri */}
        <DonatoriFilter onFilterChange={handleFilterChange} />

        <div className="card shadow-sm border-0 rounded mx-3 my-5">
          <div className="card-header text-white text-center" style={{ backgroundColor: "#003D73" }}>
            <h2 className="mb-0">Lista Donatori</h2>
          </div>
          <div className="table-responsive">
            <table className="table table-hover table-bordered mb-0">
              <thead style={{ backgroundColor: "#003D73", color: "white" }}>
                <tr>
                  {headers.map((header, index) => (
                    <th key={index} className="text-center text-uppercase p-3">
                      {formatHeader(header)}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {donatori.length === 0 ? (
                  <tr>
                    <td colSpan={headers.length} className="text-center p-3">
                      Nessun donatore disponibile.
                    </td>
                  </tr>
                ) : (
                  donatori.map((donatore, rowIndex) => (
                    <tr key={rowIndex}>
                      {headers.map((key, colIndex) => (
                        <td key={colIndex} className="text-center text-nowrap p-3">
                          {key === "ultimaDonazione"
                            ? formatDate(donatore[key]) // Formatta l'Ultima Donazione
                            : donatore[key]}
                        </td>
                      ))}
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}

export default DonatorsGridPage;
