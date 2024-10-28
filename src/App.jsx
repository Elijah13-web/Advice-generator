import React, { useEffect, useState } from 'react';
import dice from "./assets/images/icon-dice.svg";
import divider from "./assets/images/pattern-divider-desktop.svg";

const App = () => {
  const [advice, setAdvice] = useState({ id: null, advice: "" });
  const [loading, setLoading] = useState(true);
  const [isGlowing, setIsGlowing] = useState(true);

  const fetchAdvice = () => {
    setLoading(true);
    setIsGlowing(true);
    fetch('https://api.adviceslip.com/advice')
      .then(response => response.json())
      .then(data => {
        setAdvice(data.slip);
        setLoading(false);
        setIsGlowing(false); // Turn off the glow effect once advice is fetched
      })
      .catch(error => {
        console.error('Error:', error);
        setLoading(false);
        setIsGlowing(false);
      });
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <div className="w-screen h-screen bg-DarkBlue flex items-center justify-center p-5 lg:p-0">
      <div className="bg-DarkGray lg:h-[350px] w-[600px] h-[400px] rounded-lg flex flex-col items-center relative p-8">
        
        <h1 className="text-green-500 mb-8 font-semibold">
          ADVICE #{loading ? '...' : advice.id}
        </h1>

        <p className="text-white text-center text-2xl font-bold">
          {loading ? 'Loading...' : `"${advice.advice}"`}
        </p>

        <img src={divider} alt="Divider" className="absolute bottom-24 md:w-[390px] w-[300px] h-[13px]" />
        
        <div
          className={`absolute bottom-0 translate-y-4 bg-Neon p-5 rounded-full ${
            isGlowing ? 'hover:shadow-[0px_0px_15px_3px_rgba(57,255,20,0.8)]' : ''
          }`}
        >
          <img
            src={dice}
            alt="Dice Icon"
            className="cursor-pointer"
            onClick={fetchAdvice}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
