import React, { useState } from 'react';
import PacientesList from './PacientesList';
import PacienteForm from './PacienteForm';
import axios from 'axios';
import Navbar from './Navbar'

const Pacientes = () => {
  const [selectedPaciente, setSelectedPaciente] = useState(null);
  const [refresh, setRefresh] = useState(false);

  const handleEdit = (paciente) => {
    setSelectedPaciente(paciente);
  };

  const handleDelete = async (paciente) => {
    try {
      await axios.delete('https://localhost:8080/pacientes/del', { data: paciente });
      setRefresh(!refresh);
    } catch (error) {
      console.error('Error deleting paciente:', error);
    }
  };

  const handleSave = () => {
    setSelectedPaciente(null);
    setRefresh(!refresh);
  };

  return (
    <div>
          <Navbar />
      <PacientesList onEdit={handleEdit} onDelete={handleDelete} />
      <PacienteForm paciente={selectedPaciente} onSave={handleSave} />
    </div>
  );
};

export default Pacientes;