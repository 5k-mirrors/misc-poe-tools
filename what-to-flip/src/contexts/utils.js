import React from "react";

export const useEnsureProvider = context => {
  const ctx = React.useContext(context);

  if (typeof ctx === "undefined") {
    throw new Error(
      `${context.displayName} cannot be used outside the provider.`
    );
  }

  return ctx;
};

const SingleExecutionLockContext = React.createContext();
export const SingleExecutionLockProvider = props => {
  const lock = React.useRef({});

  return <SingleExecutionLockContext.Provider value={lock} {...props} />;
};

export const useSingleExecutionLock = key => {
  const executionLock = useEnsureProvider(SingleExecutionLockContext);

  let executionAllowed = false;

  if (!executionLock.current[key]) {
    executionLock.current[key] = true;
    executionAllowed = true;
  }

  return executionAllowed;
};
