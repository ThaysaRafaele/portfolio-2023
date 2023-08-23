import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import type { Container, Engine } from "tsparticles-engine";

interface ParticlesComponentProps {
  particlesOptions: Record<string, unknown>;
  className?: string;
  id?: string;
}

const ParticlesComponent: React.FC<ParticlesComponentProps> = ({
  particlesOptions,
  className,
  id,
}) => {
  let isInitialized = false;

  const particlesInit = useCallback(async (engine: Engine) => {
    if(!isInitialized) {
      await loadFull(engine);
      isInitialized = true;
    }

  }, []);

  const particlesLoaded = useCallback(async (container?: Container | undefined) => {
      await container
  }, []);

  return (
    <Particles
      id={id}
      className={className}
      init={particlesInit}
      loaded={particlesLoaded}
      options={particlesOptions}
    />
  );
};

export default ParticlesComponent;
