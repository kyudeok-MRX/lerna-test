import { Link } from 'react-router-dom'
import viteLogo from '@/assets/vite.svg'
import { Button } from '..'
import { useState } from 'react'

const Home = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h2>This is Home Component</h2>
      <Button onClick={() => setCount(count => count + 1)}>Count is : {count}</Button>
      <img src={viteLogo} />
      <Link to="/Sub1/abc">go to Sub1</Link>
    </div>
  )
}

export const HomeRouter = {
  path: '/',
  element: Home
}