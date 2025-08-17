import { OrbitingCircles } from "./OrbitCircles";

export function FrameWork() {
  const skills = [
    "auth0",
    "cplusplus",
    "css3",
    "chasrp",
    "dotnet",
    "react",
    "html5",
    "vite.js",
    "tailwindcss",
    "sqlite",
    "microsoft",
    "javascript",
  ]
    return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden">
      <OrbitingCircles iconSize={40}>
        {skills.map((skill,index)=>(
            <Icons key = {index} src={`assets/logos/${skills}.svg`}/>
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={30} radius={100} reverse speed={2}>
        
      </OrbitingCircles>
    </div>
  );
}

const Icons=({src}) =>{
    <img src={src}
        className="rounded-sm hover:scale-110 suration-200"
    ></img>
}
