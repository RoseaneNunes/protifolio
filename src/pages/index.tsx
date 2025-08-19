import Image from "next/image";
import arame from '../../public/arame.svg'
import manchaDeTinta from '../../public/manchaDeTinta.svg'
import { Header } from "@/components/header";


export default function Home() {
  return (
    <section className="w-screen h-screen bg-[#D8D8D8] flex  items-center justify-between text-black">
        <Image src={arame} alt="arame" className="h-screen  z-20" />
        <div className="absolute hover:animate-[folhear_1s_ease-in-out_forwards] origin-center rotate-  top-20 right-20 border-l-transparent border-r-transparent border-t-amber-500 border-t-[80px] border-l-[50px]   "></div>
       
      <div className="w-[903px] left-5 h-screen bg-[url('/folha.svg')] absolute z-10  flex items-center"></div>
      <Header/>
      <div className="z-10 ">
        <div className=" bg-[url('/tiraDePapel.svg')] bg-center h-[108px] w-[531px] pl-5"  >
          <strong className="">
            <h2 className="text-[22px]">Ola, Sou</h2>
            <h1 className="text-[38px] ">Roseane Nunes Dos Anjos</h1>
          </strong>
        </div>
        <h1 className=" w-[536px] text-[30px] text-black  pt-40">
          Sou Roseane Nunes, pernambucana, 20 anos, apaixonada por tecnologia
          desde pequena, quando meu pai se tornou proprietário de uma lan house.
          Atualmente faço parte da knex consultoria jr, onde ocupo o cargo de
          desenvolvedora Frontend.
        </h1>
      </div>
      <div className="relative w-[900px] h-[649px] grid place-content-center  ">
      <Image src={manchaDeTinta} alt="teste" className="absolute z-0"/>
        <Image  src="https://github.com/RoseaneNunes.png"  alt="imagem de perfil" width={483} height={483} className="rounded-full z-10"/>
      </div>
      
    </section>
  );
}
