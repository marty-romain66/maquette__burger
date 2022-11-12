import Layout from '../componantes/Layout'
import "../styles/index.scss";
import "../styles/header.scss";
import "../styles/boxVideo.scss";
import "../styles/menu.scss";
import "../styles/footer.scss";
import "../styles/info.scss";
import "../styles/pageMenu.scss";


function MyApp({ Component, pageProps }) {
  return (
    <Layout>
    <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
