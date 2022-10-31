import Header from "./components/Header/Header";
import Link from "./components/Link/Link";
import Footer from "./components/Footer/Footer";
import Icon from "./components/Icon/Icon";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Link name="Twitter Link" />
      <Link name="Zuri Team" />
      <Link name="Zuri Books" />
      <Link name="Python Books" />
      <Link name="Background Check for Coders" />
      <Link name="Design Books" />

      <Icon />
      <Footer />
    </div>
  );
}

export default App;
