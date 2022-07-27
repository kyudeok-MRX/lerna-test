import { Link, useParams } from 'react-router-dom'
import viteLogo from '@/assets/vite.svg'
import { Button } from '..'

const Sub1 = () => {
  const { id } = useParams<{ id: string }>()

  return (
    <div>
      <Button>This is Button</Button>
      <div>{id}</div>
      <br />
      <img src={viteLogo} />
      <Link to="/">go to Home</Link>
    </div>
  )
}

export const Sub1Router = {
  path: '/Sub1/:id',
  element: Sub1
}