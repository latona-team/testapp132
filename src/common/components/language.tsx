"use client";
import { useState } from "react";
import Icon from "@/src/common/components/icon";

interface Props {
  text: string;
}

function Language({ text }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="flex items-center gap-1.5 cursor-pointer"
      onClick={() => setOpen(!open)}
    >
      <p className="text-[14px] leading-5 text-white font-mardoto-regular">
        {text}
      </p>

      <div
        className={` w-3 h-3 flex items-center transition-transform duration-300 ${
          open ? "rotate-180" : "rotate-0"
        }`}
      >
        <Icon name="down" containerClassName="w-full h-full" />
      </div>
    </div>
  );
}

export default Language;
