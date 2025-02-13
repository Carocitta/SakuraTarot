import { render, screen } from '@testing-library/react';
import Form from '../components/Form';

describe('Formulario', () => {
  test('muestra el campo de nombre', () => {
    render(<Form />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });
});