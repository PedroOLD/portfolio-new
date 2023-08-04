import React from "react";

export const Description = () => {
  return (
    <div className=" flex flex-col justify-between gap-7">
      <ul className=" flex justify-start flex-wrap w-full color text-dark text-sm">
        <li className="text-terciary py-1 px-6 bg-secondary-ligth">Origamid</li>
        <li className="text-terciary py-1 px-6 bg-secondary-ligth">Origamid</li>
        <li className="text-terciary py-1 px-6 bg-secondary-ligth">Origamid</li>
        <li className="text-terciary py-1 px-6 bg-secondary-ligth">Origamid</li>
      </ul>

      <div className="flex flex-col gap-7">
        <div className="flex justify-between">
          <h3 className="text-dark text-sm font-secular">
            Frontend Developer Magento
          </h3>
          <p className="text-primary-dark text-[10px]">
            07/10/2019 à 09/05/2019
          </p>
        </div>

        <p className="text-terciary text-base text-justify font-nunito">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident,
          dolorum doloribus. Aliquam ipsum similique commodi, magni praesentium
          sequi quod quam saepe iure dolores ea nesciunt, illo optio
          reprehenderit debitis dolorem?
        </p>
      </div>
    </div>
  );
};
