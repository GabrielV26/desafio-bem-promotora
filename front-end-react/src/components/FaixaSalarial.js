import React from 'react';

function FaixaSalarial({ value, onChange }) {
  return (
    <div>
      <h2>Qual sua faixa salarial?</h2>
      <label>
        <input
          type="radio"
          name="faixaSalarial"
          value="Até 2 SM"
          checked={value === 'Até 2 SM'}
          onChange={() => onChange('Até 2 SM')}
        />
        Até 2 SM
      </label>
      <label>
        <input
          type="radio"
          name="faixaSalarial"
          value="De 2 a 4 SM"
          checked={value === 'De 2 a 4 SM'}
          onChange={() => onChange('De 2 a 4 SM')}
        />
        De 2 a 4 SM
      </label>
      <label>
        <input
          type="radio"
          name="faixaSalarial"
          value="De 4 a 6 SM"
          checked={value === 'De 4 a 6 SM'}
          onChange={() => onChange('De 4 a 6 SM')}
        />
        De 4 a 6 SM
      </label>
      <label>
        <input
          type="radio"
          name="faixaSalarial"
          value="Acima de 6 SM"
          checked={value === 'Acima de 6 SM'}
          onChange={() => onChange('Acima de 6 SM')}
        />
        Acima de 6 SM
      </label>
    </div>
  );
}

export default FaixaSalarial;
