import Image from 'next/image';
import { Button } from '@/components/button';

export function HeroSection() {
  return (
    <section className={'w-screen h-safe-screen flex justify-center items-center p-[10rem]'}>
      <div className={'grid grid-cols-2 gap-4'}>
        <div className={'border border-blue-500'}>
          <div className={'flex flex-col gap-1'}>
            <h1>Lucas Nabesima</h1>
            <p>Fullstack developer</p>
            <p>Desenvolvo aplicações web completas, do back-end ao front-end. Utilizo tecnologias como .NET/C# para construir sistemas robustos e React/Next.js para criar interfaces dinâmicas e fluidas.</p>
          </div>
          <div className={'flex gap-1'}>
            <Image src={'/csharp.svg'} width={40} height={40} alt={'CSharp logo'}/>
            <Image src={'/nodejs.svg'} width={40} height={40} alt={'NodeJS logo'}/>
            <Image src={'/nextjs.svg'} width={40} height={40} alt={'Next logo'}/>
            <Image src={'/react.svg'} width={40} height={40} alt={'React logo'}/>
            <Image src={'/typescript.svg'} width={40} height={40} alt={'TypeScript logo'}/>
            <Image src={'/css3.svg'} width={40} height={40} alt={'CSS3 logo'}/>
            <Image src={'/postgresql.svg'} width={40} height={40} alt={'Postgres logo'}/>
          </div>
          <div className={'flex gap-2'}>
            <Button label={"Curriculo"}/>
            <Button label={"GitHub"}/>
          </div>
        </div>
        <div className={'border border-blue-500'}>
          <Image src={'/pfp.jpg'} width={500} height={500} alt={'Profile Picture'} className={'rounded-full'}/>
        </div>
      </div>
    </section>
  );
}