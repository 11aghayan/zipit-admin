import { RouterProvider } from "react-router-dom";

import router from "@/router";
import AddModalContextProvider from "@/context/AddModalContextProvider";
import AuthContextProvider from "./context/AuthContextProvider";

function App() {
  return (
    <AuthContextProvider>
      <AddModalContextProvider>
        <RouterProvider router={router} />
      </AddModalContextProvider>
    </AuthContextProvider>
  );
}

export default App;
