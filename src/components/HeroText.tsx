import { FlipWords } from "./FlipWords"
const words= ["BIM", "Electrical", "Systems"];
const HeroText = () => {
  return (
    <div className="z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text">
        {/*DesktopView */}
        <div className="flex-col hidden md:flex c-space" >
          <h1 className="text-4xl font-medium">Hi I am Eduardo</h1> 
          <div className="flex flex-col items-start">
            <p className="text-5xl font-medium text-neutral-300" >An Architect specialized in modeling</p>
<div><FlipWords words={words} className="font-black text-white text-7xl" /></div>
            <p className="text-4xl font-medium text-neutral-300" >Solutions</p>

            </div> 
        </div>
        {/*Mobile View*/}
      <div className="flex- flex-col space-y-6 md:hidden" >
        <p className="text-4xl font-medium" >Hi </p>
        <div>
          <p className="text-5xl font-black text-neutral-300">Building</p>
          <div><FlipWords words={words} className="font-bold text-white text-7xl"/></div>
          <p className="text-4xl font-black text-neutral-300">Electrical Applications</p>
        </div>
      </div>
    </div>
  )
}

export default HeroText
