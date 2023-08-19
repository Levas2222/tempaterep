
import NavigationBar from "./Components/NavigationBar";
import EventComponent from "./Components/EventComponent";
import SearchSelector from "./Components/SearchSelector";
import BottomNavigationBar from "./Components/BottomNavigation";

function App() {

  return (
    <div className="w-screen h-screen bg-secondary">

      <NavigationBar></NavigationBar>

      <SearchSelector></SearchSelector>


      {/*Scrollable Container*/}
      <div class="h-auto flex-grow scrollable-area max-h-3/4 overflow-y-auto border border-gray-300 rounded p-4 mt-4">

        <EventComponent></EventComponent>

      </div>

      <BottomNavigationBar></BottomNavigationBar>

    </div>
  )
}

export default App




function generateEventComponent() {



}
function navigationBar() {



}
