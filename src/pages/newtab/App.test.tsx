import { SessionContextProvider } from '@supabase/auth-helpers-react';
import { createClient } from '@supabase/supabase-js';
import { render, screen, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import React, { FC } from 'react';
import Newtab from './Newtab';

const HOSTNAME = 'https://supabase.io';

const server = setupServer(
  rest.get(`${HOSTNAME}/rest/v1/bookmarks`, async (req, res, ctx) => {
    console.log('from server');
    return res(ctx.json(results));
  })
);

const Wrapper: FC<{ children: React.ReactNode }> = ({ children }) => {
  const supabaseClient = createClient(HOSTNAME, '123213');
  return (
    <SessionContextProvider supabaseClient={supabaseClient}>
      {children}
    </SessionContextProvider>
  );
};

test('Render app', async () => {
  render(<Newtab />, { wrapper: Wrapper });

  // TODO improve these assertions
  await waitFor(() => {
    expect(screen.getByText('Google')).toBeInTheDocument();
    expect(screen.getByText('Twitter')).toBeInTheDocument();
    expect(screen.getByText('Twitter')).toBeInTheDocument();
  });
});

afterAll(() => {
  server.close();
});

beforeAll(() => {
  server.listen();
});

const results = [
  {
    id: 2,
    title: 'Google',
    url: 'https://google.com',
    favIconUrl: 'https://www.google.com/favicon.ico',
  },
  {
    id: 3,
    title: 'Twitter',
    url: 'https://twitter.com',
    favIconUrl: 'https://abs.twimg.com/favicons/twitter.2.ico',
  },
  {
    id: 7,
    title: 'Turborepo',
    url: 'https://turbo.build/repo',
    favIconUrl: 'https://turbo.build/images/favicon-light/favicon.ico',
  },
];
