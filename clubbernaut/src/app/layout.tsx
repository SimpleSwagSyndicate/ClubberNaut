// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import '@mantine/core/styles.css';
import { Header } from '@/components/Header/Header';

import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import { UserInfo } from '@/controllers/UserInfo';

export const metadata = {
  title: 'Clubbernaut',
  description: 'I have followed setup instructions carefully',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <UserInfo>
        <MantineProvider>
          <Header/>
          {children}</MantineProvider>
          </UserInfo>
      </body>
    </html>
  );
}