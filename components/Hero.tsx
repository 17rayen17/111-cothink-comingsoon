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
      alert(`${process.env.CDN_LINK}`);
      await sendMail({
        to: `${mail}`,
        name: "cothink",
        subject: "cothink reservatin",
        body: `
        <!DOCTYPE html>

        <html lang="en" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml">
        <head>
        <title></title>
        <meta content="text/html; charset=utf-8" http-equiv="Content-Type"/>
        <meta content="width=device-width, initial-scale=1.0" name="viewport"/><!--[if mso]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG/></o:OfficeDocumentSettings></xml><![endif]--><!--[if !mso]><!--><!--<![endif]-->
        <style>
            * {
              box-sizing: border-box;
            }
        
            body {
              margin: 0;
              padding: 0;
            }
        
            a[x-apple-data-detectors] {
              color: inherit !important;
              text-decoration: inherit !important;
            }
        
            #MessageViewBody a {
              color: inherit;
              text-decoration: none;
            }
        
            p {
              line-height: inherit
            }
        
            .desktop_hide,
            .desktop_hide table {
              mso-hide: all;
              display: none;
              max-height: 0px;
              overflow: hidden;
            }
        
            .image_block img+div {
              display: none;
            }
        
            @media (max-width:520px) {
        
              .desktop_hide table.icons-inner,
              .social_block.desktop_hide .social-table {
                display: inline-block !important;
              }
        
              .icons-inner {
                text-align: center;
              }
        
              .icons-inner td {
                margin: 0 auto;
              }
        
              .mobile_hide {
                display: none;
              }
        
              .row-content {
                width: 100% !important;
              }
        
              .stack .column {
                width: 100%;
                display: block;
              }
        
              .mobile_hide {
                min-height: 0;
                max-height: 0;
                max-width: 0;
                overflow: hidden;
                font-size: 0px;
              }
        
              .desktop_hide,
              .desktop_hide table {
                display: table !important;
                max-height: none !important;
              }
            }
          </style>
        </head>
        <body style="background-color: #FFFFFF; margin: 0; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;">
        <table border="0" cellpadding="0" cellspacing="0" class="nl-container" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #FFFFFF;" width="100%">
        <tbody>
        <tr>
        <td>
        <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
        <tbody>
        <tr>
        <td>
        <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-radius: 0; color: #000000; width: 500px; margin: 0 auto;" width="500">
        <tbody>
        <tr>
        <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: middle; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
        <table border="0" cellpadding="0" cellspacing="0" class="image_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
        <tr>
        <td class="pad" style="width:100%;padding-right:0px;padding-left:0px;">
        <div align="center" class="alignment" style="line-height:10px">
        <div style="max-width: 125px;"><img src="https://111-cothink-comingsoon.vercel.app/assets/logo.svg" style="display: block; height: auto; border: 0; width: 100%;" width="125"/></div>
        </div>
        </td>
        </tr>
        </table>
        <table border="0" cellpadding="10" cellspacing="0" class="heading_block block-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
        <tr>
        <td class="pad">
        <h1 style="margin: 0; color: #0e76bd; direction: ltr; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 38px; font-weight: 700; letter-spacing: normal; line-height: 120%; text-align: center; margin-top: 0; margin-bottom: 0; mso-line-height-alt: 45.6px;">Chez Cothink</h1>
        </td>
        </tr>
        </table>
        <table border="0" cellpadding="10" cellspacing="0" class="paragraph_block block-3" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
        <tr>
        <td class="pad">
        <div style="color:#3a3a3a;direction:ltr;font-family:Arial, 'Helvetica Neue', Helvetica, sans-serif;font-size:16px;font-weight:400;letter-spacing:0px;line-height:120%;text-align:center;mso-line-height-alt:19.2px;">
        <p style="margin: 0;">nous valorisons la flexibilité et la proactivité dans toutes nos initiatives. Nos services sont entièrement adaptables pour répondre aux besoins et contraintes budgétaires spécifiques de chaque client.</p>
        </div>
        </td>
        </tr>
        </table>
        <table border="0" cellpadding="10" cellspacing="0" class="social_block block-4" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
        <tr>
        <td class="pad">
        <div align="center" class="alignment">
        <table border="0" cellpadding="0" cellspacing="0" class="social-table" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; display: inline-block;" width="108px">
        <tr>
        <td style="padding:0 2px 0 2px;"><a href="https://www.facebook.com/111CoThinkers/" target="_blank"><img alt="Facebook" height="32" src="https://111-cothink-comingsoon.vercel.app/assets/facebook2x.png" style="display: block; height: auto; border: 0;" title="facebook" width="32"/></a></td>
        <td style="padding:0 2px 0 2px;"><a href="https://www.linkedin.com/company/cothink-111?originalSubdomain=tn" target="_blank"><img alt="Linkedin" height="32" src="https://111-cothink-comingsoon.vercel.app/assets/linkedin2x.png" style="display: block; height: auto; border: 0;" title="linkedin" width="32"/></a></td>
        <td style="padding:0 2px 0 2px;"><a href="https://www.instagram.com/111cothink/" target="_blank"><img alt="Instagram" height="32" src="https://111-cothink-comingsoon.vercel.app/assets/instagram2x.png" style="display: block; height: auto; border: 0;" title="instagram" width="32"/></a></td>
        </tr>
        </table>
        </div>
        </td>
        </tr>
        </table>
        <table border="0" cellpadding="10" cellspacing="0" class="paragraph_block block-5" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
        <tr>
        <td class="pad">
        <div style="color:#101112;direction:ltr;font-family:Arial, 'Helvetica Neue', Helvetica, sans-serif;font-size:16px;font-weight:400;letter-spacing:0px;line-height:120%;text-align:center;mso-line-height-alt:19.2px;">
        <p style="margin: 0; margin-bottom: 16px;">📞 (+216) 98 215 967</p>
        <p style="margin: 0;">✉️ contact@111-CoThink.com</p>
        </div>
        </td>
        </tr>
        </table>
        </td>
        </tr>
        </tbody>
        </table>
        </td>
        </tr>
        </tbody>
        </table>
        <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff;" width="100%">
        <tbody>
        <tr>
        <td>
        <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; color: #000000; width: 500px; margin: 0 auto;" width="500">
        <tbody>
        <tr>
        <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
        </td>
        </tr>
        </tbody>
        </table>
        </td>
        </tr>
        </tbody>
        </table>
        </td>
        </tr>
        </tbody>
        </table><!-- End -->
        </body>
        </html>
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
