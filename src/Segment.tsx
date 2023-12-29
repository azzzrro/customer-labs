import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { FaCircle } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { Button } from "@material-tailwind/react";
import axios from "axios";




export const Segment = () => {

  const options = [
    { value: "first_name", name: "First Name" },
    { value: "last_name", name: "Last Name" },
    { value: "gender", name: "Gender" },
    { value: "age", name: "Age" },
    { value: "account_name", name: "Account Name" },
    { value: "city", name: "City" },
    { value: "state", name: "State" }
  ]

  const [color, setColor] = useState(false)

  const changeColor = () => {
    setColor(!color)
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [selectedSegments, setselectedSegments] = useState<[object] | any>([])

  const [selectedValue, setselectedValue] = useState("")

  const select = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setselectedValue(e.target.value)
  }

  const handleSelction = () => {

    if (!selectedSegments.some((segment: { value: string; }) => segment.value === selectedValue)) {
      const obj = { value: selectedValue, name: "" }
      switch (selectedValue) {
        case "first_name":
          obj.name = "First Name"
          break
        case "last_name":
          obj.name = "Last Name"
          break
        case "gender":
          obj.name = "Gender"
          break
        case "age":
          obj.name = "Age"
          break
        case "account_name":
          obj.name = "Account Name"
          break
        case "city":
          obj.name = "City"
          break
        case "state":
          obj.name = "State"
          break
        default:
          obj.name = ""
      }

      setselectedSegments((prev: []) => [...prev, obj])
    }
  }

  const [segmantName, setsegmantName] = useState("")

  const handleName = (e:React.ChangeEvent<HTMLInputElement>)=>{
    setsegmantName(e.target.value)
  }

  const handleSubmit = async (e:React.MouseEvent)=>{
    e.preventDefault()
    const newArray = selectedSegments.map((options:{ value: string, name: string }) => ({[options.value]:options.name}))
    const data = {
      segment_name:segmantName,
      schema:newArray
    }

    try {
      const response = await axios.post("	https://webhook.site/b90fb496-fa00-40ca-82e3-c27a5e228f32",data,{
        headers: {
          'Content-Type': 'application/json',
        },
      })

      if(response.status === 200){
        alert("Successfull")
        window.location.reload()
      }

    } catch (error) {
      console.log(error);
    }    
  }

  const filteredOptions = options.filter((opt: { value: string, name: string }) => !selectedSegments.some((selectedOption: { value: string, name: string }) => selectedOption.value === opt.value))


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
            <input value={segmantName} onChange={handleName} type="text" className="w-full h-8 border-[1px] border-blue-gray-100 px-1 outline-none rounded-sm mt-3" />
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

            {/* Selcted options */}

            {selectedSegments.length > 0 && (
              <>
                {selectedSegments.map((selectedOpt: { value: string, name: string }) => {

                  return (
                    <div key={selectedOpt.value} className="select-menu flex justify-between items-center mt-5">
                      <select className="w-[85%] h-8 rounded-sm border-[1px] border-blue-gray-100 px-1 text-[12px]">
                        <option value={selectedOpt.value}>{selectedOpt.name}</option>
                        {filteredOptions.map(remainingOpt => (
                          <option key={remainingOpt.value} value={remainingOpt.value}>
                            {remainingOpt.name}
                          </option>
                        ))}
                      </select>
                      <div className="w-[10%]">
                        <div className="w-full h-8 rounded-sm bg-teal-100 flex justify-center items-center">
                          <div className="w-[70%] h-[20%] rounded-lg bg-teal-700"></div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </>
            )}


            {/* selected options */}

            <div className="select-menu flex justify-between items-center mt-5">
              <select onChange={select} className="w-[85%] h-8 rounded-sm border-[1px] border-blue-gray-100 px-1 text-[12px]">
                <option selected disabled>Add Schema to Segment</option>
                {filteredOptions.map(opt => {
                  return (
                    <>
                      <option value={opt.value}>{opt.name}</option>
                    </>
                  )
                })}
              </select>
              <div className="w-[10%]">
                <div className="w-full h-8 rounded-sm bg-teal-100 flex justify-center items-center">
                  <div className="w-[70%] h-[20%] rounded-lg bg-teal-700"></div>
                </div>
              </div>
            </div>
            <div onClick={handleSelction} className="flex mt-5 items-center gap-2 text-sm cursor-pointer">
              <div className="text-green-400">
                <FaPlus />
              </div>
              <div>
                <h1 className="text-green-400 underline">Add New Schema</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="h-20 relative bg-slate-300 p-5">
          <Button onClick={handleSubmit} color="green">Save the Segment</Button>
          <Button className="text-red-700 ml-2" color="white">Cancel</Button>
        </div>
      </div>

    </div>
  )
}
