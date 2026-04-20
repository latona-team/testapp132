import Icon from "@/src/common/components/icon";

function HeaderThirdPart() {
  return (
    <div className="px-5 py-2.5 bg-white shadow-[inset_0_-1px_0_0_#E4E7E9] h-16 tablet:h-19 tablet:py-4 tablet:px-10 desktop:px-75">
      <div className="flex items-center justify-between">
        <div className="py-2.5 px-5 bg-[#F2F4F5] rounded-sm">
          <div className="flex items-center gap-2">
            <Icon name="burger-menu" />
            <span className="font-mardoto-regular text-[14px] leading-5 text-[#191C1F]">
              Menu
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Icon
            name="phone"
            size={20}
            containerClassName="tablet:w-7! tablet:h-7!"
          />
          <span className="text-[14px] tablet:text-[18px] text-black leading-6 font-mardoto-regular">
            +374-00-000-000
          </span>
        </div>
      </div>
    </div>
  );
}

export default HeaderThirdPart;
