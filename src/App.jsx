import ChipsInput from "./ChipsInput"
import './App.css'
import Cart from "./Cart"
import Note from "./Note"
const App = () => {
  return (
    <div>
      <ChipsInput></ChipsInput>
      <hr />
      <Note></Note>
      <hr />
      <Cart></Cart>
    </div>
  )
}

export default App
