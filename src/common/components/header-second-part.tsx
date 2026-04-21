import Image from "next/image";
import Icon from "@/src/common/components/icon";
import SearchBar from "@/src/common/components/search-bar";

function HeaderSecondPart() {
  return (
    <div className="p-5 bg-[#F2F4F5] h-20 tablet:py-5 tablet:px-10 tablet:h-26 desktop:px-75">
      <div className="flex items-center justify-between">
        <div className="relative w-27.5 h-9 tablet:w-40 tablet:h-16">
          <Image src="/images/logo.png" fill alt="" />
        </div>
        <div>
          <SearchBar />
        </div>
        <div className="p-2.5 desktop:gap-6">
          <div className="flex items-center gap-5">
            <Icon
              name="search"
              containerClassName="tablet:w-8! h-8! desktop:hidden"
            />
            <Icon name="bag" containerClassName="tablet:w-8! h-8!" />
            <Icon name="heart" containerClassName="tablet:w-8! h-8!" />
            <Icon name="user" containerClassName="tablet:w-8! h-8!" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderSecondPart;
