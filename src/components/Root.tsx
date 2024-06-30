import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

export const Root = ({ children, className, ...props }: ComponentProps<'main'>) => {
  return (
    <main 
    className={twMerge(
        'flex flex-col w-full h-full', className)} {...props}>
      {children}
    </main>
  )
}



