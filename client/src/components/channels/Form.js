import React from 'react';
import {Link} from 'react-router-dom';
import {Form as FinalForm, Field} from 'react-final-form';

const Form = ({onSubmit, initialValues}) => {
  const onSubmitForm = (formValues) => {
    onSubmit(formValues);
  };

  const validate = (values) => {
    const errors = {};
    if (!values.title) {
      errors.title = 'Required';
    }
    if (!values.description) {
      errors.description = 'Required';
    }
    return errors;
  };

  const renderError = (error, submitError, touched) => {
    if ((error || submitError) && touched) {
      return <span
        style={{
          margin: '.5rem 0',
          padding: '1rem',
          border: '2px solid red',
          borderRadius: '4px',
          backgroundColor: 'pink',
          color: '#CC0000',
          fontWeight: 'bold'
        }}
      >
        {error || submitError} 
      </span>;
    }
  };

  return (
      <FinalForm
        onSubmit={onSubmitForm}
        initialValues={initialValues}
        validate={validate}
        render={({handleSubmit, form, submitting, pristine}) => (
          <form
            onSubmit={handleSubmit}
            style={{
              margin: '1rem'
            }}
          >
            <Field name='title'>
              {({input, meta}) => (
                <div
                  style={{
                    margin: '1rem 0',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >
                  <label
                    htmlFor='title'
                    style={{
                      lineHeight: '3rem'
                    }}
                  >
                    Title
                  </label>
                  <input
                    id='title'
                    name='title'
                    type='text'
                    autoComplete='off'
                    placeholder='Give a great title for your Channel'
                    style={{
                      lineHeight: '3rem'
                    }}
                    {...input}
                  />
                  {renderError(meta.error, meta.submitError, meta.touched)}
                </div>
              )}
            </Field>
            <Field name='description'>
              {({input, meta}) => (
                <div
                  style={{
                    margin: '1rem 0',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >
                  <label
                    htmlFor='description'
                    style={{
                      lineHeight: '3rem'
                    }}
                  >
                    Description
                  </label>
                  <input
                    id='description'
                    name='description'
                    type='text'
                    autoComplete='off'
                    placeholder='Add a brief description about your Channel'
                    style={{
                      lineHeight: '3rem'
                    }}
                    {...input}
                  />
                  {renderError(meta.error, meta.submitError, meta.touched)}
                </div>
              )}
            </Field>
            <div
              style={{
                margin: '2rem 0',
                display: 'flex',
                justifyContent: 'end'
              }}
            >
              <button
                type='submit'
                style={{
                  border: '1px solid blue',
                  borderRadius: '4px',
                  padding: '.5rem',
                  backgroundColor: 'transparent',
                  color: 'blue',
                  fontSize: '16px',
                  cursor: 'pointer',
                  margin: '0 1rem'
                }}
              >
                Submit
              </button>
              <Link
                to='/channels'
                style={{
                  border: '1px solid blue',
                  borderRadius: '4px',
                  padding: '.5rem',
                  textDecoration: 'none',
                  color: 'blue',
                }}
              >
                Cancel
              </Link>
            </div>
          </form>
        )}
      />
  );
};

export default Form;
