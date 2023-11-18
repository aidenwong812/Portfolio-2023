import Ubuntu from "../components/ubuntu";
import ReactGA from 'react-ga4';
import Meta from "../components/SEO/Meta";

// const TRACKING_ID = process.env.NEXT_PUBLIC_TRACKING_ID;
const TRACKING_ID = "My Tracking ID";
ReactGA.initialize(TRACKING_ID);

function App() {
  return (
    <>
      <Meta />
      <Ubuntu />
    </>
  )
}

export default App;
