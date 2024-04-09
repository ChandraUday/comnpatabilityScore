
import './App.css';
import React, { useState, useRef } from 'react';


function App() {

  const [speed, setSpeed] = useState(0);
  const [prevSpeed, setPrevSpeed] = useState(0);
  const [currentScale, setCurrentScale] = useState(1);
  const arrowWrapRef = useRef(null);

  const increaseBar = () => {
    if (speed < 180) {
      setSpeed(speed + 10);
      addClass();
      setCurrentScale(currentScale + 1);
      changeActive();
      changeText();
    }
  };

  const decreaseBar = () => {
    if (speed > 0) {
      setSpeed(speed - 10);
      addClass();
      changeActive();
      setCurrentScale(currentScale - 1);
      changeText();
    }
  };

  const addClass = () => {
    const newClass = "speed-" + speed;
    const prevClass = "speed-" + prevSpeed;
    const el = arrowWrapRef.current;
    if (el && el.classList.contains(prevClass)) {
      el.classList.remove(prevClass);
      el.classList.add(newClass);
    }
    setPrevSpeed(speed);
  };

  const changeActive = () => {
    const tempClass = "speedometer-scale-" + currentScale;
    const el = document.getElementsByClassName(tempClass)[0];
    if (el) {
      el.classList.toggle("active");
    }
  };

  const changeText = () => {
    const el = document.getElementsByClassName("km")[0];
    if (el) {
      el.innerText = speed;
    }
  };


  return (
    <> 
         <div className="Container">
            <div className='text'>
            <div className='static'>Compatability Score</div>
                  <div className='dynamic'>
                    <span className='km'>0</span>
                    <span className='unit'>CS</span>
                  </div>
            </div>
            
            <div className='middlepoint'></div>
            <div className='scalebar-hide'></div>
            <div className='scalebar-bottom-hide'></div>
            <div className='arrow-container'>
                    <div className='arrow-wrap speed-0' ref={arrowWrapRef}>
                             <div className='arrow'>

                             </div>
                    </div>
            </div>

            <div className='scalebar scalebar-1 active'></div>
            <div className='scalebar scalebar-2'></div>
            <div className='scalebar scalebar-3'></div>
            <div className='scalebar scalebar-4'></div>
            <div className='scalebar scalebar-5'></div>
            <div className='scalebar scalebar-6'></div>
            <div className='scalebar scalebar-7'></div>
            <div className='scalebar scalebar-8'></div>
            <div className='scalebar scalebar-9'></div>
            <div className='scalebar scalebar-10'></div>
            <div className='scalebar scalebar-11'></div>
            <div className='scalebar scalebar-12'></div>
            <div className='scalebar scalebar-13'></div>
            <div className='scalebar scalebar-14'></div>
            <div className='scalebar scalebar-15'></div>
            <div className='scalebar scalebar-16'></div>
            <div className='scalebar scalebar-17'></div>
            <div className='scalebar scalebar-18'></div>
            <div className='scalebar scalebar-19'></div>
            
        </div>
        

        <div className='accelate-container'>
               <button className='increase' onClick={increaseBar}>increase</button>
               <button className='decrease' onClick={decreaseBar}>decrease</button>
        </div>
      </>
  );
}

export default App;
