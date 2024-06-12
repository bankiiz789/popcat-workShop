import React, { useState, useRef } from "react";
import catPic1 from "./assets/c1.png";
import catPic2 from "./assets/c2.png";
import sound from "./assets/sound.mp3";

function App({ cat, handleDeleteCat, handleTotal, handleUpdate }) {
  // single cat
  const [count, setCount] = useState(cat.count);
  const [togglePicture, setTogglePicture] = useState(false);

  const audioRef = useRef(null);

  const playSound = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  const handleInc = () => {
    setCount(count + 1);
    setTogglePicture((prev) => !prev);
    playSound();
    handleTotal(1);
    handleUpdate(cat.id, count + 1);
  };
  const handleDec = () => {
    if (count > 0) {
      setCount(count - 1);
      setTogglePicture((prev) => !prev);
      playSound();
      handleTotal(-1);
      handleUpdate(cat.id, count - 1);
    }
  };
  const handleReset = () => {
    setCount(0);
  };

  return (
    <div>
      <div className="p-4">
        {/* แมว 1 ตัว */}
        <div className="flex justify-between items-center border border-gray-200 rounded-lg p-4 shadow-lg relative">
          {/* Remove Cat */}
          <div
            onClick={() => handleDeleteCat(cat.id)}
            className="absolute top-[-15px] right-[-15px] bg-red-400 text-white  w-[30px] h-[30px] rounded-full text-center align-middle cursor-pointer "
          >
            x
          </div>
          <div>
            {/* Cat Image */}
            <div className="w-[100px]">
              <img
                className="w-full h-auto object-cover rounded-lg"
                src={togglePicture ? catPic2 : catPic1}
              />
            </div>
          </div>
          {/* Cat Profile & Count*/}
          <div className="flex-1 px-4">
            <p className="text-2xl">
              {cat.catName} : {cat.country}
            </p>
            <p>count : {count}</p>
          </div>
          <div className="flex gap-1">
            {/* Button Group */}
            <button
              onClick={() => handleReset()}
              className="px-4 py-2 bg-slate-500 rounded-md"
            >
              reset
            </button>
            <button
              onClick={() => handleDec()}
              className="px-4 py-2 bg-slate-500 rounded-md"
            >
              -
            </button>
            <button
              onClick={() => handleInc()}
              className="px-4 py-2 bg-slate-500 rounded-md"
            >
              +
            </button>
            <audio ref={audioRef} src={sound}></audio>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
