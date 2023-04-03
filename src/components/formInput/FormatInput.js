   import React, { useState } from "react";
   // import "./formInput.scss";

   const FormInput = (props) => {
   const [focused, setFocused] = useState(false);
   const { errorMessage, onChange, id, ...inputProps } = props;

   const handleFocused = (e) => {
      setFocused(true);
   };
   return (
      <div className="formInput">
         <input
         {...inputProps}
         onChange={onChange}
         onFocus={() =>
            inputProps.name === "confirmPassword" && setFocused(true)
         }
         onBlur={handleFocused}
         focused={focused.toString()}
         />
         <span className="errorMessage">{errorMessage}</span>
      </div>
   );
   };

   export default FormInput;
