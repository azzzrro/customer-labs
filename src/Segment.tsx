import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { FaCircle } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { Button } from "@material-tailwind/react";




export const Segment = () => {

  const [color, setColor] = useState(false)

  const changeColor = () => {
    setColor(!color)
  }

  return (
    <div className={`w-screen h-screen z-10 ${color ? "bg-gray-400" : ""}`}>
      <div className="w-screen h-16 -z-10  text-white text-lg bg-cyan-500 flex items-center gap-3 px-9">
        <div>
          <IoIosArrowBack />
        </div>
        <div>
          <h1>View Audience</h1>
        </div>
      </div>

      <input type="checkbox" id="check" onChange={changeColor} />
      <label htmlFor="check" className="z-500">
        <span id="btn">Save Segment</span>
      </label>

      <div className="sidebar h-screen">
        <div className="sidebar-nav text-white bg-cyan-700">
          <div>
            <IoIosArrowBack />
          </div>
          <div>
            <h1>View Audience</h1>
          </div>
        </div>
        <div className="h-fit w-auto p-6">
          <div>
            <h1>Enter the Name of the Segment</h1>
            <input type="text" className="w-full h-8 border-[1px] border-blue-gray-100 px-1 outline-none rounded-sm mt-3" />
          </div>
          <div className="mt-8">
            <h1>To Save your segment, you need to add the schemas to build the query</h1>
            <div className="flex items-center gap-4 text-xs mt-5 justify-end">
              <div className="flex items-center gap-1">
                <div className="text-green-500">
                  <FaCircle />
                </div>
                <p>-User Traits</p>
              </div>
              <div className="flex items-center gap-1">
                <div className="text-red-500">
                  <FaCircle />
                </div>
                <p>-Group Traits</p>
              </div>
            </div>
            <div className="select-menu flex justify-between items-center mt-5">
              <select name="" id="" className="w-[85%] h-8 rounded-sm border-[1px] border-blue-gray-100 px-1 text-[12px]">
                <option selected disabled>Add Schema to Segment</option>
                <option value={"first_name"}>First Name</option>
                <option value={"last_name"}>Last Name</option>
                <option value={"gender"}>Gender</option>
                <option value={"Age"}>Age</option>
                <option value="account_name">Account Name</option>
                <option value="city">City</option>
                <option value="state">State</option>
              </select>
              <div className="w-[10%]">
                <div className="w-full h-8 rounded-sm bg-teal-100 flex justify-center items-center">
                  <div className="w-[70%] h-[20%] rounded-lg bg-teal-700"></div>
                </div>
              </div>
            </div>
            <div className="flex mt-5 items-center gap-2 text-sm cursor-pointer">
              <div className="text-green-400">
                <FaPlus />
              </div>
              <div>
                <h1 className="text-green-400 underline ">Add New Schema</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="h-20 relative bg-slate-300 p-5">
          <Button color="green">Save the Segment</Button>
          <Button className="text-red-700 ml-2" color="white">Cancel</Button>
        </div>
      </div>

    </div>
  )
}
