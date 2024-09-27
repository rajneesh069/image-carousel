import ImageCarousel from "./components/ImageCarousel";

function App() {
  const images = [
    "https://www.shutterstock.com/shutterstock/photos/2274412231/display_1500/stock-vector-many-rainbow-gradient-random-bright-soft-balls-background-colorful-balls-background-for-kids-zone-2274412231.jpg",
    "https://www.thesaurus.com/e/wp-content/uploads/2022/10/20221011_randomWords_1000x700-790x310.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/a/a4/Anatomy_of_a_Sunset-2.jpg",
  ];
  return (
    <>
      <div className="flex justify-center items-center h-[100vh]">
        <ImageCarousel images={images} />
      </div>
    </>
  );
}

export default App;
