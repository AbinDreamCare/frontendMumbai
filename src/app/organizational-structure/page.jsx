"use client";
import i18Instance from "@/customHooks/i18Instance";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
i18Instance();

function Page() {
  return (
    <div className="w-full">
      <Navbar />
      <div className="text-white mb-32 ">
        <div className="flex justify-center">
          <div className="bg-red-600 py-5 text-3xl md:w-[30%] w-[50%] rounded-3xl mt-16">
            <h1 className="text-center">Commissioner of Police</h1>
            <h1 className="text-center">Navi Mumbai</h1>
          </div>
        </div>
        <div className="flex justify-center w-full">
          <div className="flex justify-around w-[50%] text-black">
            <img src="/downArrow.png" alt="arrow down" className="h-32 w-16" />
            <img src="/downArrow.png" alt="arrow down" className="h-32 w-16" />
          </div>
        </div>
        <div className="flex justify-center gap-20 ">
          <div className="bg-blue-700 py-3 text-xl w-[40%] rounded-3xl">
            <h1 className="text-center">
              Jt. Commissioner of Police, Navi Mumbai
            </h1>
          </div>
          <div className="bg-amber-500 py-3 px-5 text-xl w-[40%]  rounded-3xl">
            <h1 className="text-center">
              Addl. Commissioner of Police, crime, Navi Mumbai
            </h1>
          </div>
        </div>
        <div className="flex justify-evenly">
          <img src="/downArrow.png" alt="arrow down" className="h-32 w-16" />
          <div className="bg-white h-32 w-16"></div>
          <img src="/downArrow.png" alt="arrow down" className="h-32 w-16" />
        </div>
        <div className="w-full flex justify-evenly">
          <div className="border-t-2 border-black mt-10">
            <div className="flex justify-around  text-black">
              <img
                src="/downArrow.png"
                alt="arrow down"
                className="h-32 w-16"
              />
              <img
                src="/downArrow.png"
                alt="arrow down"
                className="h-32 w-16"
              />
              <img
                src="/downArrow.png"
                alt="arrow down"
                className="h-32 w-16"
              />
              <img
                src="/downArrow.png"
                alt="arrow down"
                className="h-32 w-16"
              />
              <img
                src="/downArrow.png"
                alt="arrow down"
                className="h-32 w-16"
              />
            </div>
            <div className="flex justify-evenly ">
              <div className="w-[20%]">
                <div className="bg-purple-800 py-3  text-xl   rounded-3xl">
                  <h1 className="text-center">DCP Zone 1</h1>
                </div>
                <div className="flex justify-center mx-5">
                  <div>
                    <div className="flex justify-center ">
                      <img
                        src="/downArrow.png"
                        alt="arrow down"
                        className="h-32 w-16"
                      />
                    </div>
                    <div className="bg-lime-500 py-3 px-5 text-xl   rounded-3xl">
                      ACP Turbhe
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[20%]">
                <div className="bg-purple-800  py-3  text-xl  rounded-3xl">
                  <h1 className="text-center">DCP Zone 1</h1>
                </div>
                <div className="flex justify-center mx-5">
                  <div>
                    <div className="flex justify-center ">
                      <img
                        src="/downArrow.png"
                        alt="arrow down"
                        className="h-32 w-16"
                      />
                    </div>
                    <div className="bg-lime-500 py-3 px-5 text-xl   rounded-3xl">
                      ACP Turbhe
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[20%]">
                <div className="bg-purple-800 py-3  text-xl  rounded-3xl">
                  <h1 className="text-center">DCP Zone 1</h1>
                </div>
                <div className="flex justify-center mx-5">
                  <div>
                    <div className="flex justify-center ">
                      <img
                        src="/downArrow.png"
                        alt="arrow down"
                        className="h-32 w-16"
                      />
                    </div>
                    <div className="bg-lime-500 py-3 px-5 text-xl rounded-3xl">
                      ACP Turbhe
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[20%]">
                <div className="bg-purple-800 py-3  text-xl   rounded-3xl">
                  <h1 className="text-center">DCP Zone 1</h1>
                </div>
                <div className="flex justify-center mx-5">
                  <div>
                    <div className="flex justify-center ">
                      <img
                        src="/downArrow.png"
                        alt="arrow down"
                        className="h-32 w-16"
                      />
                    </div>
                    <div className="bg-lime-500 py-3 px-5 text-xl  rounded-3xl">
                      ACP Turbhe
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[20%]">
                <div className="bg-purple-800 py-3  text-xl   rounded-3xl">
                  <h1 className="text-center">DCP Zone 1</h1>
                </div>
                <div className="flex justify-center mx-5">
                  <div>
                    <div className="flex justify-center  ">
                      <img
                        src="/downArrow.png"
                        alt="arrow down"
                        className="h-32 w-16"
                      />
                    </div>
                    <div className="bg-lime-500 py-3 px-5 text-xl   rounded-3xl">
                      ACP Turbhe
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t-2 border-black mt-10">
            <div className="flex justify-center border-t-2 border-black my-6">
              <img
                src="/downArrow.png"
                alt="arrow down"
                className="h-32 w-16"
              />
            </div>
            <div className="bg-purple-800 py-3 px-5 text-xl   rounded-3xl">
              DCP Zone 1
            </div>
          </div>
          <div></div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Page;
