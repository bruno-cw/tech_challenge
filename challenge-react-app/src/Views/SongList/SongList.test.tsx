import { render, waitFor } from '@testing-library/react';
import SongList from './SongList';
import { ISongService } from '../../Services/SongService';
import Song from '../../Models/Song';

const mockService : ISongService = {
  getSongs : () => {
    return Promise.resolve([new Song("song 2", "blur", "1999",1,2,4,5,2,6,1,2,6,1,2,8,2,1,2,52,1)])
  }
}

test('renders song list', async () => {
  const {findByText} = render(<SongList songService={mockService} />);
  const songElement = await waitFor(() => findByText('song 2'));
  expect(songElement).toBeInTheDocument();
  const artistElement = await waitFor(() => findByText('blur'));
  expect(artistElement).toBeInTheDocument();

});
