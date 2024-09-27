import { useEffect, useState } from "react";

export default function ImageCarousel({ images }: { images: string[] }) {
  // images.length = 3
  const [ind, setInd] = useState(0);
  const [currentInd, setCurrentInd] = useState(0);
  useEffect(() => {
    const intervalID = setInterval(() => {
      setCurrentInd(ind);
      setInd((ind + 1) % images.length);
    }, 2000);

    return () => {
      clearInterval(intervalID);
    };
  }, [ind, images]);

  return (
    <div className="flex justify-center items-center h-[100vh] w-[100vw] border border-white">
      <img src={images[ind]} key={ind} width={500} height={500} />
    </div>
  );
}
