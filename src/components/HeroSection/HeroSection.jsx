import Logo from "../../assets/logo.png";
import { HeroSections } from "../../utils/data";
/* eslint-disable react/prop-types */
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import Video from '../../assets/Trading.mp4'
import { Navigation, Autoplay } from 'swiper/modules';
export default function HeroSection() {
  return (
    <div>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div aria-hidden="true" className="absolute inset-0 -z-10">
          {/* <canvas width="1152" height="640"></canvas> */}
        </div>
        <div className="pt-32 pb-16 md:pt-52 md:pb-32 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div
              className="mb-6"
              data-aos="fade-down"
            ></div>
            <h1
              className="bg-clip-text text-transparent bg-gradient-to-r from-purple-200 to-purple-500 pb-4 text-5xl font-black"
              data-aos="fade-down"
            >
              {" "}
              Welcome to the world of FakeImgAI{" "}
            </h1>
            <p
              className="text-lg text-purple-400 font-medium mb-8"
              data-aos="fade-down"
              data-aos-delay="200"
            >
              {" "}
              DeepFakeAI is a program that allows you to create deepfakes in a
              few clicks using our Telegram Bot and Web App.{" "}
            </p>
            <div
              className="max-w-xs mx-auto sm:max-w-none sm:inline-flex sm:justify-center space-y-4 sm:space-y-0 sm:space-x-4 items-center"
              data-aos="fade-down"
              data-aos-delay="200"
            >
              <a
                href="https://youtu.be/EDTbKIUrUR8"
                rel="noopener noreferrer"
                target="_blank"
              >
                <button className="bg-gradient-to-r from-purple-500 via-pink-500 to-purple-700 bg-origin-border text-white  w-32 h-10  rounded-full shadow-lg shadow-purple-500/50 hover:shadow-xl hover:shadow-purple-700/50">
                  {" "}
                  Introduction{" "}
                </button>
              </a>
              <a href="/app" className="">
                <button className="btnsm text-slate-200 hover:text-white bg-slate-900 bg-opacity-25 hover:bg-opacity-30 w-full transition duration-150 ease-in-out">
                  Dashboard
                </button>
              </a>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="max-w-5xl rounded-3xl py-12">
              <video src={Video} className="rounded-3xl w-full h-full" muted autoPlay></video>
            </div>
          </div>
        </div>
      </div>
      <section>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-16 pb-12 md:pt-52 md:pb-20">
            <div>
              <div className="max-w-xl mx-auto md:max-w-none flex flex-col items-center justify-center md:space-y-10 lg:space-y-20 xl:space-y-24 space-y-8 space-y-reverse md:space-x-0">
                <div
                  className="md:w-7/12 lg:w-1/2 order-1 md:order-none max-md:text-center"
                  data-aos="fade-down"
                >
                  <div>
                    <div className="inline-flex font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-200 to-purple-600 pb-3 text-lg">
                      {" "}
                      {` The very first FakeImgAI project on the internet of it's
                      kind.`}
                    </div>
                  </div>
                  <h3 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-200 pb-3">
                    {" "}
                    Feel the power of using DeepFake technology.{" "}
                  </h3>
                  <p className="text-lg text-slate-300 mb-8">
                    FakeImgAI can be used in Telegram and on our website.
                  </p>
                </div>
                <div
                  className="w-full md:w-5/12 lg:w-1/2 aos-init aos-animate"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <div className="relative py-24 -mt-12">
                    <div aria-hidden="true" className="absolute inset-0 -z-10">
                      {/* <canvas
                        width="512"
                        height="384"
                      // style="width: 512px; height: 384px;"
                      ></canvas> */}
                    </div>
                    <div className="flex items-center justify-center">
                      <div className="relative w-48 h-48 flex justify-center items-center">
                        <svg
                          className="absolute inset-0 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 will-change-transform pointer-events-none blur-md"
                          width=""
                          height=""
                          viewBox="0 0 480 480"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <defs>
                            <linearGradient
                              id="pulse-a"
                              x1="50%"
                              x2="50%"
                              y1="100%"
                              y2="0%"
                            >
                              <stop offset="0%" stopColor="#A855F7"></stop>
                              <stop offset="76.382%" stopColor="#FAF5FF"></stop>
                              <stop offset="100%" stopColor="#6366F1"></stop>
                            </linearGradient>
                          </defs>
                          <g fillRule="evenodd">
                            <path
                              className="pulse"
                              fill="url(#pulse-a)"
                              fillRule="evenodd"
                              d="M240,0 C372.5484,0 480,107.4516 480,240 C480,372.5484 372.5484,480 240,480 C107.4516,480 0,372.5484 0,240 C0,107.4516 107.4516,0 240,0 Z M240,88.8 C156.4944,88.8 88.8,156.4944 88.8,240 C88.8,323.5056 156.4944,391.2 240,391.2 C323.5056,391.2 391.2,323.5056 391.2,240 C391.2,156.4944 323.5056,88.8 240,88.8 Z"
                            ></path>
                            <path
                              className="pulse pulse-1"
                              fill="url(#pulse-a)"
                              fillRule="evenodd"
                              d="M240,0 C372.5484,0 480,107.4516 480,240 C480,372.5484 372.5484,480 240,480 C107.4516,480 0,372.5484 0,240 C0,107.4516 107.4516,0 240,0 Z M240,88.8 C156.4944,88.8 88.8,156.4944 88.8,240 C88.8,323.5056 156.4944,391.2 240,391.2 C323.5056,391.2 391.2,323.5056 391.2,240 C391.2,156.4944 323.5056,88.8 240,88.8 Z"
                            ></path>
                            <path
                              className="pulse pulse-2"
                              fill="url(#pulse-a)"
                              fillRule="evenodd"
                              d="M240,0 C372.5484,0 480,107.4516 480,240 C480,372.5484 372.5484,480 240,480 C107.4516,480 0,372.5484 0,240 C0,107.4516 107.4516,0 240,0 Z M240,88.8 C156.4944,88.8 88.8,156.4944 88.8,240 C88.8,323.5056 156.4944,391.2 240,391.2 C323.5056,391.2 391.2,323.5056 391.2,240 C391.2,156.4944 323.5056,88.8 240,88.8 Z"
                            ></path>
                          </g>
                        </svg>
                        <div className="absolute inset-0 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none md:w-[500px] md:h-[500px] rounded-full overflow-hidden [mask-image:_radial-gradient(black,_transparent_60%)]">
                          <div className="h-full animate-endless">
                            <div className="absolute inset-0 [background:_repeating-linear-gradient(transparent,_transparent_48px,_theme(colors.white)_48px,_theme(colors.white)_49px)] blur-[2px] opacity-20"></div>
                            <div className="absolute inset-0 [background:_repeating-linear-gradient(transparent,_transparent_48px,_theme(colors.purple.500)_48px,_theme(colors.purple.500)_49px)]"></div>
                            <div className="absolute inset-0 [background:_repeating-linear-gradient(90deg,transparent,_transparent_48px,_theme(colors.white)_48px,_theme(colors.white)_49px)] blur-[2px] opacity-20"></div>
                            <div className="absolute inset-0 [background:_repeating-linear-gradient(90deg,transparent,_transparent_48px,_theme(colors.purple.500)_48px,_theme(colors.purple.500)_49px)]"></div>
                          </div>
                        </div>
                        <div className="absolute">
                          <div>
                            <img src={Logo} className="relative w-12" />
                          </div>
                        </div>
                        <div style={{ display: "none" }} className="absolute">
                          <div>
                            <svg
                              className="relative fill-slate-200"
                              xmlns="http://www.w3.org/2000/svg"
                              width="35"
                              height="35"
                            >
                              <path d="M18 14h-2V8h2c2.2 0 4-1.8 4-4s-1.8-4-4-4-4 1.8-4 4v2H8V4c0-2.2-1.8-4-4-4S0 1.8 0 4s1.8 4 4 4h2v6H4c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4v-2h6v2c0 2.2 1.8 4 4 4s4-1.8 4-4-1.8-4-4-4ZM16 4c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2h-2V4ZM2 4c0-1.1.9-2 2-2s2 .9 2 2v2H4c-1.1 0-2-.9-2-2Zm4 14c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2h2v2ZM8 8h6v6H8V8Zm10 12c-1.1 0-2-.9-2-2v-2h2c1.1 0 2 .9 2 2s-.9 2-2 2Z"></path>
                            </svg>
                          </div>
                        </div>
                        <div style={{ display: "none" }} className="absolute">
                          <div className="relative flex items-center justify-center w-16 h-16 border border-transparent rounded-2xl shadow-2xl -rotate-[14deg]  before:absolute before:inset-0 before:bg-slate-800/30 before:rounded-2xl">
                            <svg
                              className="relative fill-slate-200"
                              xmlns="http://www.w3.org/2000/svg"
                              width="26"
                              height="14"
                            >
                              <path
                                fillRule="nonzero"
                                d="m10 5.414-8 8L.586 12 10 2.586l6 6 8-8L25.414 2 16 11.414z"
                              ></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative">
        <div className="absolute left-1/2 -translate-x-1/2 top-0 -z-10 w-80 h-80 -mt-24 -ml-32">
          <div aria-hidden="true" className="absolute inset-0 -z-10">
            {/* <canvas width="320" height="320"></canvas> */}
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-16 md:pt-32">
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
              <h2 className=" text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-200 pb-4">
                {" "}
                How to use?{" "}
              </h2>
            </div>
            <div className="relative pb-12 md:pb-20">
              <div
                className="absolute bottom-0 -mb-20 left-1/2 -translate-x-1/2 blur-2xl opacity-50 pointer-events-none"
                aria-hidden="true"
              >
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="434"
                  height="427"
                >
                  <defs>
                    <linearGradient
                      id="bs2-a"
                      x1="19.609%"
                      x2="50%"
                      y1="14.544%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#6366F1"></stop>
                      <stop
                        offset="100%"
                        stopColor="#6366F1"
                        stopOpacity="0"
                      ></stop>
                    </linearGradient>
                  </defs>
                  {/* <path
                    fill="url(#bs2-a)"
                    fillRule="evenodd"
                    d="m346 898 461 369-284 58z"
                    transform="translate(-346 -898)"
                  ></path>
                </svg> */}
              </div>
              <div className="grid md:grid-cols-12 gap-6 group">
                <div
                  className="md:col-span-12 aos-init aos-animate"
                  data-aos="fade-down"
                >
                  <div className="relative h-full bg-slate-800 rounded-3xl p-px before:absolute before:w-96 before:h-96 before:-left-48 before:-top-48 before:bg-purple-500 before:rounded-full before:opacity-0 before:pointer-events-none before:transition-opacity before:duration-500 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:hover:opacity-20 before:z-30 before:blur-[100px] after:absolute after:inset-0 after:rounded-[inherit] after:opacity-0 after:transition-opacity after:duration-500 after:[background:_radial-gradient(250px_circle_at_var(--mouse-x)_var(--mouse-y),theme(colors.slate.400),transparent)] after:group-hover:opacity-100 after:z-10 overflow-hidden">
                    <div className="relative h-full bg-slate-900 rounded-[inherit] z-20 overflow-hidden">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <div
                          className="absolute right-0 top-0 blur-2xl"
                          aria-hidden="true"
                        >
                          {/* <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="342"
                            height="393"
                          >
                            <defs>
                              <linearGradient
                                id="bs-a"
                                x1="19.609%"
                                x2="50%"
                                y1="14.544%"
                                y2="100%"
                              >
                                <stop offset="0%" stopColor="#6366F1"></stop>
                                <stop
                                  offset="100%"
                                  stopColor="#6366F1"
                                  stopOpacity="0"
                                ></stop>
                              </linearGradient>
                            </defs>
                            {/* <path
                              fill="url(#bs-a)"
                              fillRule="evenodd"
                              d="m104 .827 461 369-284 58z"
                              transform="translate(0 -112.827)"
                              opacity=".7"
                            ></path> 
                          </svg> */}
                        </div>
                        <div
                          className="absolute flex items-center justify-center bottom-0 translate-y-1/2 pointer-events-none -z-10 h-full aspect-square"

                        >
                          <div className="absolute inset-0 translate-z-0 bg-purple-500 rounded-full blur-[120px] opacity-70"></div>
                          <div className="absolute w-1/4 h-1/4 translate-z-0 bg-purple-400 rounded-full blur-[40px]"></div>
                        </div>
                        <div className="md:max-w-[480px] shrink-0 order-1 md:order-none p-6 pt-0 md:p-8 md:pr-0">
                          <div className="mb-5">
                            <div data-aos='fade-left'>
                              <h3 className="inline-flex text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-200 pb-1">
                                {" "}
                                Sign Up{" "}
                              </h3>
                              <p className="text-lg font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-200">
                                {" "}
                                Create a new account on DeepFakeAI. You will
                                need to verify your email address.{" "}
                              </p>
                            </div>
                          </div>
                          <div>
                            <button
                              className="bg-gradient-to-r from-purple-500 via-pink-500 to-purple-700 bg-origin-border text-white  w-40 h-10  rounded-full shadow-lg shadow-purple-500/50 hover:shadow-xl hover:shadow-purple-700/50"
                              href="https://fakeai.io/app"
                            >
                              {" "}
                              Dashboard{" "}

                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="md:col-span-7 "
                  data-aos="fade-down"
                >
                  <div className="relative h-full bg-slate-800 rounded-3xl p-px before:absolute before:w-96 before:h-96 before:-left-48 before:-top-48 before:bg-purple-500 before:rounded-full before:opacity-0 before:pointer-events-none before:transition-opacity before:duration-500 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:hover:opacity-20 before:z-30 before:blur-[100px] after:absolute after:inset-0 after:rounded-[inherit] after:opacity-0 after:transition-opacity after:duration-500 after:[background:_radial-gradient(250px_circle_at_var(--mouse-x)_var(--mouse-y),theme(colors.slate.400),transparent)] after:group-hover:opacity-100 after:z-10 overflow-hidden">
                    <div className="relative h-full bg-slate-900 rounded-[inherit] z-20 overflow-hidden">
                      <div className="flex flex-col">
                        <div
                          className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square"
                          aria-hidden="true"
                        >
                          <div className="absolute inset-0 translate-z-0 bg-slate-800 rounded-full blur-[80px]"></div>
                        </div>
                        <div className="md:max-w-[480px] shrink-0 order-1 md:order-none p-6 pt-0 md:p-8">
                          <div>
                            <h3 className="inline-flex text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-200 pb-1">
                              {" "}
                              Buy minutes{" "}
                            </h3>
                            <p className="text-slate-400">
                              {" "}
                              Buy the number of minutes you want to use. You can
                              buy minutes using your credit card.{" "}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="md:col-span-5"
                  data-aos="fade-down"
                >
                  <div className="relative h-full bg-slate-800 rounded-3xl p-px before:absolute before:w-96 before:h-96 before:-left-48 before:-top-48 before:bg-purple-500 before:rounded-full before:opacity-0 before:pointer-events-none before:transition-opacity before:duration-500 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:hover:opacity-20 before:z-30 before:blur-[100px] after:absolute after:inset-0 after:rounded-[inherit] after:opacity-0 after:transition-opacity after:duration-500 after:[background:_radial-gradient(250px_circle_at_var(--mouse-x)_var(--mouse-y),theme(colors.slate.400),transparent)] after:group-hover:opacity-100 after:z-10 overflow-hidden">
                    <div className="relative h-full bg-slate-900 rounded-[inherit] z-20 overflow-hidden">
                      <div className="flex flex-col">
                        <div
                          className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square"
                          aria-hidden="true"
                        >
                          <div className="absolute inset-0 translate-z-0 bg-slate-800 rounded-full blur-[80px]"></div>
                        </div>
                        <div className="md:max-w-[480px] shrink-0 order-1 md:order-none p-6 pt-0 md:p-8">
                          <div>
                            <h3 className="inline-flex text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-1">
                              {" "}
                              Start Generating videos{" "}
                            </h3>
                            <p className="text-slate-400">
                              On the dashboard web app you can start generating
                              videos.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className='max-w-6xl mx-auto px-4'>
        <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20"><div><div className="inline-flex bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-200 pb-3 text-2xl font-medium"> Who you can DeepFake </div></div><h2 className="text-4xl font-black bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4"> Characters </h2><p className="text-lg text-slate-400"> {`Characters that you're currently able to use with our web app and telegram bot. We'll keep adding more, sky is the limit. `}</p></div>
        <Swiper
          slidesPerView={3}
          spaceBetween={10}
          loop={true}
          navigation={true}
          autoplay={
            {
              delay: 3000,
              disableOnInteraction: false,
            }
          }
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
          }}
          modules={[Autoplay, Navigation]}
          className="mySwiper relative px-2 bg-mainbg pb-20"
        >
          {HeroSections && HeroSections.map((item) => (
            <SwiperSlide key={item.id} className='bg-mainbg'>
              <div className="flex flex-col justify-center items-center bg-mainbg border rounded-2xl border-slate-100 py-2 h-96 gap-3">
                <img
                  src={item.Image}
                  alt="Your Image"
                  className="w-52 h-52 rounded-full"
                />
                <p className="text-white text-base font-medium">{item.name}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
