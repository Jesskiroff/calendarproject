// import logo from "./logo.svg";
import Calendar from "./Calendar";
import LocalizationProviderWrapper from "./LocalizationProvider";

const App = () => {
  return (
    <LocalizationProviderWrapper>
      <div>
        <Calendar />
      </div>
    </LocalizationProviderWrapper>
  );
};

export default App;
