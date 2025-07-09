import React from 'react'

const Appdown = () => {
  return (<>
    <div className="container bg-green-50 flex justify-center items-center">
        <div className="left w-[40%]">
          <h1 className="text-6xl font-bold">
            Download Our Mobile App
          </h1>
          <p>
          Track your pickup, donate easily
          </p>
          <div className="flex py-5 gap-5">
            <button className="bg-black text-white p-3 rounded-xl">
              Get It On Google Play
            </button>
            <button className="p-3 border border-black rounded-xl">
              Coming Soon
            </button>
          </div>
        </div>
        <div className="right w-[40%]">
        </div>
      </div>
      </>
  )
}

export default Appdown
