import Icon from "@/src/common/components/icon";
import Input from "@/src/common/components/input";
import { PasswordFieldName } from "@/src/lib/type";

interface Props {
  label: string;
  name: PasswordFieldName;
  value: string;
  showPassword: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onToggleVisibility: () => void;
}

function PasswordField({
  label,
  name,
  value,
  showPassword,
  onChange,
  onToggleVisibility,
}: Props) {
  return (
    <div className="flex flex-col gap-2">
      <label className="font-public-sans-regular text-[14px] leading-5 text-[#191C1F]">
        {label}
      </label>
      <div className="relative w-full">
        <Input
          type={showPassword ? "text" : "password"}
          name={name}
          value={value}
          onChange={onChange}
          className="pr-12 w-full desktop:max-w-102!"
        />
        <button
          type="button"
          onClick={onToggleVisibility}
          className="absolute inset-y-0 right-3 flex items-center justify-end w-full text-[#5F6C72] transition hover:text-[#191C1F]"
          aria-label={showPassword ? `Hide ${label}` : `Show ${label}`}
        >
          <Icon name="eye" size={18} containerClassName="cursor-pointer" />
        </button>
      </div>
    </div>
  );
}

export default PasswordField;
