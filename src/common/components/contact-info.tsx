import Icon from "@/src/common/components/icon";
import { CONTACT_ITEMS, SOCIAL_ITEMS } from "@/src/lib/static-info";

function ContactInfo() {
  return (
    <div className="flex w-full flex-col gap-3">
      <div className="flex flex-col gap-3">
        {CONTACT_ITEMS.map(({ icon, label, href }) => (
          <div key={label} className="flex items-start gap-2">
            <Icon name={icon} />
            {href ? (
              <a
                href={href}
                className="font-mardoto-regular text-[18px] leading-6 text-[#191C1F] hover:text-blue-600"
              >
                {label}
              </a>
            ) : (
              <span className="font-mardoto-regular text-[18px] leading-6 text-[#191C1F]">
                {label}
              </span>
            )}
          </div>
        ))}
      </div>

      <div className="border-t border-[#E4E7E9] pt-1.5">
        <div className="flex items-center gap-2">
          <p className="font-mardoto-regular text-[16px] leading-5 text-[#191C1F]">
            Follow us:
          </p>
          <div className="pt-1">
            <div className="flex items-center  gap-3">
              {SOCIAL_ITEMS.map(({ icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                >
                  <Icon name={icon} size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
