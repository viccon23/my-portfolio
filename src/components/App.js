import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter'
import '../styles/App.css';
import me from '../images/me.jpg';

function App() {
  return (
    <>
      <div class="mainPage">
        <NameTitle />
        <div class="menu-link">
            <div class="projects">
                <h1>Projects:</h1>
                <Link to="/Wordle">Python Wordle Clone</Link>
                <br />
                <Link to="/DiscordMessageBot">Discord Message Bot</Link>
                <br />
                <Link to="/CPPMusicPlaylist">C++ Music Playlist</Link>
                <br />
                <Link to="/BankersAlgorithm">Bankers Algorithm with C</Link>
            </div>
            <div class="Contact">
                <h1>Contact Info:</h1>
                <h3>Email: victor.contreras23@aol.com</h3>
                <h3>Phone: (956) 459-3249</h3>
            </div>
        </div>
        <div class="container">
            <div class="content">
            <Introduction />
            </div>
            <div class = "image">
              <img src={me} alt="myProfileImage"/>
            </div>
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
    I am currently insterested in Networking, Web Development, Software Engineering and Machine Learning, and will be working on projects with a focus on the last 2 fields.
      </p>

      <p>
    I am a graduate from Brownsville Early College High School, where I graduated with my Diploma and an Associate of Art in General Studies, effectively earning over 60 college credits before I began my college life. This allowed me to clear away my basics and start working with full focus and commitment on my core technology classes.
    I am excited to see myself learn more as I continue my university studies, and can't wait to see what lies ahead. Thank you for visiting. 
      </p>
      <p>
    Update as of November 4, 2023: Hello! I haven't taken the time to update this website or continue working on projects due to heavy schoolwork. However, I have been taking a Web Development course and will be revamping this website to use what I have learned, such as Server Side Templating, AJAX, and React instead of Flask. The new website will begin production in December once the semester finishes!
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
