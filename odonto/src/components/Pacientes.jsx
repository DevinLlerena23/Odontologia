import { useState, useEffect } from 'react';

const Pacientes = () => {
  const [pacientes, setPacientes] = useState([]);
  const [form, setForm] = useState({ id: null, nombre: '', apellido: '', fecha_nacimiento: '', genero: '', telefono: '', correo: '' });
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchPacientes();
  }, []);

  const fetchPacientes = async () => {
    try {
      const response = await fetch('http://localhost:8080/pacientes/lista');
      const data = await response.json();
      setPacientes(data);
    } catch (error) {
      console.error('Error fetching pacientes', error);
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
        ? `http://localhost:8080/pacientes/update/${form.id}`
        : 'http://localhost:8080/pacientes/save';
      
      await fetch(url, options);
      fetchPacientes();
      setIsModalOpen(false);
    } catch (error) {
      console.error('Error saving paciente', error);
    }
  };

  const handleEdit = (paciente) => {
    setForm(paciente);
    setIsModalOpen(true);
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:8080/pacientes/del/${id}`, { method: 'DELETE' });
      fetchPacientes();
    } catch (error) {
      console.error('Error deleting paciente', error);
    }
  };

  return (
    <div className="container mt-5">
      <h1>Pacientes</h1>
      <button className="btn btn-primary mb-3" onClick={() => setIsModalOpen(true)}>Agregar Paciente</button>

      <div className="list-group">
        {pacientes.map(paciente => (
          <div key={paciente.id} className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <h5>{paciente.nombre} {paciente.apellido}</h5>
              <p>{paciente.fecha_nacimiento} | {paciente.genero} | {paciente.telefono} | {paciente.correo}</p>
            </div>
            <div>
              <button className="btn btn-warning me-2" onClick={() => handleEdit(paciente)}>Editar</button>
              <button className="btn btn-danger" onClick={() => handleDelete(paciente.id)}>Eliminar</button>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="modal show d-block" tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{form.id ? 'Editar Paciente' : 'Agregar Paciente'}</h5>
                <button type="button" className="btn-close" onClick={() => setIsModalOpen(false)}></button>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="modal-body">
                  <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre</label>
                    <input type="text" id="nombre" name="nombre" className="form-control" value={form.nombre} onChange={handleChange} required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="apellido" className="form-label">Apellido</label>
                    <input type="text" id="apellido" name="apellido" className="form-control" value={form.apellido} onChange={handleChange} required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="fecha_nacimiento" className="form-label">Fecha de Nacimiento</label>
                    <input type="date" id="fecha_nacimiento" name="fecha_nacimiento" className="form-control" value={form.fecha_nacimiento} onChange={handleChange} required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="genero" className="form-label">Género</label>
                    <input type="text" id="genero" name="genero" className="form-control" value={form.genero} onChange={handleChange} required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="telefono" className="form-label">Teléfono</label>
                    <input type="text" id="telefono" name="telefono" className="form-control" value={form.telefono} onChange={handleChange} required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="correo" className="form-label">Correo</label>
                    <input type="email" id="correo" name="correo" className="form-control" value={form.correo} onChange={handleChange} required />
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" onClick={() => setIsModalOpen(false)}>Cerrar</button>
                  <button type="submit" className="btn btn-primary" >Guardar</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Pacientes;
