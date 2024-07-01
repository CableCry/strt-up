import { twMerge } from "tailwind-merge"
import { ComponentProps } from 'react'

export const Stats = ({ className, ...props }: ComponentProps<'div'>) => {
  return (
    <div className={twMerge('flex flex-col justify-top bg-[--surface] w-[35vw] max-w-[300px] min-w-[200px] h-[30vh] max-h-[200px] min-h-[100px] rounded-sm p-2 mt-2 mb-2', className)} {...props}>        
        <h1 className="text-lg font-bold pb-2 text-[--accent]">Company Name</h1>
        <h2 className="text-md font-semibold pb-2  text-[--accent-teal]"> Year <span id="existYears">0</span>, Day <span id="existDays">0</span></h2>
        <p className="text-[--text-secondary]">Total: </p>
        <p className="pl-2">$<span id="moneyTotal">0</span></p>
        <p className="text-[--text-secondary]" >Per/Day: </p>
        <p className="pl-2">$<span id="moneyPerSecond">0</span></p>
    </div>
  )
}
