import Icon from "@/src/common/components/icon";

function SearchBar() {
  return (
    <div className="w-164 h-13 flex items-center gap-2 rounded-md bg-white pr-1.5 pl-5 py-1.5">
      <input
        type="text"
        placeholder="Search for anything..."
        className="flex-1 bg-transparent outline-none text-[14px] leading-4.5 font-mardoto-regular"
      />

      <div className="w-11 h-10 flex items-center justify-center rounded-md bg-blue-600">
        <Icon name="search-white" />
      </div>
    </div>
  );
}

export default SearchBar;
