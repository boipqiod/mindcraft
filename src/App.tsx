
import {AppRoutes} from "./routes/AppRoutes";
import {ChakraProvider, extendTheme} from '@chakra-ui/react'
import {AuthProvider} from "./context/AuthProvider";
import {TestProvider} from "./context/TestProvider";

const theme = extendTheme({
    breakpoints:{
        sm: "300px",
        md: "720px",
    },
    styles: {
        global: {
            html: {
                fontSize: '12px',
                backgroundColor: "#d9d9d9",
                width: "100vw",
                display: "flex",
                justifyContent: "center",
                minHeight: "100vh",
            },
        },
    },
});
function App() {
  return (
      <ChakraProvider theme={theme}>
          <TestProvider>
              <AuthProvider>
                  <AppRoutes/>
              </AuthProvider>
          </TestProvider>
      </ChakraProvider>
  );
}

export default App;
