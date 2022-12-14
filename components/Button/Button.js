import React from "react";
import clsx from "clsx";

const Button = React.forwardRef(
  ({ children, primary, outline, size = "medium", disabled, ...rest }, ref) => {
    return (
      <button
        disabled={disabled}
        ref={ref}
        className={clsx("button", {
          ["button--primary"]: primary,
          ["button--small"]: size === "small",
          ["button--medium"]: size === "medium",
          ["button--large"]: size === "large",
          ["button--disabled"]: disabled,
          ["button--outline"]: outline,
        })}
        {...rest}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
