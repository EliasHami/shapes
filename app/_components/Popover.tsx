"use client"
import { Popover } from '@headlessui/react'
import { Shapes } from '@prisma/client'



const Rectangle = ({ rectangle }: { rectangle: Shapes }) => {
  const left = `${rectangle.PositionX}px`
  const top = `${rectangle.PositionY}px`
  const width = `${rectangle.Width}px`
  const height = `${rectangle.Height}px`
  return (
    <Popover className={"absolute border border-black bg-white"} style={{ left, top, width, height }}>
      <Popover.Button className="min-w-full min-h-full">&nbsp;</Popover.Button>

      <Popover.Panel className="w-max text-[40px] font-['Arial'] absolute z-10 overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 border border-black">
        {rectangle.Text}
      </Popover.Panel>
    </Popover>)
}
const Cercle = ({ cercle }: { cercle: Shapes }) => {
  const left = `${cercle.PositionX}px`
  const top = `${cercle.PositionY}px`
  const width = `${cercle.Width}px`
  const height = `${cercle.Width}px`
  return (
    <Popover className={"rounded-full absolute border border-black bg-white"} style={{ left, top, width, height }}>
      <Popover.Button className="min-w-full min-h-full">&nbsp;</Popover.Button>

      <Popover.Panel className="w-max text-[40px] font-['Arial'] absolute z-10 overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 border border-black">
        {cercle.Text}
      </Popover.Panel>
    </Popover>
  )
}

export { Rectangle, Cercle }