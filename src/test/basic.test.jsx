import { vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import IconButton from '../components/IconButton/IconButton'

describe('IconButton Component', () => {
    const mockIcon = 'https://ejemplo.com/icono.png';
    const mockActionOnclick = vi.fn();
    test('renders icon button with correct icon', () => {
        render(
            <IconButton
                icon={mockIcon}
                actionOnclick={mockActionOnclick}
                />
        );
        const iconImage = screen.getByRole('img');
        // expect(iconImage).toBeInTheDocument();
        expect(iconImage).toHaveAttribute('src', mockIcon);
    });
    test('calls onClick handler when clicked', () => {
        render(
            <IconButton
                icon={mockIcon}
                actionOnclick={mockActionOnclick}
                />
        );
        const button = screen.getByRole('button');
        button.click();
        expect(mockActionOnclick).toHaveBeenCalled();
        });
        test ('has correct className', () => {
            render(
                <IconButton
                icon={mockIcon}
                actionOnclick={mockActionOnclick}
                />
            );
            const button = screen.getByRole('button');
            expect(button).toHaveClass('sc-FEMpB kgwSkM icon-button');
        });
});


