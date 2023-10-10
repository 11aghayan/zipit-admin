import { RouterProvider } from "react-router-dom";
import router from "./router";
import AddModalContextProvider from "./context/addModalContext/AddModalContextProvider";

function App() {
  return (
    <AddModalContextProvider>
      <RouterProvider router={router} />
    </AddModalContextProvider>
  );
}

export default App;
