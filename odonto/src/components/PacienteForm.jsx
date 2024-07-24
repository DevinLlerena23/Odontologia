import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PacienteForm = ({ paciente, onSave }) => {
  const [formData, setFormData] = useState({
    id: '',
    nombre: '',
    apellido: '',
    correo:'',
    genero:'',
    fechade_nacimiento:'',
    telefono:''
  });

  useEffect(() => {
    if (paciente) {
      setFormData(paciente);
    }
  }, [paciente]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (formData.id) {
        await axios.put('https://localhost:8080/pacientes/update', formData);
      } else {
        await axios.post('https://localhost:8080/pacientes/save', formData);
      }
      onSave();
    } catch (error) {
      console.error('Error saving paciente:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="nombre"
        value={formData.nombre}
        onChange={handleChange}
        placeholder="Nombre"
        required
      />
      <input
        type="text"
        name="apellido"
        value={formData.apellido}
        onChange={handleChange}
        placeholder="Apellido"
        required
      />
      <input
        type="text"
        name="correo"
        value={formData.correo}
        onChange={handleChange}
        placeholder="correo"
        required
      />
      <input
        type="text"
        name="genero"
        value={formData.genero}
        onChange={handleChange}
        placeholder="genero"
        required
      />
      <input
        type="Date"
        name="fechade_nacimiento"
        value={formData.fechade_nacimiento}
        onChange={handleChange}
        placeholder="fechade_nacimiento"
        required
      />
      <input
        type="text"
        name="telefono"
        value={formData.telefono}
        onChange={handleChange}
        placeholder="telefono"
        required
      />
     
      <button type="submit">Guardar</button>
    </form>
  );
};

export default PacienteForm;
