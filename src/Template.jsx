import SplitScreen from "./layout/SplitScreen";
import React, { useState } from "react";
import { nanoid } from "nanoid";
import App from "./App";

function Page() {
  // main page
  const [allCats, setAllCats] = useState([]); // allCats.count
  const [oneCat, setOneCat] = useState({ catName: "", country: "", count: 0 });
  const [errorMessage, setErrorMessage] = useState("");
  const [total, setTotal] = useState(0);

  const handleChangeCatName = (e) => {
    setOneCat({ ...oneCat, [e.target.name]: e.target.value });
    // setErrorMessage("");
  };

  const handleUpdate = (id, newCount) => {
    setAllCats((prev) =>
      prev.map((cat) => (cat.id === id ? { ...cat, count: newCount } : cat))
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (oneCat.catName.trim() === "") {
      setErrorMessage("Please enter your name");
    } else if (oneCat.country === "") {
      setErrorMessage("Please enter your country");
    } else {
      const newCat = { ...oneCat, id: nanoid() };
      setAllCats((prev) => [...prev, newCat]);
      setOneCat({ catName: "", country: "", count: 0 });
      setErrorMessage("");
    }
  };

  const handleDeleteCat = (id) => {
    const newCatList = allCats.filter((cat) => cat.id !== id);
    setAllCats(newCatList);
  };

  const handleTotal = (value) => {
    setTotal(total + value);
  };

  const highestClick = Math.max(...allCats.map((cat) => cat.count), 0); // allCats.count [1,2,3] // Math.max([],0)

  const leader = allCats.find((el) => el.count === highestClick);
  // leader [] / .catName / undefined / maxCount /
  // console.log(leader);

  return (
    <SplitScreen>
      {/******** Left Side  *********/}
      <>
        <div className="flex-1 flex flex-col p-[20px] text-center justify-center">
          {/******** Start Form ******/}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-y-5 p-8 border border-gray-300 rounded-md h-full justify-center text-black"
          >
            <h1 className="text-3xl font-semibold italic text-red-400">
              Join for Click Cat !!
            </h1>
            {/* Cat Name */}
            <input
              className="w-full p-2 border-2 border-slate-300 rounded-md"
              placeholder="cat"
              name="catName"
              value={oneCat.catName}
              onChange={handleChangeCatName}
            />
            {/* Cat Country */}
            <select
              className="w-full p-2  border-2 border-slate-300 rounded-md"
              name="country"
              value={oneCat.country}
              onChange={handleChangeCatName}
            >
              <option value={""} disabled>
                select country
              </option>
              <option value="Thailand">Thailand</option>
              <option value="USA">USA</option>
              <option value="UK">UK</option>
            </select>
            {/* Error */}
            {/* solution handle error 1 */}
            {errorMessage && <p className="text-red-500">{errorMessage}</p>}
            {/* solution handle error 2 */}
            {/* {errorMessage ? (
              <p className="text-red-500">{errorMessage}</p>
            ) : null} */}
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
                <h1 className="text-3xl font-semibold italic">
                  {allCats.length}
                </h1>
              </div>
              <div>
                <h1 className="text-3xl font-semibold italic">Total Count</h1>
                <h1 className="text-3xl font-semibold italic">{total}</h1>
              </div>
            </div>
            <div className="flex justify-evenly">
              <div>
                <h1 className="text-3xl font-semibold italic">LEADER</h1>
                <h1 className="text-3xl font-semibold italic">
                  {leader?.catName} : {leader?.country}
                </h1>
              </div>
              <div>
                <h1 className="text-3xl font-semibold italic">Highest Click</h1>
                <h1 className="text-3xl font-semibold italic">
                  {highestClick}
                </h1>
              </div>
            </div>
          </div>

          {/******** End DashBoard ******/}
        </div>
      </>

      {/******** Right Side  *********/}
      <div className="flex-1 h-screen p-4 flex flex-col gap-y-2 overflow-scroll">
        {/******** Start 1-Cat ******/}
        {allCats.map((el) => (
          <App
            key={el.id}
            cat={el}
            handleDeleteCat={handleDeleteCat}
            handleTotal={handleTotal}
            handleUpdate={handleUpdate}
          />
        ))}
        {/******** End 1-Cat ******/}
      </div>
    </SplitScreen>
  );
}

export default Page;
