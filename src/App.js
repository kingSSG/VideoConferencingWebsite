import {Routes , Route} from "react-router-dom"
import Homepage from "./pages/home";
import RoomPage from "./pages/room";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage/>} />
      <Route path="/room/:roomId" element={<RoomPage/>} />
    </Routes>
  );
}

export default App;
