import { useState } from 'react'

// import './index.css';
import { Button } from './components/ui/button';


function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <Button>Secondary</Button> <br /><br />
      <Button variant="destructive" className="bg-green-600">Here</Button> <br /><br />
      <Button variant="secondary">Secondary</Button> <br /><br />
      <Button variant="ghost">Secondary</Button> <br /><br />
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
    </>
  )
}

export default App
