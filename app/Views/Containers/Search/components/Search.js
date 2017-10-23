/**
 *
 * @name: Search.js
 * @author: Paul Crump
 */

/**
 * Boiler plate
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector, SubmissionError } from 'redux-form'
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';

/**
 * Application imports
 */
import TextInput from '../../../Common/ReduxFormComponents/TextInput';
import InputGroup from '../../../Common/ReduxFormComponents/InputGroup';



/**
 * Application logic
 */
const submit = ({ search = '' }, dispatch, props) => {
  if(search.trim() === '') {
    throw new SubmissionError({
      search: 'Required'
    })
  }
  return new Promise(resolve => resolve());
}

class Search extends Component {

  componentWillUnmount(){
    const { reset } = this.props;
    reset();
  }

  render() {
    const { className, handleSubmit, pristine, reset, submitting, submitSucceeded, search } = this.props;

    return (
      <div className={className}>
        {submitSucceeded && (<Redirect push to={`/search-results/${search}`}/>)}
        <form onSubmit={handleSubmit(submit.bind(this))}>
          <InputGroup
            input={
              <Field
                name="search"
                component={TextInput}
                type="text"
                placeholder="Search for a movie"
              />
            }
            button={
              <button class="btn btn-secondary" disabled={pristine || submitting} type="submit">Go!</button>
            }
          />
        </form>
      </div>
    );
  }
}

Search.propTypes = {
  className: PropTypes.string
};


// decorate with styled components
const Styled = styled(Search)`
`;

// Decorate with connect to read form values
const selector = formValueSelector('search') // <-- same as form name
const SelectedValues = connect(state => {
  return {
    search: selector(state, 'search')
  }
})(Styled)

// decorate with redux form
export default reduxForm({
  form: 'search'
})(SelectedValues)
