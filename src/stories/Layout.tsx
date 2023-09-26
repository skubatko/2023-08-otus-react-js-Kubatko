import React from 'react';
import { Header } from './Header';
import './layout.css';

type User = {
  name: string;
};

export const Layout: React.FC = () => {
  const [user, setUser] = React.useState<User>();

  return (
    <article>
      <Header
        user={user}
        onLogin={() => setUser({ name: 'Jane Doe' })}
        onLogout={() => setUser(undefined)}
        onCreateAccount={() => setUser({ name: 'Jane Doe' })}
      />

      <section className={'storybook-layout'}>
        <h2>Title</h2>
      </section>
    </article>
  );
};
