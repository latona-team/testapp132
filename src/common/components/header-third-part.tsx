import React from "react";
import Icon from "@/src/common/components/icon";

function HeaderThirdPart() {
  return (
    <div className="px-5 py-2.5 bg-white shadow-[inset_0_-1px_0_0_#E4E7E9]">
      <div className="flex items-center justify-between">
        <div className="py-2.5 px-5 bg-[#F2F4F5] rounded-sm">
          <div className="flex items-center gap-2">
            <Icon name="burger-menu" size={24} />
            <span className="text-lg font-semibold">Menu</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Icon name="phone" size={20} />
          <span
            className="text-[14px] text-black leading-6"
            style={{ fontFamily: '"mardoto-regular", sans-serif' }}
          >
            +374-00-000-000
          </span>
        </div>
      </div>
    </div>
  );
}

export default HeaderThirdPart;
