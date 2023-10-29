import { useState } from "react";

import changePassword from "@/actions/changePassword";
import useAxiosPrivate from "@/hooks/useAxiosPrivate";
import { ResponseType } from "@/types";

import SettingsInput from "./SettingsInput";
import SubmitButton from "./SubmitButton";

const ChangePasswordForm = () => {
  const initialBody = {
    password: '',
    newPassword: '',
    newPasswordRepeat: ''
  };
  
  const [isLoading, setIsLoading] = useState(false);
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);
  const [body, setBody] = useState(initialBody);

  const axios = useAxiosPrivate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, name: string) => {
    setBody(prev => ({ ...prev, [name]: e.target.value }));
  };
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!body.password) return setErrMsg('Password missing');
    if (!body.newPassword) return setErrMsg('New Password missing');
    if (!body.newPasswordRepeat) return setErrMsg('Repeat New Password missing');

    if (body.newPassword !== body.newPasswordRepeat) return setErrMsg('Passwords do not match');
    
    setIsLoading(true);
    setSuccess(false);
    setErrMsg('');
    
    changePassword(body, axios)
      .then(res => {
        const response = res as ResponseType;
        
        if (response.ok) {
          setSuccess(true);
          setBody(initialBody);
        } else {
          setErrMsg(response.message);
        }
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="
        w-full
        max-w-md
        flex 
        flex-col
        gap-1
      "
    >
      <SettingsInput 
        id='password'
        type="password"
        name="password"
        label="Password"
        handleChange={handleChange}
      />
      <SettingsInput 
        id='newPassword'
        type="password"
        name="newPassword"
        label="New Password"
        handleChange={handleChange}
      />
      <SettingsInput 
        id='newPasswordRepeat'
        type="password"
        name="newPasswordRepeat"
        label="Repeat New Password"
        handleChange={handleChange}
      />
      {errMsg && <p className="text-red-600 font-medium text-lg text-center">{errMsg}</p>}
      {success && <p className="text-green-600 font-medium text-lg text-center">Password has been successfully changed</p>}
      <SubmitButton isLoading={isLoading} />
    </form>
  );
};

export default ChangePasswordForm;