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
          <div className="flex py-5 jus gap-5">
            <button className="bg-black flex  text-white p-3 rounded-xl">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 48 48">
<path fill="#4db6ac" d="M7.705,4.043C7.292,4.15,7,4.507,7,5.121c0,1.802,0,18.795,0,18.795S7,42.28,7,43.091c0,0.446,0.197,0.745,0.5,0.856l20.181-20.064L7.705,4.043z"></path><path fill="#dce775" d="M33.237,18.36l-8.307-4.796c0,0-15.245-8.803-16.141-9.32C8.401,4.02,8.019,3.961,7.705,4.043l19.977,19.84L33.237,18.36z"></path><path fill="#d32f2f" d="M8.417,43.802c0.532-0.308,15.284-8.825,24.865-14.357l-5.601-5.562L7.5,43.947C7.748,44.038,8.066,44.004,8.417,43.802z"></path><path fill="#fbc02d" d="M41.398,23.071c-0.796-0.429-8.1-4.676-8.1-4.676l-0.061-0.035l-5.556,5.523l5.601,5.562c4.432-2.559,7.761-4.48,8.059-4.653C42.285,24.248,42.194,23.5,41.398,23.071z"></path></svg>
              Get It On <br />Google Play
            </button>
            <button className="p-3 border border-black rounded-xl">
              Coming Soon
            </button>
          </div>
        </div>
        <div className="right w-[40%]">
        </div>
      </div>


      <div className="flex justify-evenly gap-10 py-20 bg-white">
      <div className="flex flex-col max-w-sm">
        <h2 className="text-xl font-semibold">
          Stay updated with new drives & reward updates.
        </h2>
        <div className="flex items-center py-10 gap-2">
          <input
            type="email"
            placeholder="Enter your email address"
            className="border px-4 py-2 rounded-md w-full text-sm"
          />
          <button className="bg-green-600 text-white px-4 py-2 rounded-md text-sm hover:bg-green-700">
            Subscribe
          </button>
        </div>
      </div>

      <div className="border rounded-lg p-4 shadow-md max-w-xs w-full">
        <h3 className="font-semibold text-md mb-4">Leaderboard Snapshot</h3>
        <ol className="space-y-2">
          <li className="flex justify-between items-center">
            <span>🥇 Rajesh</span>
            <span className="font-medium">1500 Ec</span>
          </li>
          <li className="flex justify-between items-center">
            <span>🥈 Priya</span>
            <span className="font-medium">1350</span>
          </li>
          <li className="flex justify-between items-center">
            <span>🥉 Amit</span>
            <span className="font-medium">1200</span>
          </li>
        </ol>
        <a href="#" className="text-green-600 text-sm mt-3 inline-block hover:underline">
          See Full Leaderboard &rarr;
        </a>
      </div>
    </div>
      </>
  )
}

export default Appdown
