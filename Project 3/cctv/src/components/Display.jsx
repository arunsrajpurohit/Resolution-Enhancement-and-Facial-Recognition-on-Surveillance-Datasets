import React from 'react'
import video from "../assets/video.mp4"
function Display() {
    return (
        <div>
             <h1 className="text-center text-4xl text-[#76ABAE] font-bold my-10">Transformed Video</h1>

            <video controls width="70%" className="ml-[15rem]" src={video}></video>
            <button
            
              type="submit"
              className="mt-10 mb-5 ml-[43rem] text-white bg-teal-500 hover:bg-teal-600 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              onClick={()=>{
                navigate('/display');
              }}
         >
              Download Video
            </button>
        </div>
    )
}

export default Display