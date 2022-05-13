import { Header } from "./components/Header";
import { InfoBlock } from "./components/InfoBlock";
import { StyledCalendar } from "./components/StyledCalendar";

function App() {
  return (
    <div className="w-screen min-h-screen text-center bg-main">
      <Header />
      <main>
        <InfoBlock />
        <StyledCalendar />
      </main>
    </div>
  );
}

export default App;
