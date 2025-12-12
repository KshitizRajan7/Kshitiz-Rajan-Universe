import AndroidHome from "@/components/Android"
// import Portfolio from "@/components/Portfolio"
import SpinningEarthScene from "@/components/SpinningEarthScene"

export default function Home() {
  return (
    // <div className="relative h-screen w-screen overflow-hidden bg-black">
    <div className="relative h-screen w-screen bg-black">
      <div className="relative w-full h-screen">
        <p className="absolute z-50 text-[18px] w-full bottom-1/6 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-orange-300">
          [ Currently under Development.. ]
        </p>
      </div>

      {/* 3D Earth background */}
      <div className="absolute inset-0 z-0">
        <SpinningEarthScene />
      </div>

      {/* Overlay text */}
      {/* <p className="text-white absolute top-1/2 left-1/2 
     transform -translate-x-1/2 -translate-y-1/2 
     text-md  sm:text-2xl font-bold z-20">
        Kshitiz Rajan Universe
      </p> */}

      {/* Menu button */}
      <div className="absolute  inset-0 z-10">
        {/* <Portfolio /> */}
        <AndroidHome />
      </div>
    </div>

  )
}
