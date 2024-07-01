import { twMerge } from "tailwind-merge"
import { ComponentProps } from 'react'

export const Stats = ({ className, ...props }: ComponentProps<'div'>) => {
  return (
    <div className={twMerge('flex flex-col justify-top bg-[--surface] w-[35vw] max-w-[300px] min-w-[200px] h-[30vh] max-h-[200px] min-h-[100px] rounded-lg p-4 mt-3 mb-1', className)} {...props}>        
        <h1 className="text-lg font-bold pb-1">Company Name</h1>
        <h2 className="text-md font-semibold pb-2">Time Open: <span>0</span></h2>
        <p>$<span id="moneyTotal">0</span></p>
        <p><span id="moneyPerSecond">0</span> Per/Sec </p>
    </div>
  )
}
