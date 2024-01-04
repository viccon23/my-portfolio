import React from 'react';

const CPPMusicPlaylist = () => {
    return (
      <>
        <head>
          <link rel="stylesheet" href="static/basic.css" />
          <title>Bankers Algorithm</title>
        </head>
        <body>
          <div className="FrontPageTitle">
            <h1>Bankers Algorithm in C</h1>
          </div>
          <div className="containerWordle">
            <p className="content">
              This code implements a C++ program that simulates a playlist management system.
              <br />
              It allows users to create a playlist, add tracks to the playlist, remove tracks,
              <br />
              toggle track favorites, insert tracks at specifiic positions, display the playlist, 
              <br />
              and search for tracks by genre. The program utilizes various data structures such
              <br />
              as linked lists to manage the playlist and song information. It also includes a
              <br />
              menu-driven interface for user interation.
              <a href="https://github.com/viccon23/Music-Playlist" className="center-link">- Github Link -</a>
            </p>
            <div className="image-container">
              <img src={null} alt="Image 1" />
              <img src={null}alt="Image 2" />
            </div>
          </div>
        </body>
      </>
    );
  };
  
  export default CPPMusicPlaylist;