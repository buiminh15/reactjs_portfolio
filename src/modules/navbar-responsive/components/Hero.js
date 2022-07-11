import React from "react";
import {
  FaDatabase,
  FaAsterisk,
  FaAccusoft,
  FaFacebook,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";
import { IconWrapper } from "../../../components/common";

function FormAuth() {
  return (
    <div className="bg-[#f8f8f8] rounded w-full text-[#808080]">
      <div className="p-10">
        <p className="text-xs">Sign in with</p>
        <div className="grid grid-cols-3 mt-3 cursor-pointer border border-[#808080] rounded divide-x divide-[#808080]">
          <div className="py-2 grid place-items-center ">
            <IconWrapper
              element={<FaFacebook />}
              styleProvider={{ size: 20, className: "text-[#333]" }}
            />{" "}
          </div>
          <div className="py-2 grid place-items-center ">
            <IconWrapper
              element={<FaTwitter />}
              styleProvider={{ size: 20, className: "text-[#333]" }}
            />
          </div>
          <div className="py-2 grid place-items-center ">
            <IconWrapper
              element={<FaGithub />}
              styleProvider={{ size: 20, className: "text-[#333]" }}
            />
          </div>
        </div>
        <div className="w-full text-center border-b border-[#808080] my-[2rem] leading-[1px]">
          <span className="bg-[#f8f8f8] px-4">Or</span>
        </div>
        <form action="" className="flex flex-col gap-5">
          <input
            type="text"
            className="w-full py-1 px-2 border border-[#808080] rounded outline-none"
            placeholder="Name"
          />
          <input
            type="email"
            className="w-full py-1 px-2 border border-[#808080] rounded outline-none"
            placeholder="Email"
          />
          <input
            type="password"
            className="w-full py-1 px-2 border border-[#808080] rounded outline-none"
            placeholder="Password"
          />
        </form>

        <a
          href="#"
          className="rounded bg-[#553bcb] text-[#f8f8f8] text-sm flex items-center justify-center mt-5 py-2 hover:bg-[#36119c] hover:text-white duration-150 ease-in-out"
        >
          Create Your Account
        </a>
      </div>
      <div className="border-b border-[#808080]"></div>
      <p className="p-10 text-sm">
        By signing up, you agree to our{" "}
        <span className="text-[#6948ff]">Terms, Data Policy</span> and{" "}
        <span className="text-[#6948ff]">Cookies Policy.</span>
      </p>
    </div>
  );
}

function Hero() {
  return (
    <section className=" bg-[#22262a]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full min-h-[calc(100vh-100px)] p-10">
          <div className="text-[#f8f8f8] flex flex-col justify-center">
            <h2 className="text-[40px] font-bold">
              Data to enrich your{" "}
              <span className="text-[40px] font-bold text-[#6948ff]">
                online business
              </span>
            </h2>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Dignissimos necessitatibus porro aut cum explicabo! A ipsum nemo
              asperiores pariatur quas voluptatum accusamus minima magni
              officiis provident eligendi, suscipit fugiat quibusdam quisquam!
              Placeat dicta minima voluptatibus, delectus unde ut fugiat vel,
              reiciendis facere adipisci eos sit, aperiam optio non itaque
              magnam.
            </p>

            <p className="text-[#d3d3d3] text-xs uppercase mt-4">used by</p>
            <div className="flex items-center gap-5 mt-3">
              <span className="text-[#c3c3c3] flex items-center gap-2 text-sm">
                <IconWrapper
                  element={<FaDatabase />}
                  styleProvider={{ size: 16 }}
                />{" "}
                Staxx
              </span>
              <span className="text-[#c3c3c3] flex items-center gap-2 text-sm">
                <IconWrapper
                  element={<FaAsterisk />}
                  styleProvider={{ size: 16 }}
                />{" "}
                Star AI
              </span>
              <span className="text-[#c3c3c3] flex items-center gap-2 text-sm">
                <IconWrapper
                  element={<FaAccusoft />}
                  styleProvider={{ size: 16 }}
                />{" "}
                Accusoft
              </span>
            </div>
          </div>
          <div className="flex items-center justify-center mt-12 px-5 md:px-20 lg:mt-0">
            <FormAuth />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
