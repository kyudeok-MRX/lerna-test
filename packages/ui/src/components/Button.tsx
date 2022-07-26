import { RGBA } from '@/utils'
import styled from 'styled-components'

type ButtonProps = {
  bgColor?: string
  textColor?: string
}

export const Button = styled.button<ButtonProps>`
  padding: 1rem 1.25rem;
  margin: 0;
  font-size: 1rem;
  color: ${props => props.textColor};
  background-color: ${props => props.bgColor};
  border: 0;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: ${({ bgColor }) => {
      if (!bgColor) return
      
      const rgba = new RGBA(bgColor!)

      rgba.alpha = 0.95

      return rgba.toString()
    }};
  }
`
