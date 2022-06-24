import '../styles/globals.css'
import '../styles/NavBar.css'
import '../styles/BurguerButton.css'
import '../styles/Login.css'
import { AuthContextProvider } from "../context/AuthContext";
import "../styles/globals.css";
import { useRouter } from "next/router";
import ProtectedRoute from "../components/ProtectedRoute";
import styles from "../styles/Publicaciones.css"
import styles2 from "../styles/VerPublicaciones.css"

const noAuthRequired = ["/", "/Login", "/SignUp", "/LoginPagina"];

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
