import Delivery from "./companents/Delivery";
import Featured from "./companents/Featured";
import Meal from "./companents/Meal";
import TopNav from "./companents/TopNav";
import TopPicks from "./companents/TopPicks";

function App() {
  return (
    <div className="App">
      <TopNav/>
      <Featured/>
      <Delivery/>
      <TopPicks/>
      <Meal/>
    </div>
  );
}

export default App;
