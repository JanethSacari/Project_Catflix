import '@testing-library/jest-dom';
import { screen, fireEvent } from '@testing-library/dom';

document.body.innerHTML = `
    <button class="main-button">
        <i class="fa-solid fa-play"></i> WATCH NOW
    </button>
`;

test('O botão "WATCH NOW" deve estar na tela', () => {
    const button = screen.getByText(/WATCH NOW/i);
    expect(button).toBeInTheDocument();
});