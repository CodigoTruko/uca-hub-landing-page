import style from "./App.module.scss"
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer"
import Landing from "./components/Landing/Landing";

function App() {


  return (
    <>
      <Header />
      <main className={style["main-content"]}>
        <Landing/>
      </main>
      <Footer />
    </>
  )
}

export default App
