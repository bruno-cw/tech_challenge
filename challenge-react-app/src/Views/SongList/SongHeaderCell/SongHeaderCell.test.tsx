import { findByText, fireEvent, render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import SongHeaderCell from './SongHeaderCell';

test('renders a song header cell', async () => {
  render(<SongHeaderCell click={()=>{}} value={"mockValue"} currentField={""} >Mock Value</SongHeaderCell>);
  const element = screen.getByText(/Mock Value/i);
  expect(element).toBeInTheDocument();
});



test('click changes direction and fieldName', async () => {
  let direction = "asc";
  let field = "";

  const changeDirection = (f : string , dir : "asc"|"desc") => {
    direction = dir;
    field = f
  }

  render(<SongHeaderCell click={(field,direction)=> changeDirection(field,direction)} value={"mockValue"} currentField={""}>Mock Value</SongHeaderCell>);
  act( ()=>{
    fireEvent.click(screen.getByText(/Mock Value/i))
  })
  expect(field).toBe("mockValue")
  expect(direction).toBe("asc")
});
