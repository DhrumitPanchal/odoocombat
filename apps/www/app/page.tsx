import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { IoIosArrowForward } from "react-icons/io";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { CarouselDemo } from "@/components/Carousel";
export default function Home() {
  return (
    <>
      <section className="flex flex-col items-center h-fit w-full pb-[4rem]">
        <div className="py-[1.4rem] flex justify-center gap-[2rem] w-[40rem]">
          <Input
            type="email"
            placeholder="Search Music"
            className=" w-[30rem] rounded-[1rem]"
          />
          <Button className="w-[20rme] bg-blue-600 ">Search</Button>
        </div>

        {/* -------------------------- Live ------------------------------------------- */}
        <div className="mt-[1rem] w-full px-[2rem]">
          <h2 className="text-3xl font-semibold">Live</h2>
          <div className="flex gap-[1.6rem] w-full mt-[1rem] ">
            <div className="cursor-pointer flex flex-col gap-[.3rem]">
              <img
                src="https://i.pinimg.com/474x/9c/1f/68/9c1f68a3ea6762531e68f8f2c61abfc1.jpg"
                alt=""
                className="h-[14rem] w-[14rem] border-[1px] rounded-sm overflow-hidden"
              />
              <div>
                <h2 className="font-semibold text-white">Robin ScHulz</h2>
                <h3 className="text-[.8rem]">Sam Smith. Kim Petras</h3>
              </div>
            </div>

            <div className="cursor-pointer flex flex-col gap-[.4rem]">
              <img
                src="https://i.pinimg.com/474x/66/d1/48/66d148ad425877f8596482266e63098a.jpg"
                alt=""
                className="h-[14rem] w-[14rem] border-[1px] rounded-sm overflow-hidden"
              />
              <div>
                <h2 className="font-semibold text-white">Robin ScHulz</h2>
                <h3 className="text-[.8rem]">Sam Smith. Kim Petras</h3>
              </div>
            </div>

            <div className="cursor-pointer flex flex-col gap-[.4rem]">
              <img
                src="https://i.pinimg.com/564x/7f/ec/45/7fec45ada5d1f29ab81515d046e55fd8.jpg"
                alt=""
                className="h-[14rem] w-[14rem] border-[1px] rounded-sm overflow-hidden"
              />
              <div>
                <h2 className="font-semibold text-white">Robin ScHulz</h2>
                <h3 className="text-[.8rem]">Sam Smith. Kim Petras</h3>
              </div>
            </div>

            <div className="cursor-pointer flex flex-col gap-[.4rem]">
              <img
                src="https://i.pinimg.com/474x/47/bf/33/47bf33e1d40c6d129af356e5dff46693.jpg"
                alt=""
                className="h-[14rem] w-[14rem] border-[1px] rounded-sm overflow-hidden"
              />
              <div>
                <h2 className="font-semibold text-white">Robin ScHulz</h2>
                <h3 className="text-[.8rem]">Sam Smith. Kim Petras</h3>
              </div>
            </div>

            <div className="cursor-pointer flex flex-col gap-[.4rem]">
              <img
                src="https://i.pinimg.com/474x/ac/ad/89/acad8900159c74d709d59783e6f0168b.jpg"
                alt=""
                className="h-[14rem] w-[14rem] border-[1px] rounded-sm overflow-hidden"
              />
              <div>
                <h2 className="font-semibold text-white">Robin ScHulz</h2>
                <h3 className="text-[.8rem]">Sam Smith. Kim Petras</h3>
              </div>
            </div>

            <div className="cursor-pointer flex flex-col gap-[.4rem]">
              <img
                src="https://i.pinimg.com/474x/7c/4f/03/7c4f03b63a546d46f04fe64c9e10f55f.jpg"
                alt=""
                className="h-[14rem] w-[14rem] border-[1px] rounded-sm overflow-hidden"
              />
              <div>
                <h2 className="font-semibold text-white">Robin ScHulz</h2>
                <h3 className="text-[.8rem]">Sam Smith. Kim Petras</h3>
              </div>
            </div>
          </div>
        </div>

        {/* -------------------------- Your top Artists ------------------------------------------- */}

        <section className="flex justify-between mt-[4rem] px-[2rem] w-full ">
          <div className="w-2/5">
            <section className="w-full">
              <div>
                <div className="flex  items-center justify-between">
                  <div>
                    <h2>Based on your play count</h2>
                    <h3 className="text-2xl font-semibold">Your top Artists</h3>
                  </div>

                  <div className="cursor-pointer flex gap-[1rem] items-center">
                    <h2>See all</h2>
                    <IoIosArrowForward className="text-[1.6rem]" />
                  </div>
                </div>
              </div>

              <div className="flex gap-[1.6rem] w-full mt-[1rem] ">
                <div className="cursor-pointer flex flex-col gap-[.4rem]">
                  <img
                    src="https://i.pinimg.com/736x/51/26/44/5126446d8490c170ddf22a333bbf1901.jpg"
                    alt=""
                    className="h-[8rem] w-[8rem] border-[1px] rounded-sm overflow-hidden"
                  />
                  <div>
                    <h2 className="font-medium text-[.8rem] text-white">
                      Billie Eilish
                    </h2>
                  </div>
                </div>

                <div className="cursor-pointer flex flex-col gap-[.4rem]">
                  <img
                    src="https://i.pinimg.com/736x/89/b0/f4/89b0f4407bdce9ba7f34773e5d2c210c.jpg"
                    alt=""
                    className="h-[8rem] w-[8rem] border-[1px] rounded-sm overflow-hidden"
                  />
                  <div>
                    <h2 className="font-medium text-[.8rem] text-white">
                      kendrick lamar
                    </h2>
                  </div>
                </div>

                <div className="cursor-pointer flex flex-col gap-[.4rem]">
                  <img
                    src="https://i.pinimg.com/474x/3f/72/76/3f7276e73e7e7e7195a0e6cb7847d793.jpg"
                    alt=""
                    className="h-[8rem] w-[8rem] border-[1px] rounded-sm overflow-hidden"
                  />
                  <div>
                    <h2 className="font-medium text-[.8rem] text-white">
                      eminem{" "}
                    </h2>
                  </div>
                </div>

                <div className="cursor-pointer flex flex-col gap-[.4rem]">
                  <img
                    src="https://i.pinimg.com/474x/eb/22/31/eb2231c128769f14d998fdde01b33182.jpg"
                    alt=""
                    className="h-[8rem] w-[8rem] border-[1px] rounded-sm overflow-hidden"
                  />
                  <div>
                    <h2 className="font-medium text-[.8rem] text-white">
                      Anastasiia{" "}
                    </h2>
                  </div>
                </div>
              </div>
            </section>
            {/* ---------------------------- moods ---------------------- */}
            <section className="mt-[2rem]">
              <div className="">
                <div className="flex  items-center justify-between">
                  <h3 className="text-2xl font-semibold">Moods</h3>
                  <h2>Check out more moods</h2>
                </div>
              </div>

              <div className="flex gap-[2rem] w-full mt-[1rem] ">
                <div className="flex  gap-[1.4rem] w-full">
                  <img
                    src="https://i.pinimg.com/474x/d1/ef/db/d1efdba923702381cf8229aae885c579.jpg"
                    alt=""
                    className="cursor-pointer h-[8rem] w-[14rem] border-[1px] rounded-sm overflow-hidden"
                  />

                  <div className="flex flex-col justify-between w-2/3">
                    <div className="cursor-pointer flex justify-between w-full ">
                      <div>
                        <h2 className="font-medium text-[1.2rem] text-white">
                          Levitating{" "}
                        </h2>
                        <h3 className="text-[.8rem]">Dua Lipa</h3>
                      </div>
                      <HiOutlineDotsVertical className="text-[1.4rem]" />
                    </div>
                    <div className="cursor-pointer flex justify-between w-full ">
                      <div>
                        <h2 className="font-medium text-[1.2rem] text-white">
                          Levitating{" "}
                        </h2>
                        <h3 className="text-[.8rem]">Dua Lipa</h3>
                      </div>
                      <HiOutlineDotsVertical className="text-[1.4rem]" />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="flex flex-col gap-[1.6rem] w-3/6">
            <div>
              <h1 className="text-white text-2xl font-semibold">
                Favourite Albums
              </h1>
            </div>
            <CarouselDemo />
          </div>
        </section>
      </section>
    </>
  );
}
