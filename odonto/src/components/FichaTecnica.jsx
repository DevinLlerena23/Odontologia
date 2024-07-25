import { useState, useEffect } from 'react';

const FichaTecnica = () => {
  const [fichas, setFichas] = useState([]);
  const [form, setForm] = useState({ id: null, pacienteId: '', descripcion: '', fecha: '' });
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchFichas();
  }, []);

  const fetchFichas = async () => {
    try {
      const response = await fetch('http://localhost:8080/ficha/lista');
      const data = await response.json();
      setFichas(data);
    } catch (error) {
      console.error('Error fetching fichas', error);
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const options = {
        method: form.id ? 'PUT' : 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      };
      const url = form.id
        ? `http://localhost:8080/ficha/update/${form.id}`
        : 'http://localhost:8080/ficha/save';
      
      await fetch(url, options);
      fetchFichas();
      setIsModalOpen(false);
    } catch (error) {
      console.error('Error saving ficha', error);
    }
  };

  const handleEdit = (ficha) => {
    setForm(ficha);
    setIsModalOpen(true);
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:8080/ficha/del/${id}`, { method: 'DELETE' });
      fetchFichas();
    } catch (error) {
      console.error('Error deleting ficha', error);
    }
  };

  return (
    <div className="container mt-5">
      <h1>Fichas Técnicas</h1>
      <button className="btn btn-primary mb-3" onClick={() => setIsModalOpen(true)}>Agregar Ficha</button>

      <div className="list-group">
        {fichas.map(ficha => (
          <div key={ficha.id} className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <h5>Paciente ID: {ficha.pacienteId}</h5>
              <p>{ficha.descripcion} | {ficha.fecha}</p>
            </div>
            <div>
              <button className="btn btn-warning me-2" onClick={() => handleEdit(ficha)}>Editar</button>
              <button className="btn btn-danger" onClick={() => handleDelete(ficha.id)}>Eliminar</button>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="modal show d-block" tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{form.id ? 'Editar Ficha' : 'Agregar Ficha'}</h5>
                <button type="button" className="btn-close" onClick={() => setIsModalOpen(false)}></button>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="modal-body">
                  <div className="mb-3">
                    <label htmlFor="pacienteId" className="form-label">ID del Paciente</label>
                    <input type="text" id="pacienteId" name="pacienteId" className="form-control" value={form.pacienteId} onChange={handleChange} required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="descripcion" className="form-label">Descripción</label>
                    <input type="text" id="descripcion" name="descripcion" className="form-control" value={form.descripcion} onChange={handleChange} required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="fecha" className="form-label">Fecha</label>
                    <input type="date" id="fecha" name="fecha" className="form-control" value={form.fecha} onChange={handleChange} required />
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" onClick={() => setIsModalOpen(false)}>Cerrar</button>
                  <button type="submit" className="btn btn-primary">Guardar</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FichaTecnica;

