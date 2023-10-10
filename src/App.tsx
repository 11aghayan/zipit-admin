import { RouterProvider } from "react-router-dom";

import router from "@/router";
import AddModalContextProvider from "@/context/AddModalContextProvider";

function App() {
  return (
    <AddModalContextProvider>
      <RouterProvider router={router} />
    </AddModalContextProvider>
  );
}

export default App;
