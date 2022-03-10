import '../styles/globals.css';
import '../styles/style.css';
import 'semantic-ui-css/semantic.min.css'
import Layout from '../components/Header/Layout';

function MyApp({ Component, pageProps }) {
  return <Layout><Component {...pageProps} /></Layout>
}

export default MyApp
