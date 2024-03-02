import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <section className="flex items-center flex-wrap justify-center gap-4 px-24 py-4">
        <div className="flex-1 flex flex-col">
          <Hero />
        </div>
        {/* Hero Image */}
        <div className="flex justify-center items-center max-md:w-[600px] mainPic">
        <img
            className="mainImage"
            src="/assets/8tbYceJeQb2GYTMVBHsTDg-removebg-preview.png"
            alt="image"
          />
        </div>
      </section>
    </>
  );
}
