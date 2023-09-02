import "./App.css";
import logoSvg from "./images/logo.svg";
import indiaFlag from "./images/india-flag.svg";
import instantActivationButton from "./images/clone2/instant-activation-icon.svg";
import hamburger from "./images/hamburger.png";
import illustration from "./images/clone2/hero-illustration.jpg";
import heroSvg from "./images/clone2/hero-shape.svg";
import dottedRows from "./images/clone2/feature-section1-dotted-rows.png";
import bgSuite from "./images/clone2/payment-suite.png";
import paymentLinkIcon from "./images/clone2/payment-link-icon.svg";
import xFlame1 from "./images/clone2/x-flame-1.png";
import xFlame2 from "./images/clone2/x-flame-2.png";
import razorPayX from "./images/clone2/razorpayX.svg";
import businessBanking from "./images/clone2/business-banking.png";
import razorpayXIcon from "./images/clone2/razorpayXicon.svg";
import companies from "./images/clone2/companies.png";
import testimonial from "./images/clone2/testimonial.jpg";
import quotes from "./images/clone2/quotes.svg";
import fakeCompanyLogo from "./images/clone2/fake-company-logo.png";
import ctaImg from "./images/clone2/ctaImg.svg";
import darkLogo from "./images/clone2/logo-dark.svg";
import footerCertificate1 from "./images/clone2/footer-certificate-1.png";
import facebookIcon from './images/clone2/facebook-icon.svg';
import twitterIcon from './images/clone2/twitter-icon.svg';
import instagramIcon from './images/clone2/instagram-icon.svg';
import linkedinIcon from './images/clone2/linkedin-icon.svg';
import githubIcon from './images/clone2/github-icon.svg';

function App() {
  return (
    <div className="w-[100vw] min-h-screen overflow-x-hidden overflow-y-auto">
      <div className="w-full min-h-screen">
        {/* Navbar */}
        <div className="w-full mx-auto bg-deepBlue">
        <nav className="w-11/12 flex flex-wrap max-lg:flex-col max-lg:py-4 justify-center items-center bg-deepBlue mx-auto gap-6">
          <a href="#">
            <img
              src={logoSvg}
              alt="Logo"
              width="125px"
              height="30px"
              className="ml-10 my-auto"
            />
          </a>

          <ul className="flex justify-between mx-auto gap-6 mt-5 max-lg:hidden">
            <li className="group flex-col justify-center">
              <div className="font-mulish text-white text-sm font-bold transition-all duration-200 group-hover:text-lightBlue">
                Payments
              </div>
              <div className="h-1 mt-5 bg-transparent group-hover:bg-lightBlue"></div>
            </li>
            <li className="group flex-col justify-center">
              <div className="font-mulish text-white text-sm font-bold transition-all duration-200 group-hover:text-lightBlue">
                Banking
              </div>
              <div className="h-1 mt-5 bg-transparent group-hover:bg-lightBlue"></div>
            </li>
            <li className="group flex-col justify-center">
              <div className="font-mulish text-white text-sm font-bold transition-all duration-200 group-hover:text-lightBlue">
                Line of Credit
              </div>
            </li>
            <li className="group flex-col justify-center">
              <div className="font-mulish text-white text-sm font-bold transition-all duration-200 group-hover:text-lightBlue">
                Payroll
              </div>
            </li>
            <li className="group flex-col justify-center">
              <div className="font-mulish text-white text-sm font-bold transition-all duration-200 group-hover:text-lightBlue">
                Resources
              </div>
              <div className="w-full h-1 mt-5 bg-transparent group-hover:bg-lightBlue"></div>
            </li>
            <li className="group flex-col justify-center">
              <div className="font-mulish text-white text-sm font-bold transition-all duration-200 group-hover:text-lightBlue">
                Support
              </div>
              <div className="w-full h-1 mt-5 bg-transparent group-hover:bg-lightBlue"></div>
            </li>
            <li className="group flex-col justify-center">
              <div className="font-mulish text-white text-sm font-bold transition-all duration-200 group-hover:text-lightBlue">
                Pricing
              </div>
              <div className="w-full h-1 mt-5 bg-transparent group-hover:bg-lightBlue"></div>
            </li>
          </ul>

          <img
            src={hamburger}
            alt="hamburger"
            className="hidden w-[50px] h-[50px] mx-auto max-lg:block"
          />

          <div className="flex items-center justify-center gap-3 mx-auto">
            <img src={indiaFlag} alt="Flag" />

            <button className="p-1 px-4 border border-1 rounded-sm font-mulish text-sm text-white py-2">
              Log In
            </button>
            <button className="p-1 px-4 bg-white border border-1 rounded-sm font-mulish font-bold text-sm text-deepBlue transition-all duration-200 py-2 hover:text-lightBlue">
              <span>Sign Up</span>
              <i className="bx bx-right-arrow-alt"></i>
            </button>
          </div>
        </nav>
        </div>
        {/* Hero Section */}
        <div
          id="hero"
          className="relative mx-auto pt-12 bg-deepBlue flex max-lg:flex-col max-lg:text-center items-center justify-center gap-7"
        >
          <div id="content" className="flex-col text-white w-70">
            <p className="font-mulish text-4xl font-bold my-4">
              Power your finance, <br /> grow your business{" "}
            </p>
            <div id="line" className="w-6 h-1 bg-greenLight my-4 ml-3"></div>
            <p className="text-justify w-80 text-lg">
              Accept payments from customers. Automate payments to vendors &
              employees. Never run out of working capital.
            </p>
            <button className="bg-lightBlue p-3 rounded mt-4 transition-all duration-200 hover:bg-blue-400">
              <span>Sign Up Now</span>
              <i className="bx bx-right-arrow-alt"></i>
            </button>
          </div>

          <div id="picture">
            <img src={illustration} alt="" width="650px" className="scale-75" />
          </div>

          <img
            src={heroSvg}
            alt=""
            className="absolute -bottom-[100px] w-full object-fill"
          />
        </div>
        {/* Feature Section 1 */}
        <div
          id="features"
          className="w-11/12 relative mt-[200px] mx-auto bg-white"
        >
          <img
            src={dottedRows}
            alt=""
            loading="lazy"
            width="233"
            height="167"
            className="absolute top-[-3rem] left-[-9rem] inline-block"
          />
          <img
            src={dottedRows}
            alt=""
            loading="lazy"
            width="233"
            height="167"
            className="absolute top-[-2rem] right-[-1rem] inline-block rotate-180"
          />

          <h2 className="text-center font-bold text-lg">
            Accept Payments with Razorpay Payment Suite
          </h2>
          <div className="mx-auto w-5 h-1 bg-greenLight mt-4"></div>

          <div
            id="content"
            className="flex max-lg:flex-col max-lg:items-center justify-center p-4 rounded mb-5 mx-auto mt-10 border-2 bg-white"
          >
            <div className="flex-col justify-center">
              <h3 className="font-mulish font-bold text-3xl w-80">
                Supercharge your business with the all-powerful{" "}
                <span className="text-lightBlue">Payment Gateway</span>
              </h3>

              <ul className="mt-10">
                <li className="flex align-baseline gap-1 leading-10">
                  <i className="bx bx-check bx-md"></i>
                  <p>100+ Payment Methods</p>
                </li>
                <li className="flex align-baseline gap-1 leading-10">
                  <i className="bx bx-check bx-md"></i>
                  <p>Industry Leading Success Rate</p>
                </li>
                <li className="flex align-baseline gap-1 leading-10">
                  <i className="bx bx-check bx-md"></i>
                  <p>Superior Checkout Experience</p>
                </li>
                <li className="flex align-baseline gap-1 leading-10">
                  <i className="bx bx-check bx-md"></i>
                  <p>Easy to Integrate</p>
                </li>
                <li className="flex align-baseline gap-1 leading-10">
                  <i className="bx bx-check bx-md"></i>
                  <p>Instant Settlements from Day 1</p>
                </li>
                <li className="flex align-baseline gap-1 leading-10">
                  <i className="bx bx-check bx-md"></i>
                  <p>In Depth Reporting and Insights</p>
                </li>
              </ul>

              <div id="btns" className="flex mt-10">
                <button className="p-2 rounded text-white group hover: bg-lightBlue500 transition-all duration-200">
                  Sign Up Now{" "}
                  <i className="bx bx-right-arrow-alt group-hover:bg-lightBlue500"></i>
                </button>

                <div id="hyperlink" className="p-2 rounded text-black">
                  <a href="#">
                    Know More{" "}
                    <i className="bx bx-right-arrow-alt group-hover:bg-lightBlue500"></i>
                  </a>
                  <i></i>
                </div>
              </div>
            </div>
            <img id="bgImage" src={bgSuite} width="500px" height="400px"></img>
          </div>

          <div className="w-full grid place-content-center max-md:grid-rows-9 max-md:grid-cols-1 grid-cols-3 gap-4 grid-flow-row mt-10">
            <div className="w-full min-h-[15rem] relative cursor-pointer">
              <img
                src={paymentLinkIcon}
                alt=""
                className="bg-lightBlue absolute right-3 top-3 w-12 h-12 rounded-full z-[8]
            transition-all duration-200"
              />

              <svg
                viewBox="0 0 349.32501220703125 225"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                className="stroke-1 stroke-[#818597] h-full w-full absolute z-[9] transition-all duration-200"
                style={{ strokeOpacity: "0.15" }}
              >
                <path
                  d="m 0 6 
            a 6 6 0 0 1 6 -6 
            h 250.32501220703125 
            a 16 16 0 0 1 11 5 
            l 77 77 
            a 16 16 0 0 1 5 11 
            v 126 
            a 6 6 0 0 1 -6 6 
            h -337.32501220703125 
            a 6 6 0 0 1 -6 -6 
            z"
                  fill="#fff"
                ></path>
              </svg>

              <div className="z-[100] absolute w-full h-full flex flex-col justify-between pl-5 py-6 pr-8">
                <div>
                  <h3 className="font-mulish font-bold text-deepBlueHead leading-[1.2] text-[1.2rem]">
                    Payment Links
                  </h3>
                  <p className="font-mulish text-grayText mt-6 text-[1rem]">
                    Share payment link via an email, SMS, messenger, chatbot
                    etc. and get paid immediately
                  </p>
                </div>

                <div className="flex items-center cursor-pointer group">
                  <a
                    href="#"
                    className="font-mulish font-bold text-lightBlue500 
                    group-hover:text-grayBlue transition-all duration-200"
                  >
                    Know More
                  </a>
                  <i
                    data-feather="chevron-right"
                    className="w-5 h-5 text-lightBlue500 
                    group-hover:text-grayBlue transition-all duration-200"
                  ></i>
                </div>
              </div>
            </div>
            <div className="w-full min-h-[15rem] relative cursor-pointer">
              <img
                src={paymentLinkIcon}
                alt=""
                className="bg-lightBlue absolute right-3 top-3 w-12 h-12 rounded-full z-[8]
            transition-all duration-200"
              />

              <svg
                viewBox="0 0 349.32501220703125 225"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                className="stroke-1 stroke-[#818597] h-full w-full absolute z-[9] transition-all duration-200"
                style={{ strokeOpacity: "0.15" }}
              >
                <path
                  d="m 0 6 
            a 6 6 0 0 1 6 -6 
            h 250.32501220703125 
            a 16 16 0 0 1 11 5 
            l 77 77 
            a 16 16 0 0 1 5 11 
            v 126 
            a 6 6 0 0 1 -6 6 
            h -337.32501220703125 
            a 6 6 0 0 1 -6 -6 
            z"
                  fill="#fff"
                ></path>
              </svg>

              <div className="z-[100] absolute w-full h-full flex flex-col justify-between pl-5 py-6 pr-8">
                <div>
                  <h3 className="font-mulish font-bold text-deepBlueHead leading-[1.2] text-[1.2rem]">
                    Payment Links
                  </h3>
                  <p className="font-mulish text-grayText mt-6 text-[1rem]">
                    Share payment link via an email, SMS, messenger, chatbot
                    etc. and get paid immediately
                  </p>
                </div>

                <div className="flex items-center cursor-pointer group">
                  <a
                    href="#"
                    className="font-mulish font-bold text-lightBlue500 
                    group-hover:text-grayBlue transition-all duration-200"
                  >
                    Know More
                  </a>
                  <i
                    data-feather="chevron-right"
                    className="w-5 h-5 text-lightBlue500 
                    group-hover:text-grayBlue transition-all duration-200"
                  ></i>
                </div>
              </div>
            </div>
            <div className="w-full min-h-[15rem] relative cursor-pointer">
              <img
                src={paymentLinkIcon}
                alt=""
                className="bg-lightBlue absolute right-3 top-3 w-12 h-12 rounded-full z-[8]
            transition-all duration-200"
              />

              <svg
                viewBox="0 0 349.32501220703125 225"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                className="stroke-1 stroke-[#818597] h-full w-full absolute z-[9] transition-all duration-200"
                style={{ strokeOpacity: "0.15" }}
              >
                <path
                  d="m 0 6 
            a 6 6 0 0 1 6 -6 
            h 250.32501220703125 
            a 16 16 0 0 1 11 5 
            l 77 77 
            a 16 16 0 0 1 5 11 
            v 126 
            a 6 6 0 0 1 -6 6 
            h -337.32501220703125 
            a 6 6 0 0 1 -6 -6 
            z"
                  fill="#fff"
                ></path>
              </svg>

              <div className="z-[100] absolute w-full h-full flex flex-col justify-between pl-5 py-6 pr-8">
                <div>
                  <h3 className="font-mulish font-bold text-deepBlueHead leading-[1.2] text-[1.2rem]">
                    Payment Links
                  </h3>
                  <p className="font-mulish text-grayText mt-6 text-[1rem]">
                    Share payment link via an email, SMS, messenger, chatbot
                    etc. and get paid immediately
                  </p>
                </div>

                <div className="flex items-center cursor-pointer group">
                  <a
                    href="#"
                    className="font-mulish font-bold text-lightBlue500 
                    group-hover:text-grayBlue transition-all duration-200"
                  >
                    Know More
                  </a>
                  <i
                    data-feather="chevron-right"
                    className="w-5 h-5 text-lightBlue500 
                    group-hover:text-grayBlue transition-all duration-200"
                  ></i>
                </div>
              </div>
            </div>
            <div className="w-full min-h-[15rem] relative cursor-pointer">
              <img
                src={paymentLinkIcon}
                alt=""
                className="bg-lightBlue absolute right-3 top-3 w-12 h-12 rounded-full z-[8]
            transition-all duration-200"
              />

              <svg
                viewBox="0 0 349.32501220703125 225"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                className="stroke-1 stroke-[#818597] h-full w-full absolute z-[9] transition-all duration-200"
                style={{ strokeOpacity: "0.15" }}
              >
                <path
                  d="m 0 6 
            a 6 6 0 0 1 6 -6 
            h 250.32501220703125 
            a 16 16 0 0 1 11 5 
            l 77 77 
            a 16 16 0 0 1 5 11 
            v 126 
            a 6 6 0 0 1 -6 6 
            h -337.32501220703125 
            a 6 6 0 0 1 -6 -6 
            z"
                  fill="#fff"
                ></path>
              </svg>

              <div className="z-[100] absolute w-full h-full flex flex-col justify-between pl-5 py-6 pr-8">
                <div>
                  <h3 className="font-mulish font-bold text-deepBlueHead leading-[1.2] text-[1.2rem]">
                    Payment Links
                  </h3>
                  <p className="font-mulish text-grayText mt-6 text-[1rem]">
                    Share payment link via an email, SMS, messenger, chatbot
                    etc. and get paid immediately
                  </p>
                </div>

                <div className="flex items-center cursor-pointer group">
                  <a
                    href="#"
                    className="font-mulish font-bold text-lightBlue500 
                    group-hover:text-grayBlue transition-all duration-200"
                  >
                    Know More
                  </a>
                  <i
                    data-feather="chevron-right"
                    className="w-5 h-5 text-lightBlue500 
                    group-hover:text-grayBlue transition-all duration-200"
                  ></i>
                </div>
              </div>
            </div>
            <div className="w-full min-h-[15rem] relative cursor-pointer">
              <img
                src={paymentLinkIcon}
                alt=""
                className="bg-lightBlue absolute right-3 top-3 w-12 h-12 rounded-full z-[8]
            transition-all duration-200"
              />

              <svg
                viewBox="0 0 349.32501220703125 225"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                className="stroke-1 stroke-[#818597] h-full w-full absolute z-[9] transition-all duration-200"
                style={{ strokeOpacity: "0.15" }}
              >
                <path
                  d="m 0 6 
            a 6 6 0 0 1 6 -6 
            h 250.32501220703125 
            a 16 16 0 0 1 11 5 
            l 77 77 
            a 16 16 0 0 1 5 11 
            v 126 
            a 6 6 0 0 1 -6 6 
            h -337.32501220703125 
            a 6 6 0 0 1 -6 -6 
            z"
                  fill="#fff"
                ></path>
              </svg>

              <div className="z-[100] absolute w-full h-full flex flex-col justify-between pl-5 py-6 pr-8">
                <div>
                  <h3 className="font-mulish font-bold text-deepBlueHead leading-[1.2] text-[1.2rem]">
                    Payment Links
                  </h3>
                  <p className="font-mulish text-grayText mt-6 text-[1rem]">
                    Share payment link via an email, SMS, messenger, chatbot
                    etc. and get paid immediately
                  </p>
                </div>

                <div className="flex items-center cursor-pointer group">
                  <a
                    href="#"
                    className="font-mulish font-bold text-lightBlue500 
                    group-hover:text-grayBlue transition-all duration-200"
                  >
                    Know More
                  </a>
                  <i
                    data-feather="chevron-right"
                    className="w-5 h-5 text-lightBlue500 
                    group-hover:text-grayBlue transition-all duration-200"
                  ></i>
                </div>
              </div>
            </div>
            <div className="w-full min-h-[15rem] relative cursor-pointer">
              <img
                src={paymentLinkIcon}
                alt=""
                className="bg-lightBlue absolute right-3 top-3 w-12 h-12 rounded-full z-[8]
            transition-all duration-200"
              />

              <svg
                viewBox="0 0 349.32501220703125 225"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                className="stroke-1 stroke-[#818597] h-full w-full absolute z-[9] transition-all duration-200"
                style={{ strokeOpacity: "0.15" }}
              >
                <path
                  d="m 0 6 
            a 6 6 0 0 1 6 -6 
            h 250.32501220703125 
            a 16 16 0 0 1 11 5 
            l 77 77 
            a 16 16 0 0 1 5 11 
            v 126 
            a 6 6 0 0 1 -6 6 
            h -337.32501220703125 
            a 6 6 0 0 1 -6 -6 
            z"
                  fill="#fff"
                ></path>
              </svg>

              <div className="z-[100] absolute w-full h-full flex flex-col justify-between pl-5 py-6 pr-8">
                <div>
                  <h3 className="font-mulish font-bold text-deepBlueHead leading-[1.2] text-[1.2rem]">
                    Payment Links
                  </h3>
                  <p className="font-mulish text-grayText mt-6 text-[1rem]">
                    Share payment link via an email, SMS, messenger, chatbot
                    etc. and get paid immediately
                  </p>
                </div>

                <div className="flex items-center cursor-pointer group">
                  <a
                    href="#"
                    className="font-mulish font-bold text-lightBlue500 
                    group-hover:text-grayBlue transition-all duration-200"
                  >
                    Know More
                  </a>
                  <i
                    data-feather="chevron-right"
                    className="w-5 h-5 text-lightBlue500 
                    group-hover:text-grayBlue transition-all duration-200"
                  ></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Section 2 */}
        <div className="relative bg-[url(./images/clone2/feature-section-2BG.svg)] bg-no-repeat bg-cover mt-100 pt-[10rem] pb-[350] h-[1400px]">
          <div className="w-full pb-50 text-center flex-col">
            <h2 className="text-white font-mulish font-bold">
              Explore Razorpay Business Banking
            </h2>
            <div className="bg-greenLight w-6 h-1 my-4 mx-auto text-3xl"></div>
          </div>

          <div id="content" className="w-full">
            <img
              src={xFlame1}
              alt=""
              className="absolute top-[150px] left-[90px] w-[150px]"
            />
            <img
              src={xFlame2}
              alt=""
              className="absolute top-[300px] right-[100px] w-[150px]"
            />
          </div>

          <div className="flex max-md:flex-col justify-center items-center border-slate-700 p-5">
            <div id="textcontent" className="flex-col gap-4">
              <div className="text-2xl font-mulish font-bold text-white gap-3 w-[90%] inline">
                Manage your company's finances with
                <img src={razorPayX} alt="" width="175px" height="26px" />
                <span className="text-greenLight">Business Banking</span>
              </div>

              <ul className="mt-10 text-white">
                <li className="flex align-baseline gap-1 leading-10">
                  <i className="bx bx-check bx-md"></i>
                  <p>Open a full digital current account</p>
                </li>
                <li className="flex align-baseline gap-1 leading-10">
                  <i className="bx bx-check bx-md"></i>
                  <p>Automate payables & compliment payments</p>
                </li>
                <li className="flex align-baseline gap-1 leading-10">
                  <i className="bx bx-check bx-md"></i>
                  <p>Simplify and track spends with Corporate cards</p>
                </li>
                <li className="flex align-baseline gap-1 leading-10">
                  <i className="bx bx-check bx-md"></i>
                  <p>View financial insights at a glance</p>
                </li>
              </ul>

              <div className="flex mt-10">
                <button className=" p-2 rounded text-white group hover: bg-lightBlue500 transition-all duration-200">
                  Sign Up{" "}
                  <i className="bx bx-right-arrow-alt group-hover:bg-lightBlue500"></i>
                </button>

                <div id="hyperlink" className="p-2 rounded text-lightBlue500">
                  <a href="#">
                    Know More{" "}
                    <i className="bx bx-right-arrow-alt group-hover:bg-lightBlue500"></i>
                  </a>
                </div>
              </div>
            </div>

            <div id="img">
              <img src={businessBanking} alt="business banking" />
            </div>
          </div>

          <div
            id="grid-cards"
            className="flex max-lg:flex-col justify-center items-center mx-auto my-10 gap-3 max-lg:hidden"
          >
            <div className="w-full min-h-[13rem] max-w-[28%] relative gap-3 cursor-pointer">
              <img
                src={paymentLinkIcon}
                alt=""
                className="bg-lightBlue absolute right-3 top-3 w-12 h-12 rounded-full z-[8]
      transition-all duration-200"
              />

              <svg
                viewBox="0 0 349.32501220703125 225"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                className="stroke-1 stroke-[#818597] h-full w-full absolute z-[9] transition-all duration-200"
                style={{ strokeOpacity: "0.15" }}
              >
                <path
                  d="m 0 6 
      a 6 6 0 0 1 6 -6 
      h 250.32501220703125 
      a 16 16 0 0 1 11 5 
      l 77 77 
      a 16 16 0 0 1 5 11 
      v 126 
      a 6 6 0 0 1 -6 6 
      h -337.32501220703125 
      a 6 6 0 0 1 -6 -6 
      z"
                  fill="#fff"
                ></path>
              </svg>

              <div className="z-[100] absolute w-full h-full flex flex-col justify-between pl-5 py-6 pr-8">
                <div>
                  <h3 className="font-mulish font-bold text-deepBlueHead leading-[1.2] text-[1.2rem]">
                    Current Account
                  </h3>
                  <p className="font-mulish text-grayText mt-6 text-[1rem]">
                    Current accounts for fast-growing businesses, supported by
                    the best-in-class technology
                  </p>
                </div>

                <div className="flex items-center cursor-pointer group">
                  <a
                    href="#"
                    className="font-mulish font-bold text-lightBlue500 
              group-hover:text-grayBlue transition-all duration-200"
                  >
                    Know More
                  </a>
                  <i
                    data-feather="chevron-right"
                    className="w-5 h-5 text-lightBlue500 
              group-hover:text-grayBlue transition-all duration-200"
                  ></i>
                </div>
              </div>
            </div>
            <div className="w-full min-h-[13rem] max-w-[28%] relative gap-3 cursor-pointer">
              <img
                src={paymentLinkIcon}
                alt=""
                className="bg-lightBlue absolute right-3 top-3 w-12 h-12 rounded-full z-[8]
      transition-all duration-200"
              />

              <svg
                viewBox="0 0 349.32501220703125 225"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                className="stroke-1 stroke-[#818597] h-full w-full absolute z-[9] transition-all duration-200"
                style={{ strokeOpacity: "0.15" }}
              >
                <path
                  d="m 0 6 
      a 6 6 0 0 1 6 -6 
      h 250.32501220703125 
      a 16 16 0 0 1 11 5 
      l 77 77 
      a 16 16 0 0 1 5 11 
      v 126 
      a 6 6 0 0 1 -6 6 
      h -337.32501220703125 
      a 6 6 0 0 1 -6 -6 
      z"
                  fill="#fff"
                ></path>
              </svg>

              <div className="z-[100] absolute w-full h-full flex flex-col justify-between pl-5 py-6 pr-8">
                <div>
                  <h3 className="font-mulish font-bold text-deepBlueHead leading-[1.2] text-[1.2rem]">
                    Capital & Credit
                  </h3>
                  <p className="font-mulish text-grayText mt-6 text-[1rem]">
                    Instant additional cash and corporate cards designed for
                    growing businesses
                  </p>
                </div>

                <div className="flex items-center cursor-pointer group">
                  <a
                    href="#"
                    className="font-mulish font-bold text-lightBlue500 
              group-hover:text-grayBlue transition-all duration-200"
                  >
                    Know More
                  </a>
                  <i
                    data-feather="chevron-right"
                    className="w-5 h-5 text-lightBlue500 
              group-hover:text-grayBlue transition-all duration-200"
                  ></i>
                </div>
              </div>
            </div>
            <div className="w-full min-h-[13rem] max-w-[28%] relative gap-3 cursor-pointer">
              <img
                src={paymentLinkIcon}
                alt=""
                className="bg-lightBlue absolute right-3 top-3 w-12 h-12 rounded-full z-[8]
      transition-all duration-200"
              />

              <svg
                viewBox="0 0 349.32501220703125 225"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                className="stroke-1 stroke-[#818597] h-full w-full absolute z-[9] transition-all duration-200"
                style={{ strokeOpacity: "0.15" }}
              >
                <path
                  d="m 0 6 
      a 6 6 0 0 1 6 -6 
      h 250.32501220703125 
      a 16 16 0 0 1 11 5 
      l 77 77 
      a 16 16 0 0 1 5 11 
      v 126 
      a 6 6 0 0 1 -6 6 
      h -337.32501220703125 
      a 6 6 0 0 1 -6 -6 
      z"
                  fill="#fff"
                ></path>
              </svg>

              <div className="z-[100] absolute w-full h-full flex flex-col justify-between pl-5 py-6 pr-8">
                <div>
                  <h3 className="font-mulish font-bold text-deepBlueHead leading-[1.2] text-[1.2rem]">
                    Payouts
                  </h3>
                  <p className="font-mulish text-grayText mt-6 text-[1rem]">
                    Make simple, reliable & secure payouts to bank accounts, UPI
                    Ids or wallets
                  </p>
                </div>

                <div className="flex items-center cursor-pointer group">
                  <a
                    href="#"
                    className="font-mulish font-bold text-lightBlue500 
              group-hover:text-grayBlue transition-all duration-200"
                  >
                    Know More
                  </a>
                  <i
                    data-feather="chevron-right"
                    className="w-5 h-5 text-lightBlue500 
              group-hover:text-grayBlue transition-all duration-200"
                  ></i>
                </div>
              </div>
            </div>
          </div>

          <div
            id="check-demo"
            className="w-11/12 px-3 py-2 flex max-md:flex-col justify-center items-center gap-5 bg-deepBlue mx-auto border rounded-sm border-slate-700"
          >
            <p className="text-white">
              Checkout the live demo to learn how RazorpayX works. No Sign-up
              required !
            </p>
            <button className="p-2 rounded text-white group hover: bg-lightBlue500 transition-all duration-200">
              Check out the Demo
              <i className="bx  bx-right-arrow-alt group-hover:bg-lightBlue500"></i>
            </button>
          </div>
        </div>

        {/* new features */}
        <div className="w-11/12 mx-auto flex justify-center items-center mt-100">
          <div className="relative place-content-center grid grid-cols-3 max-lg:grid-cols-2 max-lg:grid-rows-4 max-sm:grid-cols-1 max-sm:grid-rows-8 mx-auto w-[75%] mb-10">
            <div className="w-[50%] h-[200px]">
              <p className="font-bold text-3xl">
                New in the <span className="text-lightBlue300">Razorpay</span>{" "}
                Product Suite
              </p>
            </div>

            <div className="flex-col gap-y-2 w-[250px]  transition-all duration-200 hover:scale-110">
              <img src={razorpayXIcon} alt="razorpay x icon" />
              <h3 className="text-xl font-bold">Corporate Cards</h3>
              <p>
                Simplify your recurring, international and team expresses in
                savings on every spend. Sums upto 10 lacs every month.
              </p>

              <a href="#" className="text-lightBlue300">
                Know More{" "}
                <i className="bx bx-right-arrow-alt group-hover:bg-lightBlue500"></i>
              </a>
            </div>
            <div className="flex-col gap-y-2 w-[250px]  transition-all duration-200 hover:scale-110">
              <img src={razorpayXIcon} alt="razorpay x icon" />
              <h3 className="text-xl font-bold">Corporate Cards</h3>
              <p>
                Simplify your recurring, international and team expresses in
                savings on every spend. Sums upto 10 lacs every month.
              </p>

              <a href="#" className="text-lightBlue300">
                Know More{" "}
                <i className="bx bx-right-arrow-alt group-hover:bg-lightBlue500"></i>
              </a>
            </div>
            <div className="flex-col gap-y-2 w-[250px] transition-all duration-200 hover:scale-110">
              <img src={razorpayXIcon} alt="razorpay x icon" />
              <h3 className="text-xl font-bold">Corporate Cards</h3>
              <p>
                Simplify your recurring, international and team expresses in
                savings on every spend. Sums upto 10 lacs every month.
              </p>

              <a href="#" className="text-lightBlue300">
                Know More{" "}
                <i className="bx bx-right-arrow-alt group-hover:bg-lightBlue500"></i>
              </a>
            </div>
            <div className="flex-col gap-y-2 w-[250px] transition-all duration-200 hover:scale-110">
              <img src={razorpayXIcon} alt="razorpay x icon" />
              <h3 className="text-xl font-bold">Corporate Cards</h3>
              <p>
                Simplify your recurring, international and team expresses in
                savings on every spend. Sums upto 10 lacs every month.
              </p>

              <a href="#" className="text-lightBlue300">
                Know More{" "}
                <i className="bx bx-right-arrow-alt group-hover:bg-lightBlue500"></i>
              </a>
            </div>
            <div className="flex-col gap-y-2 w-[250px] transition-all duration-200 hover:scale-110">
              <img src={razorpayXIcon} alt="razorpay x icon" />
              <h3 className="text-xl font-bold">Corporate Cards</h3>
              <p>
                Simplify your recurring, international and team expresses in
                savings on every spend. Sums upto 10 lacs every month.
              </p>

              <a href="#" className="text-lightBlue300">
                Know More{" "}
                <i className="bx bx-right-arrow-alt group-hover:bg-lightBlue500"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="w-full min-h-max bg-blue-600 bg-no-repeat bg-cover mt-10">
          <div className="flex-col gap-[5rem] mx-auto justify-center py-10 w-11/12 min-h-max">
            <h2 className="text-center font-mulish mx-auto font-bold text-xl text-white">
              Features
            </h2>
            <div className="h-1 w-6 bg-greenLight mx-auto mt-3"></div>
            <p className="text-center mx-auto text-white">
              Empower your business with all the right tools to accept <br />
              online payments and provide the best customer experience
            </p>

            <div className="w-full grid grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1 place-content-center mx-auto my-5 gap-5">
              <div className="flex-col justify-start items-center p-4 text-white">
                <img src={instantActivationButton} alt="" width="40px" />
                <h3 className="text-l font-bold font-mulish">
                  Instant Activation
                </h3>
                <p className="text-sm ">
                  Get activated and transact within 2 minutes. Completely online
                  onboarding with premium documentation
                </p>
              </div>
              <div className="flex-col justify-start items-center p-4 text-white">
                <img src={instantActivationButton} alt="" width="40px" />
                <h3 className="text-l font-bold font-mulish">
                  Instant Activation
                </h3>
                <p className="text-sm ">
                  Get activated and transact within 2 minutes. Completely online
                  onboarding with premium documentation
                </p>
              </div>
              <div className="flex-col justify-start items-center p-4 text-white">
                <img src={instantActivationButton} alt="" width="40px" />
                <h3 className="text-l font-bold font-mulish">
                  Instant Activation
                </h3>
                <p className="text-sm ">
                  Get activated and transact within 2 minutes. Completely online
                  onboarding with premium documentation
                </p>
              </div>
              <div className="flex-col justify-start items-center p-4 text-white">
                <img src={instantActivationButton} alt="" width="40px" />
                <h3 className="text-l font-bold font-mulish">
                  Instant Activation
                </h3>
                <p className="text-sm ">
                  Get activated and transact within 2 minutes. Completely online
                  onboarding with premium documentation
                </p>
              </div>
              <div className="flex-col justify-start items-center p-4 text-white">
                <img src={instantActivationButton} alt="" width="40px" />
                <h3 className="text-l font-bold font-mulish">
                  Instant Activation
                </h3>
                <p className="text-sm ">
                  Get activated and transact within 2 minutes. Completely online
                  onboarding with premium documentation
                </p>
              </div>
              <div className="flex-col justify-start items-center p-4 text-white">
                <img src={instantActivationButton} alt="" width="40px" />
                <h3 className="text-l font-bold font-mulish">
                  Instant Activation
                </h3>
                <p className="text-sm ">
                  Get activated and transact within 2 minutes. Completely online
                  onboarding with premium documentation
                </p>
              </div>
              <div className="flex-col justify-start items-center p-4 text-white">
                <img src={instantActivationButton} alt="" width="40px" />
                <h3 className="text-l font-bold font-mulish">
                  Instant Activation
                </h3>
                <p className="text-sm ">
                  Get activated and transact within 2 minutes. Completely online
                  onboarding with premium documentation
                </p>
              </div>
              <div className="flex-col justify-start items-center p-4 text-white">
                <img src={instantActivationButton} alt="" width="40px" />
                <h3 className="text-l font-bold font-mulish">
                  Instant Activation
                </h3>
                <p className="text-sm ">
                  Get activated and transact within 2 minutes. Completely online
                  onboarding with premium documentation
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* sliding companies section */}
        <div className=" w-full min-h-max flex justify-center items-center bg-white my-20">
          <div className="flex justify-center items-center max-lg:flex-col max-lg:my-10 gap-5 w-11/12 mx-auto">
            <div className="flex-col justify-center p-4 ">
              <h3 className="font-mulish font-bold text-2xl text-deepBlue">
                Join the 50,00,000+ businesses using Razorpay
              </h3>
              <div className="h-1 w-6 bg-greenLight my-5"></div>
              <p className="mt-3 opacity-70">
                We make it easier for you to focus on building grate products
                while we work on simlifying the payments for you
              </p>
              <p className="mt-3 opacity-70">
                Focus on your business while we handle the complexity of
                playments for you
              </p>
            </div>

            <div className="companyList relative w-[500px] h-[500px] overflow-hidden">
              <img
                src={companies}
                alt="companies"
                width="500px"
                className="absolute"
              />
            </div>
          </div>
        </div>

        {/* Testimonial Section */}
        <section className="relative flex flex-col justify-center items-center mx-auto">
          <div className="w-11/12 flex flex-col justify-center items-center mx-auto py-20">
            <img src={dottedRows} alt="" className="" />

            <h2 className="font-mulish font-extrabold text-2xl text-deepBlueHead text-center">
              An Experience
              <br />
              People Love to Talk About
            </h2>
            <div className="w-6 h-1 bg-greenLight mx-auto my-4"></div>

            <button
              className="w-[100px] h-[100px] bg-[#f4f8ff] rounded-full absolute left-0 top-1/2
     flex justify-center items-center "
            >
              <div
                className="w-[65%] h-[65%] bg-[#f4f8ff] rounded-full flex justify-center items-center
      mix-blend-multiply"
              >
                <i
                  data-feather="chevron-right"
                  className="stroke-[5px] w-6 h-6  text-gray-400 rotate-180"
                ></i>
              </div>
            </button>

            <button
              className="w-[100px] h-[100px] bg-[#f4f8ff] rounded-full absolute right-0 top-1/2
    flex justify-center items-center "
            >
              <div
                className="w-[65%] h-[65%] bg-[#f4f8ff] rounded-full flex justify-center items-center
          mix-blend-multiply"
              >
                <i
                  data-feather="chevron-right"
                  className="stroke-[5px] w-6 h-6  text-gray-400"
                ></i>
              </div>
            </button>

            <div className="flex max-lg:flex-col max-lg:gap-10 justify-center items-center mx-auto my-20 gap-20">
              <img
                src={testimonial}
                alt=""
                height="320px"
                width="320px"
                className="rounded-xl"
              />

              <div className="max-w-[400px]">
                <img
                  src={quotes}
                  alt=""
                  width="35px"
                  height="40px"
                  className="-mb-2"
                />
                <p className="font-mulish text-3xl font-extralight">
                  Readymade Closed Wallet Solution For Quick Refunds
                </p>
                <a href="#" className="text-grayText italic underline">
                  Learn More
                </a>
                <p className="font-mulish font-extrabold text-2xl">
                  Lorem Ipsum
                </p>
                <p className="font-mulish font-medium">
                  CEO, XYZ Engineering Company
                </p>
                <img src={fakeCompanyLogo} alt="" width="80px" height="40px" />
              </div>
            </div>

            <div className="w-full flex flex-row mx-auto space-x-2 justify-center">
              <div className="h-[10px] w-[10px] bg-gray-300 rounded-full"></div>

              <div className="h-[10px] w-[10px] bg-lightBlue300 rounded-full"></div>

              <div className="h-[10px] w-[10px] bg-gray-300 rounded-full"></div>

              <div className="h-[10px] w-[10px] bg-gray-300 rounded-full"></div>

              <div className="h-[10px] w-[10px] bg-gray-300 rounded-full"></div>

              <div className="h-[10px] w-[10px] bg-gray-300 rounded-full"></div>
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="bg-deepBlueHead w-full h-full bg-no-repeat bg-cover relative ctaSection min-h-[510px]">
          <div className="w-11/12 max-w-[1080px] relative flex max-lg:flex-col items-center mx-auto justify-center space-x-20 pt-16">
            <div className="flex flex-col gap-5 mt-12 max-w-[600px]">
              <h2 className="font-mulish font-bold text-2xl text-white">
                Supercharge your business with Razorpay
              </h2>
              <div className="w-6 h-1 bg-greenLight"></div>
              <p className="font-mulish text-white">
                Sign up now to experience the future of payments and offer{" "}
                <br /> your customers the best checkout experience.
              </p>

              <ul className="flex flex-row max-lg:flex-col flex-wrap gap-x-11 text-white gap-y-3">
                <li className="font-mulish text-white flex flex-row ">
                  <i data-feather="check" className="text-greenLight"></i>
                  <span>Quick Onboarding</span>
                </li>
                <li className="font-mulish text-white flex flex-row ">
                  <i data-feather="check" className="text-greenLight"></i>
                  <span>Access to entire product suite</span>
                </li>
                <li className="font-mulish text-white flex flex-row ">
                  <i data-feather="check" className="text-greenLight"></i>
                  <span>API access</span>
                </li>
                <li className="font-mulish text-white flex flex-row ">
                  <i data-feather="check" className="text-greenLight"></i>
                  <span>24x7 support</span>
                </li>
              </ul>

              <button
                className="min-w-[32px] font-mulish text-sm font-bold bg-white text-lightBlue300 border flex
          rounded-sm items-center hover:text-lightBlue500 transition-all duration-200 py-3 px-4 place-self-start"
              >
                Sign Up
                <svg
                  viewBox="0 0 24 24"
                  focusable="false"
                  className="w-[14px] h-[14px] ml-3"
                >
                  <path
                    fill="currentColor"
                    d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"
                  ></path>
                </svg>
              </button>
            </div>
            <img
              src={ctaImg}
              alt=""
              width="240px"
              height="282px"
              className="mt-16 pt-3"
            />
          </div>
        </section>

        {/* Footer */}
        <footer
          style={{background: "linear-gradient(to right, #eef9fe, #edf7ff)"}}
          className="-mt-[400px] md:-mt-[300px]"
        >
          <div className="w-10/12 pt-[400px] pb-10 md:pt-[350px] md:my-0 md:w-11/12 max-w-[1080px] mx-auto flex flex-col space-y-6 lg:space-y-0 lg:space-x-4 lg:flex-row justify-between">
            <div className="flex flex-col mx-auto md:max-w-[340px] lg:max-w-[260px]">
              <img
                src={darkLogo}
                loading="lazy"
                width="120px"
                height="24px"
              />
              <p className="text-sm text-grayText my-3 font-mulish">
                Razorpay is the only payments solution in India that allows
                businesses to accept, process and disburse payments with its
                product suite. It gives you access to all payment modes
                including credit card, debit card, netbanking, UPI and popular
                wallets including JioMoney, Mobikwik, Airtel Money, FreeCharge,
                Ola Money and PayZapp.
              </p>
              <p className="text-sm text-grayText my-3 font-mulish">
                RazorpayX supercharges your business banking experience,
                bringing effectiveness, efficiency, and excellence to all
                financial processes. With RazorpayX, businesses can get access
                to fully-functional current accounts, supercharge their payouts
                and automate payroll compliance.
              </p>
              <p className="text-sm text-grayText my-3 font-mulish">
                Manage your marketplace, automate bank transfers, collect
                recurring payments, share invoices with customers and avail
                working capital loans - all from a single platform. Fast forward
                your business with Razorpay.
              </p>
              <p className="text-[0.625rem] text-grayText my-3 font-mulish">
                Disclaimer: The RazorpayX powered Current Account and VISA
                corporate credit card are provided by RBI licensed banks. Your
                RazorpayX powered account is provided by our partner bank, in
                accordance with RBI regulations. RazorpayX itself is not a bank
                and doesn't hold or claim to hold a banking license.
              </p>
              <p className="font-mulish uppercase font-bold text-gray2">
                Subscribe to our newsletter
              </p>
              <form className="relative bg-white w-[260px] mt-2 mb-4">
                <input
                  placeholder="Your email address"
                  className="pr-16 font-mulish border-gray-300 outline-lightBlue focus:outline-lightBlue placeholder:text-sm py-2 px-4 border rounded-sm transition-all duration-200"
                />
                <button className="h-[90%] bg-white absolute right-[1.5px] top-1/2 -translate-y-1/2 z-10 font-mulish text-sm font-bold text-lightBlue300 flex rounded-sm items-center hover:text-lightBlue500 transition-all duration-200">
                  Subscribe
                  <svg
                    viewBox="0 0 24 24"
                    focusable="false"
                    className="w-[14px] h-[14px] ml-3"
                  >
                    <path
                      fill="currentColor"
                      d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"
                    ></path>
                  </svg>
                </button>
              </form>
              <div className="flex items-start space-x-4">
                <img
                  src={footerCertificate1}
                  loading="lazy"
                  width="92"
                  height="40"
                  className="cursor-pointer"
                />
                <img
                  src={footerCertificate1}
                  loading="lazy"
                  width="122"
                  height="80"
                  className="cursor-pointer"
                />
              </div>
            </div>
            <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4 justify-between">
              <div className="space-y-3">
                <div>
                  <p className="font-mulish uppercase font-bold text-gray2 mb-1">
                    BANKING PLUS
                  </p>
                  <ul className="space-y-2">
                    <li>
                      <a
                        href="#"
                        className="font-mulish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                      >
                        RazorpayX
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="font-mulish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                      >
                        Current Accounts
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="font-mulish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                      >
                        Payouts
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="font-mulish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                      >
                        Payout Links
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="font-mulish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                      >
                        Corporate Credit Card
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="relative font-mulish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                      >
                        View Live Demo
                        <span className="text-white font-mulish uppercase bg-green-500 rounded-sm text-xs font-bold p-1">
                          New
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="font-mulish uppercase font-bold text-gray2 mb-1">
                    LENDING
                  </p>
                  <ul className="space-y-2">
                    <li>
                      <a
                        href="#"
                        className="font-mulish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                      >
                        Razorpay Capital
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="font-mulish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                      >
                        Instant Settlements
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="font-mulish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                      >
                        Working Capital Loans
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="font-mulish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                      >
                        Marketplace Instant Settlements
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="font-mulish uppercase font-bold text-gray2 mb-1">
                    RISK & FRAUD
                  </p>
                  <ul className="space-y-2">
                    <li>
                      <a
                        href="#"
                        className="font-mulish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                      >
                        Thirdwatch
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="relative font-mulish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                      >
                        PrePay CoD
                        <span className="text-white font-mulish uppercase bg-green-500 rounded-sm text-xs font-bold p-1">
                          New
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="font-mulish uppercase font-bold text-gray2 mb-1">
                    BECOME A PARTNER
                  </p>
                  <ul className="space-y-2">
                    <li>
                      <a
                        href="#"
                        className="font-mulish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                      >
                        Refer and Earn
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="font-mulish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                      >
                        Onboarding APIs
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="font-mulish uppercase font-bold text-gray2 mb-1">
                    MORE
                  </p>
                  <ul className="space-y-2">
                    <li>
                      <a
                        href="#"
                        className="font-mulish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                      >
                        Route
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="font-mulish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                      >
                        Invoices
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="font-mulish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                      >
                        Freelancer Payments
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="font-mulish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                      >
                        International
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="font-mulish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                      >
                        Flash Checkout
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="font-mulish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                      >
                        UPI
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="font-mulish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                      >
                        ePOS
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="font-mulish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                      >
                        Checkout Demo
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="font-mulish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                      >
                        RazorpayX Payroll
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="space-y-3">
                <div>
                  <p className="font-mulish uppercase font-bold text-gray2 mb-1">
                    ACCEPT PAYMENTS
                  </p>
                  <ul className="space-y-2">
                    <li>
                      <a
                        href="#"
                        className="font-mulish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                      >
                        Payment Gateway
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="font-mulish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                      >
                        Payment Pages
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="font-mulish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                      >
                        Payment Links
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="font-mulish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                      >
                        QR Codes
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="font-mulish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                      >
                        Subscriptions
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="font-mulish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                      >
                        Smart Collect
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="font-mulish uppercase font-bold text-gray2 mb-1">
                    DEVELOPERS
                  </p>
                  <ul className="space-y-2">
                    <li>
                      <a
                        href="#"
                        className="font-mulish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                      >
                        Docs
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="font-mulish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                      >
                        Integrations
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="font-mulish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                      >
                        API Reference
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="font-mulish uppercase font-bold text-gray2 mb-1">
                    RESOURCES
                  </p>
                  <ul className="space-y-2">
                    <li>
                      <a
                        href="#"
                        className="font-mulish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                      >
                        Blog
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="relative font-mulish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                      >
                        Customer Stories
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="relative font-mulish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                      >
                        Events
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="relative font-mulish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                      >
                        Chargeback Guide
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="relative font-mulish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                      >
                        Settlement Guide
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="font-mulish uppercase font-bold text-gray2 mb-1">
                    SOLUTIONS
                  </p>
                  <ul className="space-y-2">
                    <li>
                      <a
                        href="#"
                        className="font-mulish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                      >
                        Education
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="font-mulish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                      >
                        E-commerce
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="font-mulish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                      >
                        Saas
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="font-mulish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                      >
                        BFSI
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="font-mulish uppercase font-bold text-gray2 mb-1">
                    FREE TOOLS
                  </p>
                  <ul className="space-y-2">
                    <li>
                      <a
                        href="#"
                        className="font-mulish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                      >
                        GST Calculator
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="font-mulish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                      >
                        Online TDS Payment
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="relative font-mulish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                      >
                        GST Number Search
                        <span className="text-white font-mulish uppercase bg-green-500 rounded-sm text-xs font-bold p-1">
                          New
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <div>
                  <p className="font-mulish uppercase font-bold text-gray2 mb-1">
                    COMPANY
                  </p>
                  <ul className="space-y-2">
                    <li>
                      <a
                        href="#"
                        className="font-mulish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                      >
                        About Us
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="font-mulish relative font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                      >
                        Careers
                        <span className="text-white font-mulish bg-green-500 rounded-sm text-xs font-bold p-1">
                          We're hiring!
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="font-mulish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                      >
                        Terms of Use
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="font-mulish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                      >
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="font-mulish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                      >
                        Grievance Redressal
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="font-mulish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                      >
                        Responsible Disclosure
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="font-mulish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                      >
                        Partners
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="font-mulish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                      >
                        White Papers
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="font-mulish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                      >
                        Corporate Information
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="font-mulish uppercase font-bold text-gray2 mb-1 mt-3">
                    HELP & SUPPORT
                  </p>
                  <ul className="space-y-2">
                    <li>
                      <a
                        href="#"
                        className="font-mulish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                      >
                        Support
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="font-mulish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                      >
                        Knowledge base
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="font-mulish uppercase font-bold text-gray2 mb-1 mt-6">
                    FIND US ONLINE
                  </p>
                  <ul className="flex space-x-4 items-center mt-4">
                    <li className="cursor-pointer">
                      <a>
                        <img
                          src={facebookIcon}
                          width="24"
                          height="24"
                          loading="lazy"
                        />
                      </a>
                    </li>
                    <li className="cursor-pointer">
                      <a>
                        <img
                          src={twitterIcon}
                          width="24"
                          height="24"
                          loading="lazy"
                        />
                      </a>
                    </li>
                    <li className="cursor-pointer">
                      <a>
                        <img
                          src={instagramIcon}
                          width="24"
                          height="24"
                          loading="lazy"
                        />
                      </a>
                    </li>
                    <li className="cursor-pointer">
                      <a>
                        <img
                          src={githubIcon}
                          width="24"
                          height="24"
                          loading="lazy"
                        />
                      </a>
                    </li>
                    <li className="cursor-pointer">
                      <a>
                        <img
                          src={linkedinIcon}
                          width="24"
                          height="24"
                          loading="lazy"
                        />
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="font-mulish uppercase font-bold text-gray2 mb-1 mt-6">
                    REGD. OFFICE ADDRESS
                  </p>
                  <p className="font-mulish text-sm mt-4 whitespace-nowrap">
                    Razorpay Software Private Limited, <br />
                    1st Floor, SJR Cyber,
                    <br />
                    22 Laskar Hosur Road, Adugodi, <br />
                    Bengaluru, 560030,
                    <br />
                    Karnataka, India <br />
                    CIN: U72200KA2013PTC097389
                  </p>
                  <div className="font-mulish mt-6">
                    <p className="text-sm">© Razorpay 2022</p>
                    <p className="text-sm">All Rights Reserved</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
