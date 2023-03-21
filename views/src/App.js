import Footer from "./components/global/Footer";
import Header from "./components/global/Header";
import Main from "./components/global/Main";

import "./App.css";
const App = () => {
  return (
    <>
      <div className="body">
        <Header />
        <Main />
        <Footer />
      </div>
    </>
  );
};

export default App;
