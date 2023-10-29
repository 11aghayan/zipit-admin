import { ApiRouteType } from "@/types";
import ApiRoute from "./ApiRoute";

type Props = {
  apiRoutes: ApiRouteType[];
  name: string;
}

const ApiEach = ({ apiRoutes, name }: Props) => {

  return (
    <section className="space-y-2 bg-gray-300 p-2 rounded-xl shadow-md">
      <h2 className="text-center text-xl font-medium text-gray-800">{name}</h2>
      {
        apiRoutes.map(apiRoute => (
          <ApiRoute 
            key={`${apiRoute.method}-${apiRoute.route}`}
            apiRoute={apiRoute}
          />
        ))
      }
    </section>
  );
};

export default ApiEach;