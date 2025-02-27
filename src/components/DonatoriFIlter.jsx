import React, { useState } from "react";

function DonatoriFilter({ onFilterChange }) {
    const [nome, setNome] = useState("");
    const [cognome, setCognome] = useState("");
    const [gruppoSanguigno, setGruppoSanguigno] = useState("");

    const handleFilterChange = () => {
        onFilterChange({
            nome,
            cognome,
            gruppoSanguigno,
        });
    };

    const handleResetFilters = () => {
        setNome("");
        setCognome("");
        setGruppoSanguigno("");
        onFilterChange({
            nome: "",
            cognome: "",
            gruppoSanguigno: "",
        });
    };

    console.log(gruppoSanguigno);
    return (
        <div className="card mb-4 shadow-sm border-0 rounded">
            <div className="card-header text-white" style={{ backgroundColor: "#003D73" }}>
                <h5 className="mb-0">Filtra Donatori</h5>
            </div>
            <div className="card-body">
                <div className="row">
                    {/* Filtro per Nome */}
                    <div className="col-md-4 mb-3">
                        <label htmlFor="nome" className="form-label">
                            Nome
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="nome"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            placeholder="Cerca per Nome"
                        />
                    </div>

                    {/* Filtro per Cognome */}
                    <div className="col-md-4 mb-3">
                        <label htmlFor="cognome" className="form-label">
                            Cognome
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="cognome"
                            value={cognome}
                            onChange={(e) => setCognome(e.target.value)}
                            placeholder="Cerca per Cognome"
                        />
                    </div>

                    {/* Filtro per Gruppo Sanguigno */}
                    <div className="col-md-4 mb-3">
                        <label htmlFor="gruppoSanguigno" className="form-label">
                            Gruppo Sanguigno
                        </label>
                        <select
                            className="form-select"
                            id="gruppoSanguigno"
                            value={gruppoSanguigno}
                            onChange={(e) => setGruppoSanguigno(e.target.value)}
                        >
                            <option value="">Seleziona Gruppo</option>
                            <option value="A+">A+</option>
                            <option value="A-">A-</option>
                            <option value="B+">B+</option>
                            <option value="B-">B-</option>
                            <option value="O+">O+</option>
                            <option value="O-">O-</option>
                            <option value="AB+">AB+</option>
                            <option value="AB-">AB-</option>
                        </select>
                    </div>
                </div>

                <div className="row mt-2 mx-1">
                    {/* Bottone per applicare i filtri */}
                    <button
                        className="btn btn-primary col-8"
                        onClick={handleFilterChange}
                    >
                        Applica Filtri
                    </button>
                    <div className="col-1"></div>
                    {/* Bottone per resettare i filtri */}
                    <button
                        className="btn btn-secondary ge-1 col-3"
                        onClick={handleResetFilters}
                    >
                        Resetta Filtri
                    </button>
                </div>

            </div>
        </div>
    );
}

export default DonatoriFilter;
