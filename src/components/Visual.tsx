import { twMerge } from "tailwind-merge"
import { ComponentProps } from 'react'

export const Visual = ({ className, ...props }: ComponentProps<'div'>) => {
  return (
    <div className={twMerge('flex flex-row bg-[--surface] w-[35vw] max-w-[300px] min-w-[200px] h-[30vh] max-h-[200px] min-h-[100px] rounded-lg p-4 my-1', className)} {...props}>
      <div className='flex flex-col justify-center'>
      </div>

    </div>
  )
}
