import Portfolio from "@/components/Portfolio"
// import SpinningEarthScene from "@/components/SpinningEarthScene"

export default function Home() {
  return (
    <div className="relative h-screen w-screen overflow-hidden bg-black">
      {/* 3D Earth background */}
      <div className="absolute inset-0">
        <SpinningEarthScene /> 
      </div>

      {/* Overlay text */}
      <p className="text-white absolute top-1/2 left-1/2 
     transform -translate-x-1/2 -translate-y-1/2 
     text-md  sm:text-2xl font-bold z-20">
        Kshitiz Rajan Universe
      </p>

      {/* Menu button */}
      <div className="absolute z-20">
        <Portfolio />
      </div>
    </div>

  )
}
