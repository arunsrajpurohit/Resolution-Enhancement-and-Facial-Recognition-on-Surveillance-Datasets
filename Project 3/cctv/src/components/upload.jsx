import React ,{Component}from "react";
import {useNavigate} from 'react-router-dom';
import { Link } from "react-router-dom";

function Upload() {
   const navigate = useNavigate();
  return (
    <>
      <h1 className="text-center text-4xl text-[#76ABAE] font-bold my-10">Upload your Video</h1>
      <div className="py-5 ">
          <div className="flex items-center justify-center max-w-md mx-auto">
            <label
              htmlFor="dropzone-file"
              className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-3xl cursor-pointer bg-[#222831]"
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  className="w-8 h-8 mb-4 text-white dark:text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                  />
                </svg>
                <p className="mb-2 text-sm text-white dark:text-gray-400">
                  <span className="font-semibold">Click to upload</span> or drag
                  and drop
                </p>
                <p className="text-xs text-white dark:text-gray-400">
                  SVG, PNG, JPG or GIF (MAX. 800x400px)
                </p>
              </div>
              <input id="dropzone-file" type="file" className="hidden" />
            </label>
          </div>
        </div>
      <div className="py-5  border bg-[#31363F]">
          <form className="max-w-lg mx-auto p-5">
            <div className="mb-5">
              <label
                htmlFor="base-input"
                className="block mb-2 text-sm font-medium text-white dark:text-white"
              >
                Setting 1
              </label>
              <select
                id="category-select"
                className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="category1">ABC</option>
                <option value="category2">ABC</option>
                <option value="category3">ABC</option>
              </select>
            </div>
            <div className="mb-5">
              <label
                htmlFor="large-input"
                className="block mb-2 text-sm font-medium text-white dark:text-white"
              >
                Setting 2
              </label>
              <select
                id="category-select"
                className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="category1">ABC</option>
                <option value="category2">ABC</option>
                <option value="category3">ABC</option>
              </select>
            </div>
            <div className="mb-5">
              <label
                htmlFor="small-input"
                className="block mb-2 text-sm font-medium text-white dark:text-white"
              >
                Setting 3
              </label>
              <select
                id="category-select"
                className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="category1">ABC</option>
                <option value="category2">ABC</option>
                <option value="category3">ABC</option>
              </select>
            </div>
            <div className="mb-5">
              <label
                htmlFor="category-select"
                className="block mb-2 text-sm font-medium text-white dark:text-white"
              >
                Setting 4
              </label>
              <select
                id="category-select"
                className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="category1">ABC</option>
                <option value="category2">ABC</option>
                <option value="category3">ABC</option>
              </select>
            </div>

            <button
            
              type="submit"
              className=" text-white bg-teal-500 hover:bg-teal-600 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              onClick={()=>{
                navigate('/display');
              }}
         >
              Upload Video
            </button>
          </form>
        </div>

        

    </>
  );
}

export default Upload;
