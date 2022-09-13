import React, {useEffect} from 'react';
import ReactPortal from './ReactPortal'

const Modal = ({header, content, actions, isOpen, handleClose, onDismiss}) => {

  useEffect(() => {
    const closeOnEscapeKey = e =>
      e.key === 'Escape' ? handleClose() : null;

    document.body.addEventListener('keydown', closeOnEscapeKey);

    return () =>
      document.body.removeEventListener('keydown', closeOnEscapeKey);
  }, [handleClose]);

  const stopPropagationOnDismiss = e => e.stopPropagation();

  if (!isOpen) return null;
  if (!header && !content) return null;

  return (
    <ReactPortal>
      <div
        onClick={onDismiss}
        style={{
          backgroundColor: 'rgba(128,128,128,.7)',
          height: '100%',
          width: '100%',
          position: 'fixed',
          left: 0,
          top: 0,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <div
          onClick={stopPropagationOnDismiss}
          style={{
            minWidth: '300px',
            border: '2px solid black',
            borderRadius: '.5rem',
            backgroundColor: 'white'
          }}
        >
          {!!header &&
            <div
              style={{
                padding: '.5rem 1rem',
                borderBottom: '1px solid black',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              {header}
              <button
                style={{
                  marginTop: '.5rem',
                  alignSelf: 'flex-start'
                }}
                onClick={handleClose}
              >
                X
              </button>
            </div>
          }
          {!!content &&
            <div
              style={{
                padding: '1rem',
                borderBottom: '1px solid black'
              }}
            >
              {content}
            </div>
          }
          {!!actions &&
            <div
              style={{
                padding: '1rem'
              }}
            >
              {actions}
            </div>
          }
        </div>
      </div>
    </ReactPortal>
  );
};

export default Modal;
