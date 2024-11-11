import React from 'react'

const FailedTask = ({data}) => {
  return (
    <>
      <div className="h-full w-[350px] bg-green-400 rounded-lg flex-shrink-0">
        <div className="h-10 px-5 py-10 flex items-center justify-between">
          <h1 className="px-4 py-1 rounded text-sm font-semibold bg-red-500">
            {data.category}
          </h1>
          <h3 className="font-medium">{data.date}</h3>
        </div>
        <h1 className="text-2xl font-semibold px-5">{data.title}</h1>
        <p className="text-sm font-medium px-5 mt-3">{data.description}</p>
      </div>
    </>
  );
}

export default FailedTask