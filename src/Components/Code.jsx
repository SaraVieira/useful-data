import React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import classNames from "classnames";

export const Code = ({ code }) => {
  return (
    <Highlight
      {...defaultProps}
      code={JSON.stringify(code, null, 2)}
      language="jsx"
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={classNames(
            className,
            "whitespace-pre p-5 rounded-b-lg break-words"
          )}
          style={style}
        >
          {tokens.map((line, i) => (
            <div
              key={i}
              {...getLineProps({ line, key: i })}
              className={classNames(
                "whitespace-pre-wrap break-words",
                getLineProps({ line, key: i }).className
              )}
            >
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};
