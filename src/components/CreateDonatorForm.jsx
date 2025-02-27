
function CreateDonatorForm({ donatore, gruppiSanguigni, onChange, onSubmit}) {

    return (
        <div className="container mt-5">
            <h2 className="text-center">Aggiungi Nuovo Donatore</h2>
            <div className="card shadow-sm p-4">
                <form onSubmit={onSubmit}>
                    

                    <div className="mb-3">
                        <label className="form-label">Nome</label>
                        <input
                            type="text"
                            name="nome"
                            className="form-control"
                            value={donatore.nome}
                            onChange={onChange}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Cognome</label>
                        <input
                            type="text"
                            name="cognome"
                            className="form-control"
                            value={donatore.cognome}
                            onChange={onChange}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Gruppo Sanguigno</label>
                        <select
                            name="gruppoSanguigno"
                            className="form-select"
                            value={donatore.gruppoSanguigno}
                            onChange={onChange}
                            required
                        >
                            <option value="">Seleziona...</option>
                            {gruppiSanguigni.map((gruppo, index) => (
                                <option key={index} value={gruppo}>
                                    {gruppo}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Ultima Donazione</label>
                        <input
                            type="date"
                            name="ultimaDonazione"
                            className="form-control"
                            value={donatore.ultimaDonazione}
                            onChange={onChange}
                            required
                        />
                    </div>

                    <div className="text-center">
                        <button type="submit" className="btn btn-primary">Salva</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CreateDonatorForm;
