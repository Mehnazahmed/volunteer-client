import { CssBaseline, ThemeProvider } from "@mui/material";
import { QueryClient, QueryClientProvider } from "react-query";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./Routes/Router/Router";
import AuthContextProvider from "./contexts/AuthContextProvider";
import theme from "./theme/theme";
const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <AuthContextProvider>
            <CssBaseline />
            <RouterProvider router={router} />
          </AuthContextProvider>
        </QueryClientProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
