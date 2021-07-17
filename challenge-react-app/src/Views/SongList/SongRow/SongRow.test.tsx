import { render, screen } from '@testing-library/react';
import Song from '../../../Models/Song';
import SongRow from './SongRow';

const mockSong : Song = new Song("song 2", "blur", "1999",1,2,4,5,2,6,1,2,6,1,2,8,2,1,2,52,1);

test('renders a song header', async () => {
  render(<SongRow song={mockSong}/>);
  const songName = screen.getByText(/song 2/i);
  expect(songName).toBeInTheDocument();
});