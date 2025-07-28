import { Button } from '@/components/button';

export function HeroSection() {
  return (
    <section className={'w-screen h-safe-screen p-[20rem]'}>
      <div className={'flex flex-col gap-1 max-w-1/2'}>
        <h1>Lucas Nabesima</h1>
        <p>Fullstack developer</p>
        <p>Desenvolvo aplicações web completas, do back-end ao front-end. Utilizo tecnologias como
          .NET/C# para construir sistemas robustos e React/Next.js para criar interfaces dinâmicas e
          fluidas.</p>
      </div>
      <div className={'flex gap-2'}>
        <Button label={"Curriculo"} />
        <Button label={"GitHub"} />

      </div>
    </section>
  );
}