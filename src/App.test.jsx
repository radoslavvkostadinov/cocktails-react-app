import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

describe('App Component', () => {

  test('renders Home component for / route', async () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    const headerElement = await screen.findByRole('heading', { name: /Best Of The Bar/i });
    expect(headerElement).toBeInTheDocument();
  });


  test('renders div in Home with specific class name', async () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    const divElement = await screen.findByTestId('indigo-div');
    expect(divElement).toHaveClass('bg-indigo-950');
  });


  test('renders About component for /about route', () => {
    render(
      <MemoryRouter initialEntries={['/about']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByRole('heading', { level: 1, name: /About us/i })).toBeInTheDocument();

    const paragraphs = screen.getAllByRole('paragraph');
    expect(paragraphs).toHaveLength(3);
  });


  test('renders Categories component for /categories route', () => {
    render(
      <MemoryRouter initialEntries={['/categories']}>
        <App />
      </MemoryRouter>
    );
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBeGreaterThan(0);
  });

  test('renders DrinkDetails component for /drink/:id route', async () => {
    render(
      <MemoryRouter initialEntries={['/drink/15300']}>
        <App />
      </MemoryRouter>
    );
    const headingElement = await screen.findByRole('heading', { level: 1, name: /3-Mile Long Island Iced Tea/i });
    expect(headingElement).toBeInTheDocument();
  });


  test('renders View Recipe button for /random route', async () => {
    render(
      <MemoryRouter initialEntries={['/random']}>
        <App />
      </MemoryRouter>
    );

    const viewRecipeButton = await screen.findByRole('button', { name: /View Recipe/i });
    expect(viewRecipeButton).toBeInTheDocument();
  });


  test('renders FavoriteDrinks component for /favorites route', () => {
    render(
      <MemoryRouter initialEntries={['/favorites']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText(/Favorite Drinks/i)).toBeInTheDocument();
  });


  test('renders SearchDrinks component for /search route', async () => {
    render(
      <MemoryRouter initialEntries={['/search']}>
        <App />
      </MemoryRouter>
    );

    const searchInput = await screen.findByPlaceholderText('Search for drinks...');
    expect(searchInput).toBeInTheDocument();
  });

  test('renders NonAlcoholicDrinks component for /non-alcoholic route', async () => {
    render(
      <MemoryRouter initialEntries={['/non-alcoholic']}>
        <App />
      </MemoryRouter>
    );


    const headingElement = await screen.findByRole('heading', { level: 1, name: /Sober Sips/i });
    expect(headingElement).toBeInTheDocument();
  });

  test('renders PageNotFound component for unknown route', () => {
    render(
      <MemoryRouter initialEntries={['/unknown']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText(/Page Not Found/i)).toBeInTheDocument();
  });
});