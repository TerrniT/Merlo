import React from "react"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  title: string
  className: string
  icon?: any
}

const Button: React.FC<ButtonProps> = ({ className, icon, title, ...props }) => {
  return (
    <button
      className={cn(
        "bg-green-400 text-md md:whitespace-nowrap text-white text-center py-2 px-4 flex items-center justify-center rounded-lg",
        className,
      )}
      {...props}
    >
      {icon && <img src={icon} alt={title} className='w-6 h-6 rounded-sm object-contain' />}
      <p className='pl-2'>{title}</p>
    </button>
  )
}

export default Button
