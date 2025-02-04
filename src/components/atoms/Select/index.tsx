import React from "react";
import ReactSelect, { Props as SelectProps } from "react-select";
import { useTheme } from "styled-components";

const Select: React.FC<SelectProps> = (props) => {
  const theme = useTheme();

  return (
    <ReactSelect
      styles={{
        control: (provided) => ({
          ...provided,
          border: "none",
          backgroundColor: theme.colors.BG_NEUTRAL_WEAKEST,
        }),
      }}
      {...props}
    />
  );
};

export default Select;
