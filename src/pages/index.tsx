import { Button } from "@/components/Button";
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

          <div className=" flex justify-between gap-2 mt-4">
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

      <section className="text-[#000]">Teste</section>
    </>
  );
}
