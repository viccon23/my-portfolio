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
              Stemming from my Operating Systems course, the Banker's Algorithm is a resource allocation and deadlock avoidance algorithm that ensures the safe execution of processes by carefully managing resource requests.
              <br />
              You create a matrix of Processes and allocate a number of units to each Process, where you can request and release units from those processes to stimulate
              <br />
              how much resources your processes take similar to programs in task manager. Certain routes of requesting resources can lead to a deadlock, where a process is trying to request a resource that is already allocated to another process, and that process is requesting a resource that is already allocated to the process first mentioned, leading to a circular loop. When a process requests an allocated resource, that process gets blocked until the resource is freed again by the process its allocated to. So deadlock is an error that we must avoid, and the Bankers Algorithm helps with that.
              <a href="https://github.com/viccon23/bankers-algorithm" className="center-link">- Github Link -</a>
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