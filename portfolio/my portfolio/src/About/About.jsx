import React from "react";
import "./About.css";
const About = () => {
  return (
    <>
      {/* component */}
      <link
        crossOrigin="anonymous"
        href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/8.3.2/swiper-bundle.css"
        rel="stylesheet"
      />
      <link
        href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"
        rel="stylesheet"
      />
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n  .swiper-pagination {\n    bottom: 0;\n    position: relative;\n  }\n\n  .swiper-container {\n    overflow: hidden;\n  }\n  .swiper-pagination-bullet{\n    background-color:rgb(14 211 207);\n  }\n  .swiper-pagination-bullet-active{\n    background-color:rgb(14 211 207);\n  }\n",
        }}
      />
      <div
        className="bg-no-repeat bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url(https://res-console.cloudinary.com/difjwsqf9/thumbnails/v1/image/upload/v1698777429/VGltZV9GbGllc19EZXNrdG9wX3dhbGxwYXBlcl9sOXdwdzE=/grid_landscape)",
        }}
      >
        <div className="absolute bg-gradient-to-r from-gray-900 to-gray-900 opacity-75 inset-0 z-0" />
        <div>
          <div className="min-h-screen flex justify-center">
            <div className="grid grid-cols-2 gap-4 items-center z-10">
              <div className="max-w-lg text-center sm:text-left">
                <h2 className="text-4xl font-bold text-gray-100 tracking-tight">
                  A smile <br className="hidden sm:block lg:hidden" /> is an
                  inexpensive way to change your looks
                </h2>
                <p className="mt-4 text-gray-300">
                  Goals are just dreams with deadline
                </p>
              </div>
              <div className="mx-0 max-w-xl flex rounded-2xl bg-gray-800">
                <div className="swiper-container flex-col flex  self-center">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <blockquote className="text-left ">
                        <div className="relative">
                          <div className="relative">
                            <img
                              src="https://res-console.cloudinary.com/difjwsqf9/thumbnails/v1/image/upload/v1698775022/OGFhZDNhMDItODZjNy00MjY3LTg4MGQtODNjMmEyN2M5NmRiX3g5eDVpZF9TaGFycGVuZWRfaGt5aDFh/grid_landscape"
                              alt="aji"
                              className="object-cover w-full h-65  mx-auto rounded-t-2xl"
                            />
                            <div className="rounded-t-2xl absolute bg-gradient-to-t from-gray-800 opacity-75 inset-0 z-0" />
                          </div>
                        </div>
                        <div className="relative m-5 p-5">
                          <svg
                            className="absolute left-0 w-6  fill-indigo-500"
                            viewBox="0 0 512 512"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z" />
                          </svg>
                          <p className="text-gray-100 text-xl px-5">
                            A Full-Stack Website Developer And an Active Member
                            Of The Meraki Programming Camp That Lasted For Five
                            Months. He is able To Learn More Skills Related To
                            The Field of programming, Deals Effectively with The
                            Members Of The Team I Work With Within The Project
                            And The Ability To Complete Tasks On Time And With
                            Dedication At The Required Level.
                          </p>
                          <svg
                            className="absolute right-0  w-6 fill-indigo-500"
                            viewBox="0 0 512 512"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z" />
                          </svg>
                          <div className="text-sm mt-5 mx-5">
                            <p className="font-medium text-white">
                              Check My Linkedin Account{" "}
                              <a
                                href="http://www.linkedin.com/in/qutadaalbalwe"
                                target="_blank"
                                className="w-20 h-10 mx-20 items-center justify-center inline-flex rounded-2xl font-bold text-lg  text-white bg-blue-500 hover:drop-shadow-lg cursor-pointer transition ease-in duration-300"
                              >
                                <img
                                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIj48Zz48cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Im0yMy45OTQgMjR2LS4wMDFoLjAwNnYtOC44MDJjMC00LjMwNi0uOTI3LTcuNjIzLTUuOTYxLTcuNjIzLTIuNDIgMC00LjA0NCAxLjMyOC00LjcwNyAyLjU4N2gtLjA3di0yLjE4NWgtNC43NzN2MTYuMDIzaDQuOTd2LTcuOTM0YzAtMi4wODkuMzk2LTQuMTA5IDIuOTgzLTQuMTA5IDIuNTQ5IDAgMi41ODcgMi4zODQgMi41ODcgNC4yNDN2Ny44MDF6IiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIj48L3BhdGg+PHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkPSJtLjM5NiA3Ljk3N2g0Ljk3NnYxNi4wMjNoLTQuOTc2eiIgZmlsbD0iI2ZmZmZmZiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiI+PC9wYXRoPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTIuODgyIDBjLTEuNTkxIDAtMi44ODIgMS4yOTEtMi44ODIgMi44ODJzMS4yOTEgMi45MDkgMi44ODIgMi45MDkgMi44ODItMS4zMTggMi44ODItMi45MDljLS4wMDEtMS41OTEtMS4yOTItMi44ODItMi44ODItMi44ODJ6IiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIj48L3BhdGg+PC9nPjwvc3ZnPg=="
                                  className="w-3"
                                />
                              </a>
                            </p>
                          </div>
                        </div>
                      </blockquote>
                    </div>
                    <div className="swiper-slide">
                      <blockquote className="text-left">
                        <div className="">
                          <div className="relative">
                            <img
                              src="https://scontent.fccj2-2.fna.fbcdn.net/v/t39.30808-6/293672501_5357602044279252_6369958249008578770_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=bdzc8jxe0kYAX83O5hJ&_nc_ht=scontent.fccj2-2.fna&oh=00_AT8kbjMW_DqEcrXGcCTesn5pdVLgQReb2NlaF3OduMzl1Q&oe=632F3EE9"
                              alt="aji"
                              className="object-cover w-full mx-auto rounded-t-2xl h-60"
                            />
                            <div className="rounded-t-2xl absolute bg-gradient-to-t from-gray-800 opacity-75 inset-0 z-0" />
                          </div>
                        </div>
                        <div className="relative relative m-5 p-5">
                          <svg
                            className="absolute left-0  w-6  fill-indigo-500"
                            viewBox="0 0 512 512"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z" />
                          </svg>
                          <p className="text-gray-100 text-xl px-5">
                            A Full-Stack Website Developer And an Active Member
                            Of The Meraki Programming Camp That Lasted For Five
                            Months. He is able To Learn More Skills Related To
                            The Field of programming, Deals Effectively with The
                            Members Of The Team I Work With Within The Project
                            And The Ability To Complete Tasks On Time And With
                            Dedication At The Required Level.
                          </p>
                          <svg
                            className="absolute right-0 w-6 fill-indigo-500"
                            viewBox="0 0 512 512"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z" />
                          </svg>
                          <div className="text-sm mt-5 mx-5">
                            <p className="font-medium text-white">
                              Check My Linkedin Account{" "}
                            </p>
                          </div>
                        </div>
                      </blockquote>
                    </div>
                    <div className="swiper-slide">
                      <blockquote className="text-left">
                        <div className="">
                          <div className="relative">
                            <img
                              src="https://scontent.fccj2-2.fna.fbcdn.net/v/t31.18172-8/11262421_868445743194927_5746052500134236265_o.jpg?_nc_cat=111&ccb=1-7&_nc_sid=e3f864&_nc_ohc=84hLHR-HqyMAX9c9k1y&_nc_ht=scontent.fccj2-2.fna&oh=00_AT_lIRJ3LcWYTagkUdWdrG_eb-iwHbQS_pPNAv7JDcg2Eg&oe=634DB7A3"
                              alt="aji"
                              className="object-cover w-full mx-auto rounded-t-2xl h-60"
                            />
                            <div className="rounded-t-2xl absolute bg-gradient-to-t from-gray-800 opacity-75 inset-0 z-0" />
                          </div>
                        </div>
                        <div className="relative m-5 p-5">
                          <svg
                            className="absolute left-0 w-6  fill-indigo-500"
                            viewBox="0 0 512 512"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z" />
                          </svg>
                          <p className="text-gray-100 text-xl px-5">
                            A Full-Stack Website Developer And an Active Member
                            Of The Meraki Programming Camp That Lasted For Five
                            Months. He is able To Learn More Skills Related To
                            The Field of programming, Deals Effectively with The
                            Members Of The Team I Work With Within The Project
                            And The Ability To Complete Tasks On Time And With
                            Dedication At The Required Level..
                          </p>
                          <svg
                            className="absolute right-0 w-6 fill-indigo-500"
                            viewBox="0 0 512 512"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z" />
                          </svg>
                          <div className="text-sm mt-5 mx-5">
                            <p className="font-medium text-white">Ajimon</p>
                            <p className="mt-1 text-gray-300">
                              CEO Of Marketing{" "}
                            </p>
                          </div>
                        </div>
                      </blockquote>
                    </div>
                  </div>
                  <div className="mt-12 swiper-pagination hidden" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
