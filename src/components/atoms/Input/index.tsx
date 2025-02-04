import { forwardRef } from "react";
import styled from "styled-components";
import { paraSmallCss } from "~/components/typography";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Root = styled.input`
  height: 40px;
  background-color: ${({ theme }) => theme.colors.BG_NEUTRAL_WEAKEST};
  border: 1px solid ${({ theme }) => theme.colors.BORDER_NEUTRAL_WEAK};
  border-radius: 4px;
  padding: 0 12px;
  outline: none;
  ${paraSmallCss}
`;

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return <Root ref={ref} {...props} />;
});

export default Input;
