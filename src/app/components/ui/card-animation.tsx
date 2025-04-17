// First, you'll need to install these dependencies:
// npm install next react react-dom gsap @react-three/fiber @react-three/drei three

// File: pages/index.js
import { useEffect, useRef } from 'react';
import Head from 'next/head';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float } from '@react-three/drei';
import ThreeDModel from '../ui/card-3d';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Card() {
  const sectionRefs = useRef([]);
  const containerRef = useRef();

  useEffect(() => {
    // Skip on server-side
    if (typeof window === 'undefined') return;

    // Create a timeline for each section
    sectionRefs.current.forEach((section, i) => {
      const el = section;
      
      // GSAP animation for text and opacity
      gsap.fromTo(
        el.querySelector('.content'),
        { opacity: 0, y: 100 }, 
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            end: 'top 30%',
            scrub: true,
          }
        }
      );
      
      // 3D model animation with ScrollTrigger
      if (i === 1) { // Only apply to the section with the 3D model
        gsap.to(`.model-wrapper`, {
          scrollTrigger: {
            trigger: el,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
            onUpdate: (self) => {
              // Update a CSS variable that we'll use to rotate the model
              document.documentElement.style.setProperty('--scroll-progress', self.progress);
            }
          }
        });
      }
    });

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  // Add sections to the refs array
  const addToRefs = (el) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  return (
    <div ref={containerRef} className="container">
      <Head>
        <title>3D Scroll Animations | Next.js</title>
        <meta name="description" content="Stunning 3D scroll animations with Next.js and GSAP ScrollTrigger" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section className="hero" ref={addToRefs}>
          <div className="content">
            <h1>Scroll for 3D Magic</h1>
            <p>A stunning example of 3D scroll animations with Next.js and GSAP ScrollTrigger</p>
          </div>
        </section>

        <section className="model-section" ref={addToRefs}>
          <div className="content">
            <h2>Interactive 3D Experience</h2>
            <p>This 3D model rotates as you scroll down the page</p>
          </div>
          <div className="model-wrapper">
            <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} intensity={1} />
              <Float
                speed={1.5} 
                rotationIntensity={0.5} 
                floatIntensity={0.5}
              >
                <ThreeDModel />
              </Float>
              <OrbitControls enableZoom={false} />
            </Canvas>
          </div>
        </section>

        <section className="features" ref={addToRefs}>
          <div className="content">
            <h2>Why Use 3D Scroll Animations?</h2>
            <div className="feature-grid">
              <div className="feature-card">
                <h3>Engagement</h3>
                <p>Captivate users with interactive elements that respond to their actions</p>
              </div>
              <div className="feature-card">
                <h3>Modern Design</h3>
                <p>Create a contemporary look that impresses visitors</p>
              </div>
              <div className="feature-card">
                <h3>Storytelling</h3>
                <p>Guide users through your content in an immersive way</p>
              </div>
            </div>
          </div>
        </section>

        <section className="contact" ref={addToRefs}>
          <div className="content">
            <h2>Ready to Create Your Own 3D Experience?</h2>
            <p>Start building interactive web experiences today!</p>
            <button className="cta-button">Get Started</button>
          </div>
        </section>
      </main>

      <style jsx global>{`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
        
        :root {
          --scroll-progress: 0;
        }
        
        html, body {
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
            Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
          scroll-behavior: smooth;
          overflow-x: hidden;
          background: #050505;
          color: #fff;
        }
        
        section {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 2rem;
          position: relative;
        }
        
        .hero {
          text-align: center;
          background: linear-gradient(135deg, #121212 0%, #000 100%);
        }
        
        .hero h1 {
          font-size: 5rem;
          margin-bottom: 1rem;
          background: linear-gradient(45deg, #FF4D4D, #F9CB28);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        
        .hero p {
          font-size: 1.5rem;
          max-width: 600px;
          margin: 0 auto;
          color: #aaa;
        }
        
        .model-section {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          align-items: center;
        }
        
        .model-wrapper {
          height: 500px;
          transform: rotate(calc(var(--scroll-progress) * 720deg));
          transition: transform 0.1s ease;
        }
        
        .features {
          background: linear-gradient(135deg, #0a0a0a 0%, #121212 100%);
        }
        
        .feature-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          margin-top: 2rem;
        }
        
        .feature-card {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 8px;
          padding: 1.5rem;
          transition: transform 0.3s ease;
        }
        
        .feature-card:hover {
          transform: translateY(-10px);
        }
        
        .contact {
          text-align: center;
          background: linear-gradient(135deg, #121212 0%, #000 100%);
        }
        
        h2 {
          font-size: 2.5rem;
          margin-bottom: 1.5rem;
          background: linear-gradient(45deg, #F9CB28, #FF4D4D);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        
        h3 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          color: #F9CB28;
        }
        
        p {
          margin-bottom: 1.5rem;
          line-height: 1.6;
          color: #ddd;
        }
        
        .cta-button {
          background: linear-gradient(45deg, #FF4D4D, #F9CB28);
          border: none;
          color: #fff;
          padding: 1rem 2rem;
          font-size: 1.2rem;
          border-radius: 50px;
          cursor: pointer;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .cta-button:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(249, 203, 40, 0.3);
        }
        
        @media (max-width: 768px) {
          .model-section {
            grid-template-columns: 1fr;
          }
          
          .hero h1 {
            font-size: 3rem;
          }
        }
      `}</style>
    </div>
  );
}