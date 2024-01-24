import React from "react"

const RangeSlider = ({
  startLabel,
  endLabel,
  percentage,
}: {
  startLabel: string
  endLabel: string
  percentage: number
}) => {
  return (
    <div className="my-4 flex w-full flex-col items-center">
      <div className="relative h-[1.4rem] w-full rounded-full bg-neutral-very-dark-blue">
        <div
          className="relative left-[0.25rem] top-[0.25rem] h-[0.9rem] rounded-full bg-gradient-to-r from-primary-gradient-from to-primary-gradient-to"
          style={{ width: `${percentage}%` }}
        />
        <div
          className="absolute top-[0.35rem] -ml-[0.6rem] h-[0.7rem] w-[0.7rem] rounded-full bg-white"
          style={{ left: `${percentage}%` }}
        />
      </div>
      <div className="mt-2 flex w-full justify-between text-xs font-bold leading-normal">
        <span>{startLabel}</span>
        <span>{endLabel}</span>
      </div>
    </div>
  )
}

export default RangeSlider
