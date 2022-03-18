import { render } from '@testing-library/react';

import App from '../App';

it('Verifica se o App é renderizado corretamente', () => {
  const { getByText } = render(<App />);
  const title = getByText(/Hello World/i);
  expect(title).toBeInTheDocument();
});
