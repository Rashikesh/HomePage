import { useRef } from "react"
import Card from "../components/Card"
import { Globe } from "../components/globe";
import EmailBtn from "../components/EmailBtn";
import { FrameWork } from "../components/FrameWork";

const About = () => {
    const grid2Container = useRef();
    return (
    <section className="c-space section-spacing" id="about">
        <h2 className="text-heading">About Me</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
            {/* Grid 1 */}
            <div className="flex items-end grid-default-color grid-1">
                <img
                    src="assets/coding-pov.png"
                    className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale[2.5]"
                />
                <div className="z-10">
                    <p className="headtext">Work</p>
                    <p className="subtext">Code with easy , work professionally. 
                        <br />
                        I am a software engineer with a passion for building scalable web applications and working with modern technologies.
                    </p>
                    <p className="subtext">I love to solve problems and create efficient solutions that make a difference.</p>
                    <p className="subtext">Let's connect and collaborate on exciting projects!
                    </p>
                </div>
                <div className='absolute inset-x-0 pointer-events-none -bottom-4
                h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo'/>
            </div>
            {/* Grid 2 */}
            <div className="grid-default-color grid-2">
                <div 
                ref={grid2Container}
                className="flex items-center justify-center w-full h-full">
                    <p className="flex items-end text-5xl text-gray-500">CODE IS PRACTICAL</p>
                    <Card containerRef={grid2Container} style={{rotate:"75deg",top:"43%" , left:"20%"}} text="Pick"/>   
                    <Card containerRef={grid2Container} style={{rotate:"90deg",top:"30%" , right:"70%"}} text="Your"/>     
                    <Card containerRef={grid2Container} style={{rotate:"95deg",top:"0%" , left:"70%"}} text="Choice"/>
                    <Card containerRef={grid2Container} style={{rotate:"20deg",top:"10%" , left:"0%"}} text="Here"/> 
                    <Card containerRef={grid2Container} style={{rotate:"30deg",top:"70%" , left:"70%"}} 
                    image="assets/logos/csharp-pink.png"/>
                    <Card containerRef={grid2Container} style={{rotate:"-45deg",top:"70%" , left:"25%"}} image="assets/logos/dotnet-pink.png" />
                    <Card containerRef={grid2Container} style={{rotate:"-45deg",top:"05%" , left:"15%"}} image="assets/logos/blazor-pink.png" />
                </div>
            </div>
            {/* Grid 3 */}
            <div className="grid-black-color grid-3">
          <div className="z-10 w-[50%]">
            <p className="headtext">Time Zone</p>
            <p className="subtext">
              I'm based in Mars, and open to remote work worldwide
            </p>
          </div>
          <figure className="absolute left-[30%] top-[10%]">
            <Globe />
          </figure>
            </div>
            {/* Grid 4 */}
            <div className="grid-special-color grid-4">
                <div className="flex flex-col items-center justify-center gap-4 size-full">
                    <p className="text-center headtext">Do you want to work with me</p>
                    <EmailBtn />
                </div>
            </div>
            {/* Grid 5 */}
            <div className="grid-default-color grid-5">
                <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
                    <FrameWork />
                </div>
            </div>
        </div>
    </section>
  )
}

export default About