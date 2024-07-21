import React from "react"
import Body from "./components/Body"
import Header from "./components/Header"
import Footer from "./components/Footer"

function App() {

  return (
  <>
      <div className="bg-amber-100 h-screen px-6 py-6 flex flex-col gap-5 md:px-10 md:py-7 md:justify-between lg:bg-amber-200 overflow-hidden lg:px:16 lg:py-10">
        <Header/>
        <Body/>
        <Footer/>
      </div>
    </>
  )
}

export default App
