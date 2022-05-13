import { useState } from "react";
import { Header } from "./components/MainPage/Header";
import { InfoBlock } from "./components/MainPage/InfoBlock";
import { StyledCalendar } from "./components/MainPage/StyledCalendar";
import { MoviesPage } from "./components/Movies/MoviesPage";

function App() {
  const [selectedDate, setSelectedDate] = useState<Date>();

  const onBack = () => setSelectedDate(undefined);

  return (
    <div className="w-screen min-h-screen text-center bg-main">
      <Header hasBackButton={Boolean(selectedDate)} onBack={onBack} />
      <main>
        {selectedDate ? (
          <MoviesPage date={selectedDate} />
        ) : (
          <>
            <InfoBlock />
            <StyledCalendar onChange={setSelectedDate} />
          </>
        )}
      </main>
    </div>
  );
}

export default App;
