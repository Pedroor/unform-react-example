import React, { useEffect, useRef } from "react";
import { useField } from "@unform/core";

interface Props {
  name: string;
}

type InputProps = JSX.IntrinsicElements["input"] & Props;

export default function Input({ name, ...rest }: InputProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const { fieldName, defaultValue, error, registerField } = useField(name);

  console.log(inputRef.current);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value",
    });
  }, [fieldName, registerField]);

  return (
    <div>
      <input ref={inputRef} defaultValue={defaultValue} {...rest} />

      {error && <span style={{ color: "#f00" }}>{error}</span>}
    </div>
  );
}
