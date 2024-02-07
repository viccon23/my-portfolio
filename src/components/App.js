import React from 'react';
import { useEffect } from 'react';
import { Typewriter } from 'react-simple-typewriter'
import '../styles/App.css';
import me from '../images/me.jpg'; import wordie2Image from '../images/Wordie2.png';
import github from '../images/github.png';




function App() {
  useEffect(() => {
    // Add a scroll event listener
    const handleScroll = () => {
      const elements = document.querySelectorAll('.reveal-on-scroll');

      elements.forEach((element) => {
        if (isElementInViewport(element)) {
          element.classList.add('visible');
        }
      });
    };

    // Attach the event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isElementInViewport = (el) => {
    const rect = el.getBoundingClientRect();

    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };
  return (
    <>
      <NameTitle />
      <div className="main-page">
        <div className="container">
          <div className="content">
            <Introduction />
          </div>
          <div className="image">
            <img src={me} alt="myProfileImage" />
          </div>
        </div>
      </div> 

      <div className="container continuation reveal-on-scroll">
        <p> Below are some Projects I have currently done:</p>
      </div>

      <div className="projectCards">
          <div className="projects-list reveal-on-scroll">
            <Project
              title="Python Wordle Clone"
              description="A Python project that clones the Wordle game."
              imagePath={wordie2Image}
              link="/Wordle"
            />
          </div>
          <div className="projects-list reveal-on-scroll">
            <Project
              title=<h1>ChatGPT Discord Bot</h1>
              description="Utilizing OpenAI's API, this custom made Discord bot will answer prompts from users who send messages through a text channel."
              imagePath={wordie2Image}
              link="/DiscordMessageBot"
              githubUrl={"https://github.com/viccon23/GPTBot"}
            />
          </div>
          <div className="projects-list reveal-on-scroll">
            <Project
              title=<h1>Python Wordle Clone</h1>
              description="A Python project that clones the Wordle game."
              imagePath={wordie2Image}
              link="/Wordle"
            />
          </div>
      </div>
    </>
    
  );
}

export default App;


function Introduction() {
  return (
    <>
      <p>
          Hello, my name is Victor and I'm a Computer Science student at UTRGV. This website began on April 29, 2023, and will be continually updated to feature personal projects and anything new that is well.... worth including in a personal website.
    I am currently insterested in Networking, Web Development, Software Engineering and Machine Learning.
      </p>

      <p>
      My current interests lie in Machine Learning, specifically classification, but I am still in the journey of discovering new software and concepts that could pique my interest somewhere else. I am also interested in Back-end development.  
      </p>
    </>
  )
};

function NameTitle() {
  return (
    <div className='FrontPageTitle'>
      <h1 style={{ paddingTop: '1rem', margin: 'auto 0', fontWeight: 'normal' }}>
        {' '}
        <span style={{fontWeight: 'bold' }}>
          <Typewriter
            words={['Victor Contreras']}
            loop={true}
            cursor
            cursorStyle='_'
            typeSpeed={80}
            deleteSpeed={80}
            delaySpeed={1500}
          />
        </span>
      </h1>
    </div>
  )
};

function Project({ title, description, imagePath, tags, githubUrl }) {
  return (
    <div className="project-container">
        <div className="project-info">
          <h2>{title}</h2>
          <p>{description}</p>

          <GitHubLink url={githubUrl} />
        </div>
        <div className="project-image">
            <img src={imagePath} alt={title} />
          </div>
    </div>
  );
}

function GitHubLink({ url }) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <img src={github} alt="GitHub" style={{ width: '100px', height: '80px' }} />
    </a>
  );
}

