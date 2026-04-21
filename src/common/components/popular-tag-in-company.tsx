"use client";
import { useCallback, useState } from "react";
import Tag from "@/src/common/components/tag";

interface Props {
  tags: string[];
}

function PopularTagInCompany({ tags }: Props) {
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const toggleTag = useCallback((tag: string) => {
    setActiveTag((prev) => (prev === tag ? null : tag));
  }, []);

  return (
    <div className="flex flex-col gap-4.5 desktop:w-78">
      <p className="uppercase font-mardoto-medium text-[16px] leading-6  text-[#191C1F]">
        Popular Tag
      </p>

      <div className="grid grid-cols-4 desktop:grid-cols-4 gap-2 tablet:grid-cols-8">
        {tags.map((tag) => (
          <div
            key={tag}
            onClick={() => toggleTag(tag)}
            className="cursor-pointer"
          >
            <Tag text={tag} isActive={activeTag === tag} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default PopularTagInCompany;
