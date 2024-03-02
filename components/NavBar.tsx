import Image from "next/image";
import Link from "next/link";

const navBarContact = [
  {
    src: "/assets/ph_phone-fill.svg",
    alt: "phone_call_icon",
    text: "(+216) 98 215 967",
  },
  {
    src: "/assets/fluent_mail-16-filled.svg",
    alt: "mail_icon",
    text: " contact@111-CoThink.com",
  },
];

const socialContact = [
  {src:"/assets/facebook.svg",alt:'facebook',bgColor:"bg-[#1877f2]", link:"https://www.facebook.com/111CoThinkers/"},
  {src:"/assets/instagram.svg",alt:'instagram',bgColor:"bg-gradient-to-r from-[#f09433] to-pink-700", link:"https://www.instagram.com/111cothink/"},
  {src:"/assets/linkedin.svg",alt:'linkedin',bgColor:"bg-[#0077b5]",link:"https://tn.linkedin.com/company/cothink-111"},
];

const NavBar = () => {
  return (
    <section className="flex items-center justify-end gap-4 px-8 md:px-36 py-2 w-full mb-6">
      <div className="flex  gap-2 items-start">
        <div className="flex items-center justify-center gap-4 select-none">
          {socialContact.map(social=>(
            <Link
            key={social.alt}
            href={social.link}
            title={social.alt}
            target="_blanc"
            className="Btn"
          >
            <span className="svgContainer">
              <Image
                src={social.src}
                alt={social.alt}
                width={20}
                height={20}
                className="w-auto"
              />
            </span>
            <span className={`BG ${social.bgColor} `}></span>
          </Link>
          ))}
        </div>
        <span className="w-[1px] h-10 my-auto bg-gray-400"></span>
        <div className="flex flex-col justify-center font-semibold">
          {navBarContact?.map((nav,i) => (
            <div key={i} className="flex items-center">
              <Image
                src={nav.src}
                alt={nav.alt}
                width={20}
                height={20}
                className="object-contain select-none"
              />
              <span className="max-md:text-[10px] text-sm whitespace-nowrap">{nav.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NavBar;
