import HeaderSecondPart from "@/src/common/components/header-second-part";
import HeaderFirstPart from "@/src/common/components/header-first-part";
import HeaderThirdPart from "@/src/common/components/header-third-part";

function Header() {
  return (
    <div className="flex flex-col">
      <HeaderFirstPart />
      <HeaderSecondPart />
      <HeaderThirdPart />
    </div>
  );
}

export default Header;
