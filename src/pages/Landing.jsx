import { useEffect } from "react";

import MarketingServices from "../components/ExpertiseGrid";
import CommentForm from "../components/CommentsForm";

import s1 from "../assets/images/services/1.png";
import s2 from "../assets/images/services/2.png";
import s3 from "../assets/images/services/3.png";
import s4 from "../assets/images/services/4.png";
import s5 from "../assets/images/services/5.png";
import s6 from "../assets/images/services/6.png";

import {
  CircleCheck,
  Users,
  Headphones,
  PartyPopper,
  Code,
  Printer
} from "lucide-react";

function Landing() {
  const blogs = [
    {
      id: 1,
      price: "Rs.75/sq.ft.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800",
      title: "Premium Flags & Banners",
      content:
        "Show your brand's strength with premium flags in Satin, Coated Satin, and Metrital materials. Perfect for corporate events, exhibitions, and outdoor branding. Wave your brand with style - high quality, perfect colors, and quick service guaranteed.",
    },
    {
      id: 2,
      price: "Starting Rs.1800/pack",
      image: "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?w=800",
      title: "Eyelets - Bulk Orders Available",
      content:
        "Premium quality eyelets perfect for your projects with durability and quality guaranteed. 750 eyelets per pack at Rs.1800 with special discounts available for bulk orders. Available now in both gold and silver finishes.",
    },
    {
      id: 3,
      price: "Custom Pricing",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800",
      title: "X Banners & Pull-Up Banners",
      content:
        "Stand out and stay visible with our portable, durable, and eye-catching X Banners and Pull-Up Banners that carry your brand everywhere. Perfect for events, exhibitions, and promotions with professional finish.",
    },
    {
      id: 4,
      price: "Custom Pricing",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800",
      title: "Sublimation Printing Solutions",
      content:
        "Custom corporate wear, branded t-shirts & uniforms, and event & promotional printing. Perfect for team uniforms, sports jerseys, and promotional merchandise with vibrant, long-lasting prints on various materials.",
    },
    {
      id: 5,
      price: "Custom Pricing",
      image: "https://images.unsplash.com/photo-1563906267088-b029e7101114?w=800",
      title: "Laser Cutting & Engraving",
      content:
        "Cut, engrave, and impress - any material, any surface, your idea, our craft. We bring your designs to life with laser precision on acrylic, wood, leather, regiform, and plastic. Ideal for branding, displays, and custom creations.",
    },
    {
      id: 6,
      price: "Custom Pricing",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800",
      title: "Digital & UV Printing",
      content:
        "Flex & PVC stickers, one-way vision stickers, corrugated/sun board, and clear stickers. Premium prints with perfect finish and fast delivery. UV printing with luxury finish and long-lasting durability that shines.",
    },
  ];

  const services = [
    { id: 1, title: "Digital Printing" },
    { id: 2, title: "UV Printing" },
    { id: 3, title: "Offset Printing" },
    { id: 4, title: "Sublimation Printing" },
    { id: 5, title: "Laser Cutting & Engraving" },
    { id: 6, title: "Flags & Banners" },
    { id: 7, title: "Event Branding" },
    { id: 8, title: "Corporate Branding" },
    { id: 9, title: "Custom Merchandise" },
  ];

  const cards = [
    {
      cid: "card-1",
      title: "Fast",
      description:
        "Quick turnaround times without compromising on quality. We deliver your printing needs on schedule.",
      icon: "⚡",
    },
    {
      cid: "card-2",
      title: "Flawless",
      description:
        "Perfect finish every time. Our attention to detail ensures premium quality prints that exceed expectations.",
      icon: "✨",
    },
    {
      cid: "card-3",
      title: "Reliable",
      description:
        "Your trusted printing partner that never lets you down. Consistent quality and dependable service.",
      icon: "🛡️",
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      const lastCard = document.getElementById("card-3");
      if (!lastCard) return;

      if (window.innerWidth <= 1023) {
        lastCard.style.display = "none";
      } else {
        lastCard.style.display = "";
      }
      const middleCard = document.getElementById("card-2");
      if (!middleCard) return;

      if (window.innerWidth <= 767) {
        middleCard.style.display = "none";
      } else {
        middleCard.style.display = "";
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  });

  return (
    <div className="overflow-x-hidden">
      {/*banner*/}
      <div
        className="relative min-h-[85dvh] bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1611329532992-0f91ca8e3d52?w=1920")`,
        }}
      >
        {/* Backdrop */}
        <div className="absolute w-full h-full bg-black opacity-70"></div>
        
        {/* Hero Content */}
        <div className="px-12 py-16 max-sm:py-6 max-sm:px-6 h-[65dvh] max-sm:h-[85dvh] flex items-center xl:w-2/3">
          <div className="grid gap-12 max-[425px]:gap-6">
            <div className="relative z-10 flex flex-col gap-6">
              <h1 className="text-6xl font-bold leading-tight text-white max-md:text-5xl max-sm:text-4xl">
                <span className="text-[#d70e1d]">M2 </span>Productions
              </h1>
              <p className="text-xl text-white max-sm:text-lg">
                Your Brand, Printed to Perfection
              </p>

              <div className="grid grid-cols-3 max-sm:grid-cols-2 gap-4 max-[425px]:gap-2">
                {services.map((service) => (
                  <div key={service.id} className="flex items-center w-fit">
                    <div className="text-[#d70e1d] mr-3">
                      <CircleCheck />
                    </div>
                    <span className="text-white max-sm:text-sm max-[425px]:text-xs">
                      {service.title}
                    </span>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-col items-start justify-between gap-3">
                <p className="text-justify text-white">
                  Transform your business with our expertise! We harness the power of latest technology for unparalleled service. From digital printing to laser engraving, we create bold impressions that make your brand stand out.
                </p>
                <div className="flex gap-4">
                  <a
                    href="tel:0777574766"
                    className="px-6 py-3 h-fit text-white flex justify-center items-center transition-colors bg-[#d70e1d] border-2 border-[#d70e1d] rounded-md hover:bg-transparent hover:text-[#d70e1d]"
                  >
                    Call Now
                  </a>
                  <a
                    href="mailto:mm2produ@gmail.com"
                    className="px-6 py-3 h-fit text-[#d70e1d] flex justify-center items-center transition-colors bg-transparent border-2 border-[#d70e1d] rounded-md hover:bg-[#d70e1d] hover:text-white"
                  >
                    Email Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Service Cards */}
        <div className="absolute bottom-0 left-0 right-0 bg-transparent cursor-pointer max-sm:hidden">
          <div className="px-12 pb-6 mx-auto max-sm:px-6 max-w-7xl">
            <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-2 max-md:grid-cols-1">
              {cards.map((card) => (
                <div
                  key={card.title}
                  id={card.cid}
                  className="p-6 flex items-center gap-6 transition-all rounded-lg bg-white shadow-lg hover:shadow-xl"
                >
                  <div className="text-3xl">{card.icon}</div>
                  <div>
                    <h3 className="mb-2 text-xl font-semibold">{card.title}</h3>
                    <p className="text-sm text-gray-600">{card.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="absolute flex-col hidden gap-3 top-8 right-12 max-md:hidden">
          <a
            href="https://www.facebook.com/Mm2productionsnawinna"
            className="flex items-center justify-center w-10 h-10 transition-all delay-75 bg-white rounded-full shadow-lg cursor-pointer hover:text-[#d70e1d]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
            </svg>
          </a>
          <a
            href="https://www.instagram.com/m2productions"
            className="flex items-center justify-center w-10 h-10 transition-all delay-75 bg-white rounded-full shadow-lg cursor-pointer hover:text-[#d70e1d]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
            </svg>
          </a>
          <a
            href="https://www.tiktok.com/@m2productions"
            className="flex items-center justify-center w-10 h-10 transition-all delay-75 bg-white rounded-full shadow-lg cursor-pointer hover:text-[#d70e1d]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z"/>
            </svg>
          </a>
        </div>
      </div>

      {/*About*/}
      <div className="flex items-center md:px-6 justify-center">
        <div className="flex max-w-7xl flex-col gap-6 py-12 max-md:p-6">
          {/*about company*/}
          <span className="text-lg text-[#d70e1d] flex gap-3 items-center">
            <span className="flex">
              <span className="w-2 h-2 bg-[#d70e1d] rounded-full z-10"></span>
              <span className="w-2 h-2 -ml-1 bg-black rounded-full"></span>
            </span>
            About M2 Productions
            <span className="flex">
              <span className="w-2 h-2 bg-[#d70e1d] rounded-full z-10"></span>
              <span className="w-2 h-2 -ml-1 bg-black rounded-full"></span>
            </span>
          </span>
          <p className="text-2xl text-justify max-md:text-xl max-sm:text-lg">
            M2 Productions is your trusted indoor & outdoor advertising company based in Nawinna, Maharagama. We specialize in digital printing solutions that transform your business with cutting-edge technology and unparalleled service. We don't just print - we create bold impressions that help your brand stand out in today's competitive market.
          </p>
          <span className="text-lg text-[#d70e1d] flex gap-3 items-center">
            <span className="flex">
              <span className="w-2 h-2 bg-[#d70e1d] rounded-full z-10"></span>
              <span className="w-2 h-2 -ml-1 bg-black rounded-full"></span>
            </span>
            Why Choose M2 Productions
            <span className="flex">
              <span className="w-2 h-2 bg-[#d70e1d] rounded-full z-10"></span>
              <span className="w-2 h-2 -ml-1 bg-black rounded-full"></span>
            </span>
          </span>
          <p className="text-2xl text-justify max-md:text-xl max-sm:text-lg">
            We deliver more than just prints - we deliver trust, speed, and unmatched quality. Our printing partner never lets you down. Whether it's promotional banners, corporate flags, exhibition displays, or custom merchandise, we provide fast, flawless, and reliable service. With premium prints, perfect finish, and fast delivery, we ensure your brand gets noticed.
          </p>
          <span className="text-lg text-[#d70e1d] flex gap-3 items-center">
            <span className="flex">
              <span className="w-2 h-2 bg-[#d70e1d] rounded-full z-10"></span>
              <span className="w-2 h-2 -ml-1 bg-black rounded-full"></span>
            </span>
            Our Clients
            <span className="flex">
              <span className="w-2 h-2 bg-[#d70e1d] rounded-full z-10"></span>
              <span className="w-2 h-2 -ml-1 bg-black rounded-full"></span>
            </span>
          </span>
          <div className="flex justify-center">
            <div className="grid grid-cols-4 gap-8 max-lg:grid-cols-3 max-sm:grid-cols-2 text-center">
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="font-semibold">DFCC Bank</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="font-semibold">Seylan Bank</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="font-semibold">Assetline</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="font-semibold">Siyapatha Finance</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="font-semibold">CBC Finance</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="font-semibold">Amana Takaful</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="font-semibold">HNB Assurance</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="font-semibold">Lyceum Schools</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="font-semibold">SDB Bank</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="font-semibold">Senok</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="font-semibold">Deepal</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="font-semibold">GWM</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*Services*/}
      <div className="w-full px-4 pb-12 flex items-center flex-col mx-auto max-md:p-6 max-md:pt-0 bg-gray-50">
        <div className="mb-12 max-w-7xl text-center max-md:mb-6 pt-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-lg text-[#d70e1d] flex gap-3 items-center">
              <span className="flex">
                <span className="w-2 h-2 bg-[#d70e1d] rounded-full z-10"></span>
                <span className="w-2 h-2 -ml-1 bg-black rounded-full"></span>
              </span>
              Our Services
              <span className="flex">
                <span className="w-2 h-2 bg-[#d70e1d] rounded-full z-10"></span>
                <span className="w-2 h-2 -ml-1 bg-black rounded-full"></span>
              </span>
            </span>
          </div>
          <h2 className="mb-6 text-4xl font-bold md:text-5xl">
            <span>What We </span>
            <span className="text-[#d70e1d]">Offer</span>
          </h2>
          <p className="max-md:text-justify max-md:text-sm">
            Creativity That Prints Success - M2 Productions is your printing partner that delivers trust, speed, and unmatched quality.
          </p>
        </div>

        <div className="grid items-start max-w-7xl grid-cols-1 gap-8 max-md:gap-6 md:grid-cols-2 pb-12">
          <div className="flex items-start gap-4">
            <div className="bg-[#d70e1d] p-3 rounded-lg">
              <Printer className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="mb-2 text-xl font-bold">Digital | UV | Offset Printing</h3>
              <p className="text-justify text-gray-600">
                Premium digital printing solutions including flex & PVC stickers, one-way vision stickers, corrugated/sun board, and clear stickers. UV printing with luxury finish and long-lasting durability.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-[#d70e1d] p-3 rounded-lg">
              <Users className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="mb-2 text-xl font-bold">Sublimation Printing</h3>
              <p className="text-justify text-gray-600">
                Custom corporate wear, branded t-shirts & uniforms, event & promotional printing. Perfect for sports teams, corporate events, and brand merchandise.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-[#d70e1d] p-3 rounded-lg">
              <Code className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="mb-2 text-xl font-bold">Laser Cutting & Engraving</h3>
              <p className="text-justify text-gray-600">
                Professional laser marking with precision on metal, glass, plastic, and wood for logos, serial numbers, and personalization. Perfect for branding, displays, and custom creations.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-[#d70e1d] p-3 rounded-lg">
              <Headphones className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="mb-2 text-xl font-bold">Event & Corporate Branding</h3>
              <p className="text-justify text-gray-600">
                Get noticed with printed promotional banners, corporate flags, and exhibition displays. Complete event and corporate branding solutions that make your brand stand out.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/*Products*/}
      <div className="w-full px-4 flex flex-col items-center pb-16 mx-auto max-md:px-6 max-md:pb-6">
        <div className="mb-12 max-w-7xl text-center max-md:mb-6 pt-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="flex">
              <span className="w-2 h-2 bg-[#d70e1d] rounded-full z-10"></span>
              <span className="w-2 h-2 -ml-1 bg-black rounded-full"></span>
            </span>
            Our Products
            <span className="flex">
              <span className="w-2 h-2 bg-[#d70e1d] rounded-full z-10"></span>
              <span className="w-2 h-2 -ml-1 bg-black rounded-full"></span>
            </span>
          </div>
          <h2 className="mb-6 text-4xl font-bold md:text-5xl">
            <span className="text-[#d70e1d]">Premium </span>Printing Solutions
          </h2>
          <p className="max-md:text-justify max-md:text-sm">
            From flags and banners to laser engraving and custom merchandise - we deliver high-quality printing solutions for all your branding needs. Transform materials into masterpieces with our professional printing services.
          </p>
        </div>

        <div className="grid max-w-7xl grid-cols-1 gap-12 max-md:gap-6 md:grid-cols-2">
          {blogs.map((blog) => (
            <div key={blog.id} className="group">
              <div className="relative mb-4 overflow-hidden border rounded-lg shadow-md">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-[#d70e1d] text-white px-3 py-1 rounded-md font-semibold">
                  {blog.price}
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-bold hover:text-[#d70e1d] transition-colors">
                  {blog.title}
                </h3>
                <div>
                  <p className="text-justify text-gray-600">{blog.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/*Contact Section*/}
      <div className="w-full bg-gray-50 py-16 px-4 max-md:py-8 max-md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-[#d70e1d]">Get in </span>Touch
            </h2>
            <p className="text-gray-600">Contact us today for all your printing needs</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-[#d70e1d] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">Email</h3>
              <p className="text-gray-600">mm2produ@gmail.com</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-[#d70e1d] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">Location</h3>
              <p className="text-gray-600">#161/B-1, Old Kottawa Road</p>
              <p className="text-gray-600">Nawinna, Maharagama</p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-2xl font-bold mb-4">
              <span className="text-[#d70e1d]">Special Offer: </span>
              <span>10% OFF on Flag Printing</span>
            </p>
            <p className="text-gray-600 mb-6">November & December Special - Bigger orders mean bigger savings!</p>
            <a
              href="tel:0777574766"
              className="inline-block px-8 py-3 bg-[#d70e1d] text-white rounded-lg font-semibold hover:bg-[#b50c18] transition-colors"
            >
              Call Now for Your Quote
            </a>
          </div>
        </div>
      </div>

      {/*Footer*/}
      <div className="w-full bg-black text-white py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            <span className="text-[#d70e1d]">M2 </span>Productions
          </h2>
          <p className="mb-6 text-gray-300">
            Your Brand, Printed to Perfection - Creativity That Prints Success
          </p>
          <div className="flex justify-center gap-6 mb-6">
            <a href="https://www.facebook.com/Mm2productionsnawinna" className="hover:text-[#d70e1d] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
              </svg>
            </a>
            <a href="https://www.instagram.com/m2productions" className="hover:text-[#d70e1d] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
              </svg>
            </a>
            <a href="https://www.tiktok.com/@m2productions" className="hover:text-[#d70e1d] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z"/>
              </svg>
            </a>
          </div>
          <p className="text-sm text-gray-400">
            © 2024 M2 Productions. All rights reserved. | Nawinna, Maharagama, Sri Lanka
          </p>
        </div>
      </div>
    </div>
  );
}

export default Landing;
