import Layout from '../componantes/Layout'
import "../styles/index.scss";
import "../styles/header.scss";
import "../styles/boxVideo.scss";
import "../styles/menu.scss";
import "../styles/footer.scss";
import "../styles/info.scss";
import "../styles/pageMenu.scss";
import { Analytics } from '@vercel/analytics/react';
export default function MyApp({ Component, pageProps }) {
  return (
    <><Layout>
      <Component {...pageProps} />
    </Layout><Analytics /></>
  );
}

    // <Layout data={pageProps.data}>
    // <Component {...pageProps} />
    // </Layout>

 



