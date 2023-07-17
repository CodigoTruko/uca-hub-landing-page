import { Routes, Route } from "react-router-dom";
import style from "./App.module.scss"
import Landing from "./components/Landing/Landing";
import ContactUs from "./components/Contact Us/ContactUs";

function App() {


  return (
    <main className={style["main-content"]}>
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
    </main>
  )
}

export default App
