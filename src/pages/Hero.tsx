import { LazyMotion } from "framer-motion";

const Hero = () => {
    return (
        <div id="hero" className="w-full flex justify-center overflow-hidden-web relative">
            <LazyMotion features={domAnimation} strict>
                <m.div
                    id="hero"
                    className="relative w-full flex justify-center items-center h-screen min-h-[800px]"
                >
                </m.div>
            </LazyMotion>
        </div>
    );
  };
  
  export default Hero;