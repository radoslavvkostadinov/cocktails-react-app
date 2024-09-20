import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import BestOfTheBar from './components/BestOfTheBar/BestOfTheBar';


describe('App Component', () => {

  test('renders Home component for / route', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    screen.debug();
    const headingElement = screen.findByRole('heading', { level: 1, name: /Best Of The Bar/i });
    expect(headingElement).toBeInTheDocument();
  });


  // test('renders div with specific class names', async () => {
  //   render(<BestOfTheBar />);
  //   const divElement = await screen.getByTestId('indigo-div');
  //   expect(divElement).toHaveClass('bg-indigo-950');
  // });

  test('renders div with specific class names', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    const divElement = screen.getByTestId('indigo-div');
    expect(divElement).toHaveClass('bg-indigo-950');
  });

  test('renders About component for /about route', () => {
    render(
      <MemoryRouter initialEntries={['/about']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByRole('heading', { level: 1, name: /About us/i })).toBeInTheDocument();
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

  test('renders RandomDrink component for /random route', () => {
    render(
      <MemoryRouter initialEntries={['/random']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText(/Bartender's Surprise/i)).toBeInTheDocument();
  });

  test('renders FavoriteDrinks component for /favorites route', () => {
    render(
      <MemoryRouter initialEntries={['/favorites']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText(/Favorite Drinks/i)).toBeInTheDocument();
  });

  test('renders SearchDrinks component for /search route', () => {
    render(
      <MemoryRouter initialEntries={['/search']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByPlaceholderText('Search for drinks...')).toBeInTheDocument();
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