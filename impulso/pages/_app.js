import { AuthContextProvider } from "../context/AuthContext";
import "../styles/globals.css";
import { useRouter } from "next/router";
import ProtectedRoute from "../components/ProtectedRoute";

const noAuthRequired = ["/", "/Login", "/SignUp"];

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <AuthContextProvider>
      {noAuthRequired.includes(router.pathname) ? (
        <Component {...pageProps} />
      ) : (
        <ProtectedRoute>
          <Component {...pageProps} />
        </ProtectedRoute>
      )}
    </AuthContextProvider>
  );
}

export default MyApp;
