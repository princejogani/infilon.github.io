import dynamic from "next/dynamic";
import "../styles/globals.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-multi-carousel/lib/styles.css";
const Navbar = dynamic(() => import("../components/Navbar"), { ssr: false });
// import 'antd/dist/antd.css';
// import Navbar from '../components/Navbar';
import Footer from "../components/Footer";
// import '@fortawesome/fontawesome-svg-core/styles.css';
import ScrollButton from "../components/ScrollTop";
import { Provider } from "react-redux";
import { store } from "../redux/store";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        {/* <Navbar /> */}
        <Component {...pageProps} />
        <Footer />
        {process.env.NODE_ENV !== "production" && (
          <div>
            <b className="devMode">{process.env.NEXT_PUBLIC_MODE}</b>
          </div>
        )}
        <ScrollButton />
      </Provider>
    </>
  );
}

export default MyApp;
