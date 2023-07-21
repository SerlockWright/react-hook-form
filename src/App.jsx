import React from "react"
import Form from "./components/Form"
import Navigation from "./components/Navigation"

function App() {
  const [users, setUsers] = React.useState([])
  return (
    <>
      <Navigation />
      <Form />
    </>
  )
}

export default App
