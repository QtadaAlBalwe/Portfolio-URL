import React from 'react'

 const MySkills = () => {
  return (
    <>
    {/* component */}
    <div className="bg-no-repeat bg-cover bg-center relative flex items-center justify-center lg:h-screen"style={{
          backgroundImage:
            "url(https://res-console.cloudinary.com/difjwsqf9/thumbnails/v1/image/upload/v1698777429/VGltZV9GbGllc19EZXNrdG9wX3dhbGxwYXBlcl9sOXdwdzE=/grid_landscape)",
        }}>
      <div className="container  p-4 mt-60 absolute">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4">
          {/* Replace this with your grid items */}
          <div className=" bg-gray-500 rounded-lg border p-4">
            <img
              src="https://nickroberts.ninja/wp-content/uploads/2017/07/react.jpg"
              alt="Placeholder Image"
              className="w-full h-48 rounded-md object-cover"
            />
            <div className="px-1 py-4">
              <div className="text-gray-100 font-bold text-xl mb-2">React.js</div>
              <p className="text-gray-300 text-base">
              I Used React as a basic library to build a full-fledged website, in addition to using it professionally to connect the web to each other with the help of Redux.  
              </p>
            </div>
          </div>
          <div className="bg-gray-500 rounded-lg border p-4">
            <img
              src="https://tse1.mm.bing.net/th?id=OIP.s5j5kFK-urpNTrVLlv9-ogHaEK&pid=Api&P=0&h=220"
              alt="Placeholder Image"
              className="w-full h-48 rounded-md object-cover"
            />
            <div className="px-1 py-4">
              <div className="  text-gray-100 font-bold text-xl mb-2"> Node.js </div>
              <p className="text-gray-100 text-base">
              I used Node.js to build the back side of the site, building the server and writing the js.
              </p>
            </div>
          </div>
          <div className="bg-gray-500 rounded-lg border p-4">
            <img
              src="https://tse1.mm.bing.net/th?id=OIP.8HeK50CR8kkgEUFphV-LlQHaFj&pid=Api&P=0&h=220"
              alt="Placeholder Image"
              className="w-full h-48 rounded-md object-cover"
            />
            <div className="px-1 py-4">
              <div className="  text-gray-100 font-bold text-xl mb-2">MongoDB</div>
              <p className="text-gray-100 text-base">
              Using MongoDB, I created my own data base and used it on my site.
              </p>
            </div>

          </div>
          <div className="bg-gray-500 rounded-lg border p-4">
            <img
              src="https://tse1.mm.bing.net/th?id=OIP.8HeK50CR8kkgEUFphV-LlQHaFj&pid=Api&P=0&h=220"
              alt="Placeholder Image"
              className="w-full h-48 rounded-md object-cover"
            />
            <div className="px-1 py-4">
              <div className="  text-gray-100 font-bold text-xl mb-2">MongoDB</div>
              <p className="text-gray-100 text-base">
              Using MongoDB, I created my own data base and used it on my site.
              </p>
            </div>

          </div>
          <div className="bg-gray-500 rounded-lg border p-4">
            <img
              src="https://tse1.mm.bing.net/th?id=OIP.8HeK50CR8kkgEUFphV-LlQHaFj&pid=Api&P=0&h=220"
              alt="Placeholder Image"
              className="w-full h-48 rounded-md object-cover"
            />
            <div className="px-1 py-4">
              <div className="  text-gray-100 font-bold text-xl mb-2">MongoDB</div>
              <p className="text-gray-100 text-base">
              Using MongoDB, I created my own data base and used it on my site.
              </p>
            </div>

          </div>
          <div className="bg-white rounded-lg border p-4">
            <img
              src="https://placehold.co/300x200/d1d4ff/352cb5.png"
              alt="Placeholder Image"
              className="w-full h-48 rounded-md object-cover"
            />
            <div className="px-1 py-4">
              <div className="font-bold text-xl mb-2">Blog Title</div>
              <p className="text-gray-700 text-base">
                This is a simple blog card example using Tailwind CSS. You can
                replace this text with your own blog content.
              </p>
            </div>
            <div className="px-1 py-4">
              <a href="#" className="text-blue-500 hover:underline">
                Read More
              </a>
            </div>
          </div>
          {/* Add more items as needed */}
        </div>
      </div>
    </div>
 
  </>
  )
}
 export default MySkills