import React from "react";
import { ThreeDMarquee } from "./ui/3d-marquee";
import { LinkPreview } from "./ui/link-preview";

const Contentcreation = () => {
const images = [
    "/content/testm.jpg", "/content/testn.webp", "/content/testo.jpg", "/content/testp.webp", "/content/testq.jpg",
  "/content/testr.jpg", "/content/tests.jpg", "/content/testt.jpeg", "/content/testu.webp", "/content/testv.webp",
  "/content/testa.webp", "/content/testaa.webp", "/content/testab.jpg", "/content/testac.jpg", "/content/testb.jpg",
  "/content/testc.jpg", "/content/testd.webp", "/content/teste.jpg", "/content/testf.webp", "/content/testg.jpg",
  "/content/testh.webp", "/content/testi.jpg", "/content/testj.webp", "/content/testk.jpg", "/content/testl.webp",
  "/content/testm.jpg", "/content/testn.webp", "/content/testo.jpg", "/content/testp.webp", "/content/testq.jpg",
  "/content/testr.jpg", "/content/tests.jpg", "/content/testt.jpeg", "/content/testu.webp", "/content/testv.webp",
  "/content/testw.webp", "/content/testx.webp", "/content/testy.webp", "/content/testz.webp","/content/test1.jpeg","/content/test2.jpeg", "/content/test3.jpeg","/content/test4.jpeg"
];


  return (
    <div className="w-full mx-auto pt-16 sm:pt-24">
      <div className="mb-8 text-center px-4">
        <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white dark:text-neutral-200 mb-2 text-center">
          The Creative Side
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm sm:text-base">
          Creativity isn't limited to code. Through photography and cinematic
          videos and designing, I express stories in frames and Layers </p>
          <h3 className="font-bold text-white dark:text-neutral-200 mb-2 text-center text-sm sm:text-base">Explore my work on Instagram{" "}
         <LinkPreview url="https://www.instagram.com/yaashoofx/" className="text-neutral-600 dark:text-neutral-400 underline">
          @yaashoofx.
        </LinkPreview>{" "}
        </h3>
      </div>
        <div className="w-full h-full pt-10 sm:pt-16">
        <ThreeDMarquee images={images} />
      </div>
    </div>
  );
};

export default Contentcreation;
