import React from "react"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  title: string
  className: string
}

const Button: React.FC<ButtonProps> = ({ className, title, ...props }) => {
  return (
    <button
      className={cn("bg-green-400 text-md text-white py-2 px-4 rounded-lg", className)}
      {...props}
    >
      {title}
    </button>
  )
}

export default Button
