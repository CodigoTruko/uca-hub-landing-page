import style from "./App.module.scss"
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer"
import Landing from "./components/Landing/Landing";
import { Routes, Route } from "react-router-dom";
function App() {


  return (
    <>
      <Header />
      <Routes>
        <Route path="/home" element={
          <main className={style["main-content"]}>
            <Landing/>
          </main>
        }/>

      </Routes>
      <Footer />
    </>
  )
}

export default App
