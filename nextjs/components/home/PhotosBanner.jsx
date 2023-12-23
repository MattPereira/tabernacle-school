import Image from "next/image";

export function PhotosBanner() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
      <div className="col-span-1">
        <Image
          height={500}
          width={500}
          className="w-full h-full"
          src="/homepage/showcase-1.jpg"
          alt="showcase image"
        />
      </div>

      <div className="col-span-1 md:flex md:col-span-1 hidden">
        <Image
          height={500}
          width={500}
          className="w-full"
          src="/homepage/showcase-2.jpg"
          alt="showcase image"
        />
      </div>

      <div className="col-span-1 lg:flex hidden">
        <Image
          height={500}
          width={500}
          className="w-full"
          src="/homepage/showcase-4.jpg"
          alt="showcase image"
        />
      </div>

      <div className="col-span-1 2xl:flex hidden">
        <Image
          height={500}
          width={500}
          className="w-full"
          src="/homepage/showcase-3.jpg"
          alt="showcase image"
        />
      </div>
    </div>
  );
}
