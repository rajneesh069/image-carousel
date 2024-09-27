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
    <div className="flex justify-center items-center h-[100vh] w-[100vw] border border-white">
      <MoveLeft
        className="border border-white bg-inherit rounded-full"
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
      <img src={images[ind]} key={ind} width={500} height={500} />
      <MoveRight
        className="border border-white bg-inherit rounded-full"
        size={50}
        cursor={"pointer"}
        onClick={() => {
          console.log("Clicked");
          setCurrentInd((currentInd + 1) % images.length);
          setInd((currentInd + 1) % images.length);
        }}
      />
    </div>
  );
}
