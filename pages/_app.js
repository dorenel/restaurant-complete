import '../styles/globals.css'
import AppContext from '../components/context.js';
import Layout from '../components/layout.js';

function MyApp({ Component, pageProps }) {
  return (
    <AppContext.Provider value={{isAuthenticated: false, user: null, setUser:()=>{}}}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppContext.Provider>
  );
}

export default MyApp
