import Image from "next/image";
import NavigationSidebar from "@/src/common/components/navigation-sidebar";
import {
  LINKS_FOR_TOP_CATEGORIES,
  QUICK_LINKS,
  TAGS,
} from "@/src/lib/static-info";
import PopularTagInCompany from "@/src/common/components/popular-tag-in-company";
import ContactInfo from "@/src/common/components/contact-info";

function Footer() {
  return (
    <div className="bg-[#F2F4F5]">
      <div className="flex flex-col ">
        <div className="py-10 px-5 tablet:p-10 desktop:px-75 desktop:py-18">
          <div className="flex flex-col gap-6 desktop:flex-row desktop:justify-between">
            <div className="desktop:flex desktop:flex-col desktop:gap-6 desktop:w-134">
              <div className="relative w-45 h-15.5 desktop:w-45">
                <Image src="/images/logo.png" alt="logo" fill />
              </div>

              <div className="hidden desktop:block">
                <ContactInfo />
              </div>
            </div>

            <NavigationSidebar
              title="Top Category"
              links={LINKS_FOR_TOP_CATEGORIES}
            />
            <NavigationSidebar title="Quick links" links={QUICK_LINKS} />
            <PopularTagInCompany tags={TAGS} />
            <div className="desktop:hidden">
              <ContactInfo />
            </div>
          </div>
        </div>
        <div className="py-6 bg-[#023D63]">
          <p className="font-mardoto-regular text-white text-[14px] leading-5 text-center">
            © Copyright SYVERA SYSTEMS, 2026
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
