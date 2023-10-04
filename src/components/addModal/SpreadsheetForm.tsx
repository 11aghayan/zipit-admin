import { useState } from "react";

const SpreadsheetForm = () => {
  const [file, setFile] = useState<File | null>();

  console.log(file);

  return (
    <div>
      <label htmlFor="spreadsheet"></label>
      <input 
        type="file" 
        name="spreadsheet" 
        id="spreadsheet"
        onChange={(e) => {
          const files = e.currentTarget.files;
          setFile(files?.length ? files[0] : null);
        }} 
      />
    </div>
  );
};

export default SpreadsheetForm;