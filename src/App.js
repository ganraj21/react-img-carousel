import "./App.css";
import Imagecarousel from "./Components/Imagecarousel";

function App() {
  const images = [
    "https://picsum.photos/id/1015/1000/600",
    "https://picsum.photos/id/1019/1000/600",
    "https://picsum.photos/id/1020/1000/600",
    "https://picsum.photos/id/1021/1000/600",
    "https://picsum.photos/id/1022/1000/600",
    "https://picsum.photos/id/1024/1000/600",
  ];
  return (
    <div className="App">
      <Imagecarousel images={images} />
    </div>
  );
}

export default App;
