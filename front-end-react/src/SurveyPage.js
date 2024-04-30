import React, { useState } from 'react';
import './surveyStyles.css';
import FaixaEtaria from './components/FaixaIdadeQuestion';
import Convenio from './components/Convenio';
import FaixaSalarial from './components/FaixaSalarial';
import MotivoEmprestimo from './components/MotivoEmprestimo';
import axios from 'axios';


const SurveyPage = () => {
  const [formData, setFormData] = useState({
    faixaIdade: '',
    convenio: '',
    faixaSalarial: '',
    motivoEmprestimo: ''
  });

  const handleFormChange = (fieldName, value) => {
    setFormData({ ...formData, [fieldName]: value });
  };

  const handleSubmit = async () => {
    try {
      // Faça uma solicitação POST para enviar os dados ao servidor
      const response = await axios.post('http://localhost:5000/api/RespostasCliente', formData);
      console.log('Resposta do servidor:', response.data);
    } catch (error) {
      console.error('Erro ao enviar dados:', error);
    }
  };
  

  return (
    <div className="survey-container">
      <h1>Pesquisa de Empréstimo</h1>
      <FaixaEtaria value={formData.faixaIdade} onChange={(value) => handleFormChange('faixaIdade', value)} />
      <Convenio value={formData.convenio} onChange={(value) => handleFormChange('convenio', value)} />
      <FaixaSalarial value={formData.faixaSalarial} onChange={(value) => handleFormChange('faixaSalarial', value)} />
      <MotivoEmprestimo value={formData.motivoEmprestimo} onChange={(value) => handleFormChange('motivoEmprestimo', value)} />
      <button onClick={handleSubmit}>Enviar</button>
    </div>
  );
};

export default SurveyPage;
