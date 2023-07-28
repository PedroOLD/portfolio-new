import Link from "next/link";
import React from "react";

type PropType = {
  children: React.ReactNode;
  variant?: String;
};

export const Button = ({ children, variant }: PropType) => {
  switch (variant) {
    case "clear":
      return (
        <Link
          href={"/"}
          className="min-w-[120px] max-h-[30px] flex justify-center gap-2 py-1 px-5 text-sm font-nunito font-bold"
          style={{
            borderStyle: "solid",
            borderWidth: "2px",
            borderImage:
              "linear-gradient(45deg, rgba(213,240,143,1) 0%, rgba(90,251,217,1) 100%) 1",
            borderRadius: "5px",
          }}
        >
          {children}
        </Link>
      );
    case "dark":
      return (
        <Link
          href={"/"}
          className="min-w-[120px] max-h-[30px] flex justify-center gap-2 py-1 px-4 text-sm font-nunito font-bold text-dark"
          style={{
            borderStyle: "solid",
            borderWidth: "2px",
            borderImage:
              "linear-gradient(45deg, rgba(65,60,203,1) 0%, rgba(0,153,222,1) 100%) 1",
            borderRadius: "5px",
          }}
        >
          {children}
        </Link>
      );
    case "mixed":
      return (
        <Link
          href={"/"}
          className="min-w-[120px] max-h-[30px] flex justify-center gap-2 py-1 px-5 text-sm font-nunito font-bold text-dark"
          style={{
            borderStyle: "solid",
            borderWidth: "2px",
            borderImage:
              "linear-gradient(45deg, rgba(213,240,143,1) 0%, rgba(90,251,217,1) 100%) 1",
            borderRadius: "5px",
          }}
        >
          {children}
        </Link>
      );
    default:
      return (
        <div className="bg-gradient-clear">
          <Link href={"/"} className="">
            {children}
          </Link>
        </div>
      );
  }
};

Button.textButton = function TextButton({ children }: PropType) {
  return <p>{children}</p>;
};

Button.Icon = function Icon({ children }: PropType) {
  return <div className="flex align-middle">{children}</div>;
};
