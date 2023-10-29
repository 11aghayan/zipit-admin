import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

type Props = {
  showPassword: boolean;
  setShowPassword: React.Dispatch<React.SetStateAction<boolean>>;
}

const ShowPasswordBtn = ({ showPassword, setShowPassword }: Props) => {

  return (
    <button
      type="button"
      className="text-lg px-1"
      onClick={() => setShowPassword(prev => !prev)}
      tabIndex={-1}
    >
      {
        showPassword
        ?
        <FontAwesomeIcon icon={solid('eye')} />
        :
        <FontAwesomeIcon icon={solid('eye-slash')} />
      }
    </button>
  );
};

export default ShowPasswordBtn;