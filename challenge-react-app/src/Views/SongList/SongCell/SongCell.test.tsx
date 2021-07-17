import { render, screen } from '@testing-library/react';
import SongCell from './SongCell';

test('renders a song header', async () => {
  render(<SongCell>Mock Value</SongCell>);
  const songName = screen.getByText(/Mock Value/i);
  expect(songName).toBeInTheDocument();
});