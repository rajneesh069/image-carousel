import { MoveLeft, MoveRight } from "lucide-react";
import { useEffect, useState } from "react";

export default function ImageCarousel({ images }: { images: string[] }) {
  // images.length = 3
  const [ind, setInd] = useState(0);
  const [currentInd, setCurrentInd] = useState(0);
  useEffect(() => {
    const timeoutID = setTimeout(() => {
      setCurrentInd(ind);
      setInd((ind + 1) % images.length);
    }, 2000);

    return () => {
      clearTimeout(timeoutID);
    };
  }, [ind, images]);

  return (
    <div className="relative">
      <MoveLeft
        className="absolute left-0 top-[40%]"
        cursor={"pointer"}
        size={50}
        onClick={() => {
          console.log(currentInd, ind);
          setCurrentInd(
            currentInd === 0
              ? images.length - 1
              : (currentInd - 1) % images.length
          );
          setInd(
            currentInd === 0
              ? images.length - 1
              : (currentInd - 1) % images.length
          );
        }}
      />
      <img
        src={images[ind]}
        key={ind}
        width={500}
        draggable={false}
        contentEditable={false}
      />
      <MoveRight
        className="absolute right-0 top-[40%]"
        size={50}
        cursor={"pointer"}
        onClick={() => {
          setCurrentInd((currentInd + 1) % images.length);
          setInd((currentInd + 1) % images.length);
        }}
      />
    </div>
  );
}
