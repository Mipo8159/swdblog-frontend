import {QueryClient, QueryClientProvider} from "@tanstack/react-query"
import AppRouter from "components/router/AppRouter"
import "styles/main.scss"

const queryClient = new QueryClient()

const App: React.FC = function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppRouter />
    </QueryClientProvider>
  )
}

export default App
