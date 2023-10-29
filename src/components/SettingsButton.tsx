import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { Link } from "react-router-dom";

const SettingsButton = () => {

  return (
    <Link
      to='settings'
      className="
        text-lg
        text-gray-900
        hover:opacity-80
      "
    >
      <FontAwesomeIcon icon={solid('gear')} />
    </Link>
  );
};

export default SettingsButton;