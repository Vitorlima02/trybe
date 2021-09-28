import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

describe('Tela de inserção de Email', () => {
  it('verifica se possui um input do tipo "Email"', () => {
    const { getByLabelText } = render(<App />);
    const inputEmail = getByLabelText('Email');
    expect(inputEmail).toBeInTheDocument();
    expect(inputEmail.type).toBe('email');
  });
  
  it('verifica se a aplicação possui dois input`s do tipo button', () => {
    const { getAllByRole } = render(<App />);
    const inputButton = getAllByRole('button');
    expect(inputButton.length).toBe(2);
  });
  
  it('verifica se a aplicação possui um botão de enviar', () => {
    const { getByTestId } = render(<App />);
    const buttonSend = getByTestId('id-send');
    expect(buttonSend).toBeInTheDocument();
    expect(buttonSend.type).toBe('button');
    expect(buttonSend).toHaveValue('Enviar');
  });

  it('Verificando se o botão e o campo email estão funcionando.', () => {
    const { getByTestId, getByLabelText } = render(<App />);
  
    const EMAIL_USER = 'email@email.com';
  
    const textEmail = getByTestId('id-email-user');
    expect(textEmail).toBeInTheDocument();
    expect(textEmail).toHaveTextContent('Valor:');
  
    const btnSend = getByTestId('id-send');
    const inputEmail = getByLabelText('Email');
    fireEvent.change(inputEmail, { target: { value: EMAIL_USER } });
    fireEvent.click(btnSend);
    expect(inputEmail).toHaveValue('');
    expect(textEmail).toHaveTextContent(`Valor: ${EMAIL_USER}`);
  });

}) 
