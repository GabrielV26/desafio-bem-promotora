import React from 'react';

function Convenio({ value, onChange }) {
  return (
    <div>
      <h2>Qual seu convênio?</h2>
      <label>
        <input
          type="radio"
          name="convenio"
          value="INSS"
          checked={value === 'INSS'}
          onChange={() => onChange('INSS')}
        />
        INSS
      </label>
      <label>
        <input
          type="radio"
          name="convenio"
          value="SIAPE"
          checked={value === 'SIAPE'}
          onChange={() => onChange('SIAPE')}
        />
        SIAPE
      </label>
      <label>
        <input
          type="radio"
          name="convenio"
          value="Forças Armadas"
          checked={value === 'Forças Armadas'}
          onChange={() => onChange('Forças Armadas')}
        />
        Forças Armadas
      </label>
      <label>
        <input
          type="radio"
          name="convenio"
          value="Outros"
          checked={value === 'Outros'}
          onChange={() => onChange('Outros')}
        />
        Outros
      </label>
    </div>
  );
}

export default Convenio;
