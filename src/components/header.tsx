import Image from "next/image";
import iconButton from "../../public/iconButton.svg";

export function Header() {
  return (
    <section className="z-10 absolute left-35 top-0  h-[500px]">
      
      <div className="relative group w-[92px] h-[10%] bg-red-800 animate-[growDownToUp_1s_ease-in-out_none]  hover:animate-[growUpToDown_1s_ease-in-out_forwards] flex justify-center">
        <div className="opacity-0 group-hover:animate-[appear_1s_ease-in-out_forwards] h-20  absolute bottom-10">
          <Image src={iconButton} alt="fundo"/>
        </div>
        <div className="opacity-0 group-hover:animate-[appear_1s_ease-in-out_forwards] h-20  absolute bottom-35">
          <Image src={iconButton} alt="fundo"/>
        </div>
      </div>
      <div className="flex ">
        <div className="border-l-[0px] border-r-[46px] border-t-[40px] border-l-transparent border-r-transparent  border-t-red-800 "></div>
        <div className="border-l-[46px] border-r-[0px] border-t-[40px] border-l-transparent border-r-transparent  border-t-red-800"></div>
      </div>
    </section>
  );
}
