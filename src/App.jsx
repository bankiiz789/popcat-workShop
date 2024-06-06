import React from "react";

function App(props) {
  // single cat

  return (
    <div>
      <div className="p-4">
        {/* แมว 1 ตัว */}
        <div className="flex justify-between items-center border border-gray-200 rounded-lg p-4 shadow-lg relative">
          {/* Remove Cat */}
          <div className="absolute top-[-15px] right-[-15px] bg-red-400 text-white  w-[30px] h-[30px] rounded-full text-center align-middle cursor-pointer ">
            x
          </div>
          <div>
            {/* Cat Image */}
            <div className="w-[100px]">
              <img className="w-full h-auto object-cover rounded-lg" src={""} />
            </div>
          </div>
          {/* Cat Profile & Count*/}
          <div className="flex-1 px-4">
            <p className="text-2xl">catName : Thailand</p>
            <p>count : 0</p>
          </div>
          <div className="flex gap-1">
            {/* Button Group */}
            <button className="px-4 py-2 bg-slate-500 rounded-md">reset</button>
            <button className="px-4 py-2 bg-slate-500 rounded-md">-</button>
            <button className="px-4 py-2 bg-slate-500 rounded-md">+</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
