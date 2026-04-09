import Cart from "../components/Cart"
import { useRef } from "react";
import { Globe } from "../components/Globe";
import CopyEmailButton from "../components/CopyEmailButton";
import {FrameWorks} from "../components/FrameWorks";

const About = () => {
  const gridToContainer = useRef<HTMLDivElement>(null);
  return <section className="c-space section-spacing">
<h2  className="text-heading">About me</h2>
<div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
    {/* Grid 1 */}
    <div className="flex items-end grid-default-color grid-1">
     <img 
  src="assets/bim.png" 
  alt=""
  className="
    absolute scale-[1] -right-[5rem] -top-[1rem] 
    md:scale-[3] md:left-50 md:inset-y-10 
    lg:left-1/2 lg:-translate-x-1/2 lg:top-1/2 lg:-translate-y-[60%] lg:scale-[1]
  "
/>
      <div className="z-10">
        <p className="headtext">Hi, I'm Eduardo Cancino</p>
        <p className="subtext">
          Over the last four years, I have developed BIM-based 3D models for MEP systems, specializing in electrical modeling and delivering practical solutions for project coordination and construction.
        </p>
      </div>
      <div className="absolute inset-x-0 pointer-evets-none-bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo"></div>
    </div>
    {/* Grid 2 */}
    <div className="grid-default-color grid-2"
          ref={gridToContainer}>
      <div className="flex items-center justify-center w-full h-full">
        <p className="flex-items-end text-5xl text-gray-500">MEP SYSTEMS</p>
        <Cart  style={{ top: "10%", left: "6%"}} text="ELECTRICAL" containerRef={gridToContainer}/>
        <Cart  style={{ top: "70%", left: "33%"}} text="MECHANICAL" containerRef={gridToContainer}/>
        <Cart  style={{ top: "10%", left: "60%"}} text="PLUMBERING" containerRef={gridToContainer}/>
     
       
       
      </div>
    </div>
    {/* Grid 3 */}
    <div className="grid-black-color grid-3">
      <div className="z-10 w-[50%]">
        <p className="headtext">Time Zone</p>
        <p className="subtext">I'm based in Mazatlan City/Mountain Zone and open to work remotely</p>
      </div>
      <figure className="absolute left-[30%] top-[10%]">
        <Globe/>
      </figure>
    </div>
    {/* Grid 4 */}
    <div className="grid-special-color grid-4">
      <div className="flex flex-col items-center justify-center gap-4 size-full">
        <p className="text-center headtext">
          Linkedin work remotely
        </p>
        <CopyEmailButton/>
      </div>
    </div>
    {/* Grid 5 */}
    <div className="grid-default-color grid-5">
<div className="z-10 w-[65%]" >
  <p className="headtext">Tech Stack</p>
  
  <p className="subText">Qualified architect with professional license, 4 years of experience
working detailing sheets for deliverables, electrical installation drawings,
completion of logbooks and site visits, 3d drawings and renderings. Skilled
to design in accordance with building regulations and proficient in
AutoCAD, Revit, 3ds Max, applications for topographic uplifts. Working
currently in BIM-MEP Systems modeling conduit, as-built conduit runs and
clash detection.
</p>
</div>
      <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
        <FrameWorks/></div>
    </div>
</div>
  </section>
}

export default About
