import Language from "@/src/common/components/language";
import Icon from "@/src/common/components/icon";

function HeaderFirstPart() {
  return (
    <div className="py-2.5 px-5 bg-[#023D63] tablet:py-3 tablet:px-10 desktop:px-75 desktop:h-13">
      <div className="flex items-center justify-between">
        <p className="text-white text-[12px] tablet:text-[14px] tablet:leading-4.5 leading-3.5 tablet:w-86.25 w-46.5 font-mardoto-regular">
          Welcome to SYVERA SYSTEMS wholesale marketplace.
        </p>
        <div className="flex items-center gap-5 desktop:gap-6">
          <div className="hidden desktop:items-center desktop:flex desktop:gap-5">
            <div className="flex items-center gap-1.5">
              <Icon name="headphones" />
              <p className="text-white font-mardoto-regular text-[16px] leading-5">
                Customer Support
              </p>
            </div>
            <div className="flex items-center gap-1.5">
              <Icon name="info" />
              <p className="text-white font-mardoto-regular text-[16px] leading-5">
                Need help
              </p>
            </div>
          </div>
          <Language text="Eng" />
          <Language text="USD" />
        </div>
      </div>
    </div>
  );
}

export default HeaderFirstPart;
