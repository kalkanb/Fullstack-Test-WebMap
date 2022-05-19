import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders table', () => {
  const app = render(<App />);
  const tableHeader = app.getByText("List of Locations");
  expect(tableHeader).not.toBeNull();
  expect(tableHeader.parentElement).not.toBeNull();
  
  const table = document.getElementById("location-id");
  expect(table).not.toBeNull();

  expect(table.parentElement).not.toBeNull();
  expect(table.parentElement.parentElement).not.toBeNull();
  expect(table.parentElement.parentElement === tableHeader.parentElement).toBeTruthy();

  expect(table.nodeName).toBe('TABLE');
});
