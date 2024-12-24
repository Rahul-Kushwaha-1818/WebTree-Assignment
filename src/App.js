import "./App.css";
import FetchUsingAsyncAwait from "./Component/FetchUsingAsyncAwait";
import FetchUsingAxios from "./Component/FetchUsingAxios";
import FetchUsingFetchAPI from "./Component/FetchUsingFetchAPI ";
import FetchUsingPromises from "./Component/FetchUsingPromises";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="w-full h-[100vh] bg-transparent backdrop-blur-sm overflow-y-auto">
        <Routes>
          <Route path="/" element={<FetchUsingPromises />} />
          <Route
            path="/Fetch-Using-Async-Await"
            element={<FetchUsingAsyncAwait />}
          />
          <Route path="/Fetch-Using-Axios" element={<FetchUsingAxios />} />
          <Route
            path="/Fetch-Using-FetchAPI"
            element={<FetchUsingFetchAPI />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
