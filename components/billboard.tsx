import { Billboard as BillboardType } from "@/types";
import Image from "next/image";

interface BillboardProps {
  data: BillboardType;
}

const Billboard: React.FC<BillboardProps> = ({ data }) => {
  return (
    <div className="p-4 sm:p-6 lg-p-8 rounded-xl overflow-hidden">
      {/*<div*/}
      {/*  className="rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden"*/}
      {/*  style={{*/}
      {/*    backgroundImage: `url(${data?.imageUrl}`,*/}
      {/*  }}*/}
      {/*>*/}
      <Image
        style={{ objectPosition: "50% 50%", objectFit: "fill" }}
        width={1280}
        height={720}
        quality={100}
        priority
        alt={data.label}
        src={data?.imageUrl}
        className="rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden"
      />
      {/*<div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8">*/}
      {/*  <div className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs">*/}
      {/*    {data.label}*/}
      {/*  </div>*/}
      {/*</div>*/}
      {/*</div>*/}
    </div>
  );
};

export default Billboard;
