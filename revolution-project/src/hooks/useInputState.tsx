import { useState } from "react";

interface InputStates {
    [key: string]: {
      value: string;
      isFocused: boolean;
    };
}

const useInputState = (initialValues: Record<string, string> = {})=>{
    const [inputs, setInputs] = useState<InputStates>(
        Object.keys(initialValues).reduce((acc, key) => {
          acc[key] = { value: initialValues[key], isFocused: false };
          return acc;
        }, {} as InputStates)
    );

    const handleFocus = (name: string) => {
        setInputs((prev) => ({
            ...prev,
            [name]: { ...prev[name], isFocused: true },
        }));
    };
    
    const handleBlur = (name: string) => {
        setInputs((prev) => ({
            ...prev,
            [name]: { ...prev[name], isFocused: false },
        }));
    };
    
    const handleChange = (name: string, value: string) => {
        setInputs((prev) => ({
            ...prev,
            [name]: { ...prev[name], value },
        }));
    };

    return{inputs,handleFocus,handleBlur,handleChange}
}

export default useInputState;