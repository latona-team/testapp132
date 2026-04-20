import React from "react";
import Language from "@/src/common/components/language";

function HeaderFirstPart() {
  return (
    <div className="py-2.5 px-5 bg-[#023D63]">
      <div className="flex items-center justify-between">
        <p
          className="text-white text-[12px] leading-3.5 w-46.5"
          style={{ fontFamily: '"mardoto-regular", sans-serif' }}
        >
          Welcome to SYVERA SYSTEMS wholesale marketplace.
        </p>
        <div className="flex items-center gap-5">
          <Language text="Eng" />
          <Language text="USD" />
        </div>
      </div>
    </div>
  );
}

export default HeaderFirstPart;
