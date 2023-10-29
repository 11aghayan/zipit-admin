import { useEffect, useState } from "react";
import ShowPasswordBtn from "./ShowPasswordBtn";

type Props = {
  id: string;
  type: string;
  name: string;
  label: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>, name: string) => void
}

const SettingsInput = ({ id, type, name, label, handleChange }: Props) => {
  const [showPassword, setShowPassword] = useState(false);
  const [passwordType, setPasswordType] = useState('password');

  useEffect(() => {
    setPasswordType(showPassword ? 'text' : 'password');
  }, [showPassword]);
  
  return (
    <div>
      <label 
        htmlFor={id}
        className=""
      >
        {label}
      </label>
      <div className="flex items-center gap-2">
        <input 
          type={type === 'password' ? passwordType : type} 
          name={name} 
          id={id} 
          onChange={e => handleChange(e, name)}
        />
        <ShowPasswordBtn 
          showPassword={showPassword}
          setShowPassword={setShowPassword}
        />
      </div>
    </div>
  );
};

export default SettingsInput;