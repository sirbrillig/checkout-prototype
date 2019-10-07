import React from 'react';
import styled from 'styled-components';

//CSS
import { colours } from '../config/colours.js';

const Label = styled.label`
  display: block;
  color: ${ props => props.color };
  font-weight: 700;
  font-size: 14px;
  margin-bottom: 8px;
`;

const Input = styled.input`
  display: block;
  width: 100%;
  box-sizing: border-box;
  font-size: 16px;
  border: 1px solid ${ colours.gray20 };
  padding: 12px ${ props => props.rightPadding } 12px 10px;

  ::-webkit-inner-spin-button, 
  ::-webkit-outer-spin-button { 
    -webkit-appearance: none;
  }

  [type=number], 
  [type=number] { 
    -moz-appearance: none;
    appearance: none; 
  }
`;

const InputWrapper = styled.div`
  position: relative;
`;

const FieldIcon = styled.img`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 10px;
`

const Description = styled.p`
  margin: 8px 0 0 0;
  color: ${ props => props.color };
  font-style: italic;
  font-size: 14px;
`

export default class Field extends React.Component {
  renderIcon = () => {
    if ( this.props.iconURL ) {
      return <FieldIcon src={ this.props.iconURL } alt="" />
    }

    return null;
  }

  fieldOnChange = ( e ) => {
    if( this.props.onChange ){
      this.props.onChange( e.target );
    }

    return null;
  }

  onBlurField = () => {
    return null;
  }

  returnRightPadding = () => {
    return this.props.iconURL ? "30px" : "10px"
  }

  renderDescription = () => {
    if( this.props.description || this.props.error ) {
      return(
        <Description color={ this.props.error ? colours.red50 : colours.gray50 }>
          { this.props.error ? this.props.errorMessage : this.props.description }
        </Description>
      )
    }

    return null
  }

  render() {
    return (
      <div className={ this.props.className }>
        <Label htmlFor={ this.props.value } color={ this.props.error ? colours.red50 : colours.gray80 }>{ this.props.label }</Label>
        <InputWrapper>
          <Input
            id={ this.props.id }
            value={ this.props.value }
            type={ this.props.type } 
            onChange={ this.fieldOnChange } 
            onBlur={ this.onBlurField }
            placeholder={ this.props.placeholder }
            rightPadding={ this.returnRightPadding() } />
          { this.renderIcon() }
        </InputWrapper>
        { this.renderDescription() }
      </div>
    );
   }
}
