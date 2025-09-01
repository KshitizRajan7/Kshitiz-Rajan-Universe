import Portfolio from "@/components/Portfolio"

export default function Home() {
  return (
    <div className="bg-black h-screen w-screen">
      <p className="text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-md sm:text-2xl font-bold sm:font-bold ">Kshitiz Rajan Universe</p>
      <Portfolio />
    </div >
  )
}

