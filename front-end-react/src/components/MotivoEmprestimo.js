import React from 'react';

function MotivoEmprestimo({ value, onChange }) {
  return (
    <div>
      <h2>Por que você realizou o empréstimo?</h2>
      <label>
        <input
          type="radio"
          name="motivoEmprestimo"
          value="Pagar contas"
          checked={value === 'Pagar contas'}
          onChange={() => onChange('Pagar contas')}
        />
        Pagar contas
      </label>
      <label>
        <input
          type="radio"
          name="motivoEmprestimo"
          value="Reforma da Casa"
          checked={value === 'Reforma da Casa'}
          onChange={() => onChange('Reforma da Casa')}
        />
        Reforma da Casa
      </label>
      <label>
        <input
          type="radio"
          name="motivoEmprestimo"
          value="Compra de Carro"
          checked={value === 'Compra de Carro'}
          onChange={() => onChange('Compra de Carro')}
        />
        Compra de Carro
      </label>
      <label>
        <input
          type="radio"
          name="motivoEmprestimo"
          value="Outras"
          checked={value === 'Outras'}
          onChange={() => onChange('Outras')}
        />
        Outras
      </label>
    </div>
  );
}

export default MotivoEmprestimo;
