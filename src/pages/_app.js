import '../styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { useAuth } from 'utils/auth';

export default function App({ Component, pageProps }) {
  const { isAuthenticated } = useAuth();
  return (
  <>
    <Component {...pageProps} />
  <ToastContainer />
  </>
  )

  
}
