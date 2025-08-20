'use client'
import dynamic from "next/dynamic";
import SpinningEarthScene from "./components/SpinningEarthScene";
// const SpinningEarthScene = dynamic(
//   () => import("./components/SpinningEarthScene"),
//   { ssr: false } // 👈 disable SSR for R3F
// );
export default function Home() {
  return (
    <div>
      <h1 className="text-center font-bold absolute top-5 left-5 text-white mx-auto">Kshitiz Rajan Universe</h1>
      <SpinningEarthScene />
    </div>
  )
}
