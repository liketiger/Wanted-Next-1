import React, { Children, ReactNode, isValidElement, useEffect, useState } from 'react';
import { Route } from './Route';

// Router component
export const Router = ({ children }: { children: ReactNode }) => {
  const [currentPath, setCurrentPath] = useState(location.pathname);

  useEffect(() => {
    const handleLocationChange = () => setCurrentPath(location.pathname);

    addEventListener('popstate', handleLocationChange);

    return () => removeEventListener('popstate', handleLocationChange);
  }, []);

  return (
    <>
      {Children.map(children, (child) => {
        if (isValidElement(child) && child.type === Route) {
          const { path, component } = child.props;
          return path === currentPath ? component : null;
        }
        return null;
      })}
    </>
  );
};
