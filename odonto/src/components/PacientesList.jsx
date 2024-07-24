import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PacientesList = ({ onEdit, onDelete }) => {
  const [pacientes, setPacientes] = useState([]);

  useEffect(() => {
    const fetchPacientes = async () => {
      try {
        const response = await axios.get('https://localhost:8080/pacientes/lista');
        setPacientes(response.data);
      } catch (error) {
        console.error('Error fetching pacientes:', error);
      }
    };
    fetchPacientes();
  }, []);

  return (
    <div>
      <h2>Lista de Pacientes</h2>
      <ul>
        {pacientes.map(paciente => (
          <li key={paciente.id}>
            {paciente.nombre} {paciente.apellido}
            <button onClick={() => onEdit(paciente)}>Editar</button>
            <button onClick={() => onDelete(paciente)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PacientesList;
