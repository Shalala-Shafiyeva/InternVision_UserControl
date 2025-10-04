import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css';
import Users from './components/user/Users';

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="w-full">
        <div className='cover w-full mx-auto'>
          <Users />
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default App;
