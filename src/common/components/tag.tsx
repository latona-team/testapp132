interface Props {
  text: string;
  isActive?: boolean;
}

function Tag({ text, isActive = false }: Props) {
  return (
    <div
      className={`border-[#E4E7E9] font-mardoto-regular text-[14px] border truncate text-center leading-5 py-1.5 px-3 rounded-xs ${
        isActive ? "bg-[#0261B9] text-white" : "bg-white text-black"
      }`}
    >
      {text}
    </div>
  );
}

export default Tag;
