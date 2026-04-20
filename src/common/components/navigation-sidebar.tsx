import { Links } from "@/src/lib/type";

interface Props {
  title: string;
  links: Links[];
}

function NavigationSidebar({ title, links }: Props) {
  return (
    <div className="flex flex-col gap-3 desktop:w-50">
      <p className="font-mardoto-medium  text-[16px] leading-6 uppercase">
        {title}
      </p>

      <div>
        {links.map((link) => (
          <div key={link.id} className="py-1.5">
            <p className="font-mardoto-medium  text-[14px] leading-5">
              {link.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NavigationSidebar;
