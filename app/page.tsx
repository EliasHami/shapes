import { Cercle, Rectangle } from '@/app/_components/Popover'
import { prisma } from '@/db'



export default async function Home() {
  const rectangles = await prisma.shapes.findMany({
    include: {
      ShapeTypes: true,
    },
    where: {
      FormsTypeId: 2
    }
  })
  const cercles = await prisma.shapes.findMany({
    include: {
      ShapeTypes: true,
    },
    where: {
      FormsTypeId: 1
    }
  })
  return (
    <main className="relative w-[600px] h-[800px] overflow-hidden">
      {rectangles.map((rectangle) => (
        <Rectangle key={rectangle.Id} rectangle={rectangle} />
      ))}
      {cercles.map((cercle) => (
        <Cercle key={cercle.Id} cercle={cercle} />
      ))}
    </main>
  )
}
