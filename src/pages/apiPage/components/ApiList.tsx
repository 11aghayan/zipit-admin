import apiRoutes from "@/libs/apiRoutes";

import ApiEach from "./ApiEach";

const ApiList = () => {
  
  return (
    <section className="space-y-3">
      <ApiEach 
        apiRoutes={apiRoutes.categoryRoutes} 
        name='Category Routes'
      />
      <ApiEach 
        apiRoutes={apiRoutes.itemRoutes} 
        name='Item Routes'
      />
      <ApiEach 
        apiRoutes={apiRoutes.authRoutes} 
        name='Auth Routes'
      />
    </section>
  );
};

export default ApiList;