import { DanaTheme } from '@dana-theme';
import { faker } from '@faker-js/faker';
import { render, screen } from '@testing-library/react';

import { Header } from './Header';

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUsedNavigate,
}));

describe('Header component tests', () => {
    it('it renders the given name in the header', () => {
        const name = faker.name.firstName();
        render(
            <DanaTheme>
                <Header name={name} />
            </DanaTheme>
        );
        expect(screen.getByText(`${name}`)).toBeInTheDocument();
        expect(
            screen.getByRole('heading', { name: `${name}` })
        ).toBeInTheDocument();
    });
});
