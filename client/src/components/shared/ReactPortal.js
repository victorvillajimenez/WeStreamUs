import React, {useState, useLayoutEffect} from 'react';
import ReactDOM from 'react-dom';

const ReactPortal = ({wrapperId = 'modal', children}) => {
  const [wrapper, setWrapper] = useState();

  const createNodeContainer = (containerId) => {
    const container = document.createElement('div');
    container.setAttribute('id', containerId);
    document.body.appendChild(container);
    return container;
  };

  useLayoutEffect(() => {
    let elCreated = false;
    let el = document.getElementById(wrapperId);
    if (!el) {
      el = createNodeContainer(wrapperId);
      elCreated = true;
    }
    setWrapper(el);

    return () => {
      if (elCreated && el.parentNode) {
        el.parentNode.removeChild(el);
      }
    };
  }, [wrapperId]);

  if (!wrapper) return null;

  return ReactDOM.createPortal(children, wrapper);
};

export default ReactPortal;
