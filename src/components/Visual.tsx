import { twMerge } from "tailwind-merge"
import { ComponentProps } from 'react'

// Make buttons for each one of these times
export const Visual = ({ className, ...props }: ComponentProps<'button'>) => {
  return (
    <button className={twMerge('flex flex-row bg-[--surface] hover:bg-[--accent] rounded-sm p-4 my-1', className)} {...props}>
      Train Model
    </button>
  )
};

export const BuyScale = ({ className, ...props }: ComponentProps<'button'>) => {
  return (
    <button className={twMerge('flex flex-row bg-[--surface] hover:bg-[--accent] rounded-sm p-4 my-1', className)} {...props}>
      +1 per/click
    </button>
  )
};

export const BuyMulti = ({ className, ...props }: ComponentProps<'button'>) => {
  return (
    <button className={twMerge('flex flex-row bg-[--surface] hover:bg-[--accent] rounded-sm p-4 my-1', className)} {...props}>
      x2 per/click
    </button>
  )
};
