import { useTranslation } from "react-i18next";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes";

// This is the main app component
function App() {
  // Get the `i18n` object from the `useTranslation` hook
  const { i18n } = useTranslation();

  // Set the `dir` attribute of the `document` object to the current language direction
  document.dir = i18n.dir();

  // Set the font family of the body element based on the current language direction
  document.body.style.fontFamily =
    i18n.dir() === "ltr" ? "Poppins, sans-serif" : "Tajawal, sans-serif";

  // Render the app inside a `BrowserRouter` component and include the `Router` component
  return (
    <div className="App">
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;
