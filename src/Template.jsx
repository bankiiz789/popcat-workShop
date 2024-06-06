import SplitScreen from "./layout/SplitScreen";
import React, { useState } from "react";

function Page() {
  // main page
  return (
    <SplitScreen>
      {/******** Left Side  *********/}
      <>
        <div className="flex-1 flex flex-col p-[20px] text-center justify-center">
          {/******** Start Form ******/}
          <form className="flex flex-col gap-y-5 p-8 border border-gray-300 rounded-md h-full justify-center text-black">
            <h1 className="text-3xl font-semibold italic text-red-400">
              Join for Click Cat !!
            </h1>
            {/* Cat Name */}
            <input
              className="w-full p-2 border-2 border-slate-300 rounded-md"
              placeholder="cat"
            />
            {/* Cat Country */}
            <select className="w-full p-2  border-2 border-slate-300 rounded-md">
              <option value={""} disabled>
                select country
              </option>
              <option value="Thailand">Thailand</option>
              <option value="USA">USA</option>
              <option value="UK">UK</option>
            </select>
            {/* Error */}
            {<p className="text-red-500">error</p>}
            {/* Submit */}
            <button
              type="submit"
              className="bg-zinc-200 mt-4 p-2 rounded-xl text-xl text-black hover:bg-gray-700 hover:text-white"
            >
              Join
            </button>
          </form>
          {/******** End Form ******/}
        </div>

        <div className="flex-1 flex flex-col p-[20px] text-center justify-center">
          {/******** Start DashBoard ******/}
          <div className="flex flex-col gap-y-5 p-8 border border-gray-300 rounded-md h-full justify-center">
            <div className="flex justify-evenly">
              <div>
                <h1 className="text-3xl font-semibold italic">Total Cat</h1>
                <h1 className="text-3xl font-semibold italic">0</h1>
              </div>
              <div>
                <h1 className="text-3xl font-semibold italic">Total Count</h1>
                <h1 className="text-3xl font-semibold italic">0</h1>
              </div>
            </div>
            <div className="flex justify-evenly">
              <div>
                <h1 className="text-3xl font-semibold italic">LEADER</h1>
                <h1 className="text-3xl font-semibold italic">
                  name : Thailand
                </h1>
              </div>
              <div>
                <h1 className="text-3xl font-semibold italic">Highest Click</h1>
                <h1 className="text-3xl font-semibold italic">?</h1>
              </div>
            </div>
          </div>

          {/******** End DashBoard ******/}
        </div>
      </>

      {/******** Right Side  *********/}
      <div className="flex-1 h-screen p-4 flex flex-col gap-y-2 overflow-scroll">
        {/******** Start 1-Cat ******/}
        <div>cat</div>
        {/******** End 1-Cat ******/}
      </div>
    </SplitScreen>
  );
}

export default Page;
