import { FlipWords } from "./FlipWords"

const HeroText = () => {
  return (
    <div className="z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text">
        {/*DesktopView */}
        <div className="flex-col hidden md:flex c-space" >
          <h1 className="text-4xl font-medium">Hi I am Eduardo</h1> 
          <div className="flex flex-col items-start">
            <p className="text-5xl font-medium text-neutral-300" >An Architect dedicated to model electrical BIM</p>
<div><FlipWords words={["BIM", "Electrical", "Systems"]} className="font-black text-white" /></div>
            <p className="text-4xl font-medium text-neutral-300" >Electrical Solutions</p>

            </div> 
        </div>
        {/*Mobile View*/}
      
    </div>
  )
}

export default HeroText
