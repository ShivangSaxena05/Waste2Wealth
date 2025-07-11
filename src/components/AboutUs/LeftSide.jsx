import React from 'react'

const LeftSide =({ imgURL, Title, Desc}) =>{
    return (<>
    <div className='flex justify-evenly gap-20 m-5'>
        <div className='mb-5 w-[30%]'>
            <img src={imgURL}/>
        </div>
        <div className='mt-5 w-[50%]'>
            <h1 className='font-bold text-2xl'>{Title}</h1>
            <p>{Desc}</p>
        </div>
    </div>
    </>);
}

export default LeftSide;