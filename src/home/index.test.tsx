import { render } from '@testing-library/react';

import {HomeComponent} from '.';

describe('home tests', () => {
  it('renders not signed in text when isAuthed is false', () =>{
    render(<HomeComponent />)
  //TODO: write some resolve test. This component doesnt really do much
  });
});