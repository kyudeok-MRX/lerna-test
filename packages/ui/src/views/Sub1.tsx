import { Link } from 'react-router-dom'
import viteLogo from '@/assets/vite.svg'
import { Button } from '..'

const Sub1 = () => {
  return (
    <div>
      <Button>This is Button</Button>
      <br />
      <img src={viteLogo} />
      <Link to="/">go to Home</Link>
    </div>
  )
}

export const Sub1Router = {
  path: 'Sub1',
  element: Sub1
}