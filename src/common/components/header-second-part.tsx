import React from "react";
import Image from "next/image";
import Icon from "@/src/common/components/icon";

function HeaderSecondPart() {
  return (
    <div className="p-5 bg-[#F2F4F5]">
      <div className="flex items-center justify-between">
        <div className="relative w-27.5 h-9">
          <Image src="/images/logo.png" fill alt="" />
        </div>
        <div className="p-2.5">
          <div className="flex items-center gap-5">
            <Icon name="search" size={24} />
            <Icon name="bag" size={24} />
            <Icon name="heart" size={24} />
            <Icon name="search" size={24} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderSecondPart;
