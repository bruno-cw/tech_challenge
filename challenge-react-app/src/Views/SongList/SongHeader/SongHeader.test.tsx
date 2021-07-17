import { render, screen } from '@testing-library/react';
import SongHeader from './SongHeader';

test('renders a song header', async () => {
  render(<SongHeader changeSort={()=>{}}/>);
  const songName = screen.getByText(/Song Name/i);
  expect(songName).toBeInTheDocument();

  const artist = screen.getByText(/Artist/i);
  expect(artist).toBeInTheDocument();
});