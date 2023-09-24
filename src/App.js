import Categories from "./companents/Categories";
import Delivery from "./companents/Delivery";
import Featured from "./companents/Featured";
import Footer from "./companents/Footer";
import Meal from "./companents/Meal";
import NewsLetter from "./companents/NewsLetter";
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
      <Categories/>
      <NewsLetter/>
      <Footer/>
    </div>
  );
}

export default App;
