import { FaInstagram } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

export default function Footer() {
  return (
    <>
      <div
        id="contact"
        className="flex flex-col md:flex-row justify-between pt-16 pb-8 gap-16 md:gap-0 text-black mx-12 md:mx-16"
      >
        <div className="flex text-center md:text-left flex-col gap-8">
          <div className="text-4xl">
            <h1 className="playfair">CONTACT</h1>
          </div>
        </div>
        <div className="flex text-center md:text-normal flex-col gap-4">
          <div className="flex flex-row gap-8 text-4xl">
            <FaInstagram />
            <a
              className="text-xl md:text-2xl"
              href="https://www.instagram.com/melinadyahh_/"
            >
              @melinadyahh_
            </a>
          </div>
          <div className="flex flex-row md:flex-row gap-8 text-4xl">
            <SiGmail />
            <a className="text-xl md:text-2xl" href="mailto:melinadyah.123@gmail.com">
              melinadyah.123@gmail.com
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
