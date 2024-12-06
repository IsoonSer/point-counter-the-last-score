import React from 'react'

interface ButtonProps {
    text: string,
    handler?: any,
    color?: string
}

const Button = ({text, handler, color = 'bg-blue-950'}: ButtonProps) => {
  return (
    <button className={`p-2 ${color} rounded-lg w-full text-white`}>{text}</button>
  )
}

export default Button