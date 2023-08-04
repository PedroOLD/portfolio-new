import { Button } from "@/components/Button";
import { Description } from "@/components/Description";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <header className="flex px-8 min-h-[30vh] justify-between shadow-boxShadowColor bg-gradient-primary-secondary-mobile">
        <section className="flex flex-col justify-center w-9/12 md:w-6/12">
          <h1 className="text-[2rem] text-secondary font-secular">
            Frontend Develeper
          </h1>
          <p className="text-xs font-nunito">
            TypeScript | React | ES6 | NodeJS | Vtex IO | Magento | Next JS |
            JQuery | GraphQL | Less | SaSS
          </p>

          <div className=" flex justify-between gap-2 mt-4 sm:justify-start sm:gap-2">
            <Button variant={"clear"}>
              <Button.Icon>
                <Image
                  src="/linkedin.svg"
                  alt="icon linkedin"
                  width={14}
                  height={14}
                />
              </Button.Icon>
              <Button.textButton>Linkedin</Button.textButton>
            </Button>

            <Button variant={"clear"}>
              <Button.Icon>
                <Image
                  src="/github.svg"
                  alt="icon linkedin"
                  width={14}
                  height={14}
                />
              </Button.Icon>
              <Button.textButton>Github</Button.textButton>
            </Button>
          </div>
        </section>

        <figure className="hidden sm:flex flex-col justify-center relative md-[-15px] w-3/12 md:6/12">
          <Image src="/foto.svg" alt="myPhotograph" fill />
        </figure>
      </header>

      <section className="px-8 py-7 font-nunito">
        <h1 className="text-dark text-2xl font-secular">Sobre</h1>

        <p className="text-terciary text-base py-4 text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
          inventore vitae illum, blanditiis quam, aperiam quae enim architecto
          unde reprehenderit amet repellat ipsa eaque molestiae minima qui
          placeat iusto error.
        </p>

        <div className=" flex justify-center gap-10 mt-4 sm:justify-start sm:gap-2">
          <Button variant={"dark"}>
            <Button.Icon>
              <Image
                src="/curriculo.svg"
                alt="curriculo linkedin"
                width={14}
                height={14}
              />
            </Button.Icon>
            <Button.textButton>Curriculo</Button.textButton>
          </Button>

          <Button variant={"dark"}>
            <Button.Icon>
              <Image src="/email.svg" alt="email" width={14} height={14} />
            </Button.Icon>
            <Button.textButton>E-mail</Button.textButton>
          </Button>
        </div>
      </section>

      <section className="bg-secondary p-8 shadow-sm flex flex-col gap-7">
        <h1 className="text-dark font-secular text-2xl">Experiências</h1>
        <Description />
      </section>
    </>
  );
}
