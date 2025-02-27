import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DonatoriFilter from "../components/DonatoriFIlter";

const apiUrl = import.meta.env.VITE_API_URL;

function DonatorsGridPage() {
    const [donatori, setDonatori] = useState([]);
    const [filters, setFilters] = useState({
        nome: "",
        cognome: "",
        gruppoSanguigno: "",
    });

    const [sortColumn, setSortColumn] = useState(null);
    const [sortOrder, setSortOrder] = useState("asc"); // "asc" o "desc"

    const formatDate = (date) => {
        const formatter = new Intl.DateTimeFormat("it-IT", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
        });
        return formatter.format(new Date(date));
    };

    const getDonatori = () => {
        const { nome, cognome, gruppoSanguigno } = filters;
        let query = `${apiUrl}/donatori?`;

        if (nome) query += `nome=${encodeURIComponent(nome)}&`;
        if (cognome) query += `cognome=${encodeURIComponent(cognome)}&`;
        if (gruppoSanguigno) query += `gruppoSanguigno=${encodeURIComponent(gruppoSanguigno)}&`;

        query = query.slice(0, -1); // Rimuove l'ultimo "&"

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
    }, [filters]);

    const handleFilterChange = (newFilters) => {
        setFilters(newFilters);
    };

    const headers = donatori.length > 0
        ? Object.keys(donatori[0]).filter(key => key.toLowerCase() !== "id")
        : [];

    const formatHeader = key => {
        return key.replace(/([A-Z])/g, " $1").replace(/^./, str => str.toUpperCase());
    };

    const handleSort = (column) => {
        let newOrder = "asc";
        if (sortColumn === column && sortOrder === "asc") {
            newOrder = "desc";
        }
        setSortColumn(column);
        setSortOrder(newOrder);
    };

    const getSortIcon = (column) => {
        if (column !== sortColumn) return null;
        return sortOrder === "asc"
            ? <i className="fa-solid fa-arrow-up ms-2"></i>
            : <i className="fa-solid fa-arrow-down ms-2"></i>;
    };

    const sortedDonatori = [...donatori].sort((a, b) => {
        if (!sortColumn) return 0;

        let aValue = a[sortColumn];
        let bValue = b[sortColumn];

        if (sortColumn === "ultimaDonazione") {
            aValue = new Date(aValue);
            bValue = new Date(bValue);
        }

        if (aValue < bValue) return sortOrder === "asc" ? -1 : 1;
        if (aValue > bValue) return sortOrder === "asc" ? 1 : -1;
        return 0;
    });

    return (
        <main>
            <div className="mx-3 my-5">
                <DonatoriFilter onFilterChange={handleFilterChange} />

                <div className="d-flex mt-5 mx-3">
                    <Link className="btn btn-success" to={`/create`}>+ Aggiungi donatore</Link>
                </div>

                <div className="card shadow-sm border-0 rounded mx-3 my-5">
                    <div className="card-header text-white text-center" style={{ backgroundColor: "#003D73" }}>
                        <h2 className="mb-0">Lista Donatori</h2>
                    </div>
                    <div className="table-responsive">
                        <table className="table table-hover table-bordered mb-0">
                            <thead style={{ backgroundColor: "#003D73", color: "white" }}>
                                <tr>
                                    {headers.map((header, index) => (
                                        <th 
                                            key={index} 
                                            className="text-center text-uppercase p-3" 
                                            style={{ cursor: "pointer" }}
                                            onClick={() => handleSort(header)}
                                        >
                                            {formatHeader(header)} {getSortIcon(header)}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {sortedDonatori.length === 0 ? (
                                    <tr>
                                        <td colSpan={headers.length} className="text-center p-3">
                                            Nessun donatore disponibile.
                                        </td>
                                    </tr>
                                ) : (
                                    sortedDonatori.map((donatore, rowIndex) => (
                                        <tr key={rowIndex}>
                                            {headers.map((key, colIndex) => (
                                                <td key={colIndex} className="text-center text-nowrap p-3">
                                                    {key === "ultimaDonazione"
                                                        ? formatDate(donatore[key])
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
