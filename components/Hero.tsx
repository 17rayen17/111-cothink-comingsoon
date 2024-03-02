"use client"
import { sendMail } from "@/lib/mail";
import Image from "next/image";
import { FormEvent, useState } from "react";
const Hero = () => {
  const [mail, setMail] = useState('');
  const [isSubmited, setIsSubmited] = useState(false);

  const handelForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();   
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z.-]+\.[a-zA-Z]{2,3}$/ig;
    if(emailPattern.test(mail)){
      setIsSubmited(true);
      await sendMail({
        from: `${mail}`,
        name: "cothink",
        subject: "test mail",
        body: `
          <div>
          <h2 style="color: #0E76BD;> Co Think</h2>
          <div style="border: 1px solid #ccc; padding: 10px; background-color: #f8f8f8;">
          <h2>${mail}</h2>
          </div>
          </div>
          `,
      });
      setIsSubmited(false);
      setMail('');
    }else{
      alert("Veuillez saisir une adresse e-mail valide");
      setIsSubmited(false);
    }
  };
  return (
    <div>
      <Image
        src={"/assets/logo.svg"}
        alt="logo"
        draggable={false}
        width={290}
        height={120}
        className="w-auto select-none"
      />
      <h1 className="uppercase text-black text-[64px] font-black ">
        COMING <span className="text-mainColor">SOON!</span>
      </h1>
      <p className="text-[16px] md:text-[20px] font-semibold text-left ">
        Nous nous excusons pour la gêne occasionnée, notre site est actuellement
        en cours de maintenance. Veuillez revenir ultérieurement
      </p>
      <form onSubmit={handelForm} className="w-[350px] md:w-[500px] mt-6 text-white font-bold relative overflow-hidden select-none">
        <input
          type="email"
          placeholder="Email"
          value={mail}
          onChange={(e)=>setMail(e.target.value)}
          className="placeholder:text-white placeholder:font-bold bg-[#4AB0F5] px-4 py-2 rounded-lg outline-none w-full"
        />
        <button
          type="submit"
          className="bg-[#2584C5] h-full px-4 rounded-e-lg absolute right-0 top-0"
        >
          {isSubmited ? 'Envoi en cours...' : 'envoyez'}
        </button>
      </form>
    </div>
  );
};

export default Hero;
