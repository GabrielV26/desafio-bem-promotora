import React from 'react';

function FaixaIdadeQuestion({ value, onChange }) {
  return (
    <div>
      <h2>Qual sua faixa de Idade?</h2>
      <label>
        <input
          type="radio"
          name="faixaIdade"
          value="até30"
          checked={value === 'até30'}
          onChange={() => onChange('até30')}
        />
        Até 30 anos
      </label>
      <label>
        <input
          type="radio"
          name="faixaIdade"
          value="30a50"
          checked={value === '30a50'}
          onChange={() => onChange('30a50')}
        />
        De 30 a 50 anos
      </label>
      <label>
        <input
          type="radio"
          name="faixaIdade"
          value="50a65"
          checked={value === '50a65'}
          onChange={() => onChange('50a65')}
        />
        De 50 a 65 anos
      </label>
      <label>
        <input
          type="radio"
          name="faixaIdade"
          value="acima65"
          checked={value === 'acima65'}
          onChange={() => onChange('acima65')}
        />
        Acima de 65 anos
      </label>
    </div>
  );
}

export default FaixaIdadeQuestion;
