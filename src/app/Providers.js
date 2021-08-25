import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ThemeProvider } from 'features/theme/state/ThemeContext';
import { UserProvider } from 'features/user/state/UserContext';

const client = new QueryClient();

const Providers = ({ children }) => {
  return (
    <QueryClientProvider client={client}>
      <ThemeProvider>
        <UserProvider>{children}</UserProvider>
      </ThemeProvider>
      {/* react query devtools */}
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};

export default Providers;
