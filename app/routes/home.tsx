import { useEffect, useMemo, useState } from 'react';

import type { Route } from './+types/home';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { useTheme } from '~/context/Theme-context';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import {
  type Container,
  type ISourceOptions,
  MoveDirection,
  OutMode,
} from '@tsparticles/engine';
import Loader from '../components/Loader';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Ahmed Portfolio' },
    { name: 'description', content: 'Welcome to my world of art' },
  ];
}

function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };
  const { theme } = useTheme();
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);
  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: {
          value: theme === 'dark' ? '#000000' : '#ffffff',
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: 'push',
          },
          onHover: {
            enable: true,
            mode: 'repulse',
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: theme === 'dark' ? '#ffffff' : '#000000',
        },
        links: {
          color: theme === 'dark' ? '#ffffff' : '#000000',
          distance: 70,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: MoveDirection.none,
          enable: true,
          outModes: {
            default: OutMode.out,
          },
          random: false,
          speed: 3,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 200,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: 'circle',
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    }),
    [theme]
  );

  if (init) {
    return (
      <div className="transition-colors duration-300">
        {isLoading ? (
          <Loader onLoadingComplete={handleLoadingComplete} />
        ) : (
          <>
            <div className="relative z-10">
              <Header />
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Contact />
              <Footer />{' '}
            </div>
            <Particles
              id="tsparticles"
              key={theme}
              particlesLoaded={particlesLoaded}
              options={options}
            />
          </>
        )}
      </div>
    );
  }
}

export default Home;
