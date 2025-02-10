import React,{useEffect} from 'react';
import './not-found.css'; // Importing the CSS file
import vid from '../../Assets/404gif.mp4'
const NotFound = () => {
  return (
    <div className="not-found-container mt-[-150px]">
      <h1 className="not-found-title">Oops! Seems like I’m lost...</h1>
      <video
        className='w-[90%] h-[40%] rounded-lg my-8'
        autoPlay
        loop
      >
        <source src={vid} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <p className="not-found-message">
        Even the best chatbots get confused sometimes! 😅 Let's get you back on track.
      </p>
    </div>
  );
};

export default NotFound;
