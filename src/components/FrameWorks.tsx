
import { OrbitingCircles } from "./OrbitingCircles";

interface IconProps  {
  src: string;
}

export function FrameWorks() {
  const skills =["authO", "azure", "blazor", "cplusplus", "react"];
  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center overflow-hidden">
      <OrbitingCircles iconSize={40}>
        
{skills.map((skill,index)=>(
  <Icon key={index} src={`assets/logos/${skill}.svg`} />
))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={30} radius={100} reverse speed={2}>
      
{skills.reverse().map((skill,index)=>(
  <Icon key={index} src={`assets/logos/${skill}.svg`} />
))}
      </OrbitingCircles>
    </div>
  );
}

const Icon = ({src}: IconProps) => (
  <img src={src} className="duration-200 rounded-sm hover:scale-110"/>
)
