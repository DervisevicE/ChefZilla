import React from "react"
import Navbar from "./Components/Navbar/Navbar"
import LandingPage from "./Components/LandingPage/LandingPage"

function App() {
  return (
    <div className="w-[95%] m-auto flex">
      <Navbar />
      {/* <div className="ml-4"> */}
        <LandingPage />
      {/* </div> */}
    </div>
  )
}

export default App
