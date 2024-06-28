import { useState } from "react"
import Record from "./Record"
import { employee } from './Data'
function App() {
  const [count, setCount] = useState(0)
  return (
    <Record employeeData={employee} />
  )
}

export default App
