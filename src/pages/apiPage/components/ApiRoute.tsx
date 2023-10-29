import { ApiRouteType } from "@/types";

type Props = {
  apiRoute: ApiRouteType;
}

const ApiRoute = ({ apiRoute: { label, method, route, isProtected } }: Props) => {

  const commonStyles = 'text-xl font-medium text-gray-300 w-1/4';

  const methodColors = {
    GET: '#6BDD9A',
    POST: '#FFE46C',
    PUT: '#4FA3F6',
    DELETE: '#F7794B'
  };
  
  return (
    <article className="
      bg-gray-700
      rounded-lg
      p-2
      flex
      gap-3
      shadow-sm
    ">
      <h3 className={`${commonStyles}`}>{label}</h3>
      <h3 
        className={`${commonStyles} text-center`}
        style={{
          color: methodColors[method]
        }}
      >
        {method}
      </h3>
      <h3 className={`${commonStyles}`}>
        {route}
      </h3>
      <h3 className={`${commonStyles} text-end`}>
        {
          isProtected 
          ? 
          <span className="text-orange-600">Protected</span> 
          :
          <span className="text-green-600">Not Protected</span>
        }
      </h3>
    </article>
  );
};

export default ApiRoute;