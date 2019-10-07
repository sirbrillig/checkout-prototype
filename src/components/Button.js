import React from 'react';
import styled from 'styled-components';

//CSS
import { colours } from '../config/colours.js';

const CalltoAction = styled.button`
	display: block;
	width: ${ props => props.width };
	font-size: 1em;
	border-radius: ${ props => props.borderRadius };
	padding: ${ props => props.padding };
	background: ${ props => props.background };
	border: ${ props => props.borderWeight } solid ${ props => props.borderColour };
	color: ${ props => props.textColour };
	box-shadow: 0 ${ props => props.borderWeight } 0 ${ props => props.borderColour };
	font-weight: ${ props => props.fontWeight };
	text-decoration: ${ props => props.textDecoration };

	:hover {
		cursor: pointer;
		background: ${ props => props.rollOverColour };
		border: ${ props => props.borderWeight } solid ${ props => props.rollOverBorderColour };
		box-shadow: 0 ${ props => props.borderWeight } 0 ${ props => props.rollOverBorderColour };
		text-decoration: none;
	}

	:active {
		background: ${ props => props.background };
		border: ${ props => props.borderWeight } solid ${ props => props.borderColour };
		box-shadow: 0 ${ props => props.borderWeight } 0 ${ props => props.borderColour };
		text-decoration: ${ props => props.textDecoration };
	}

	img {
		margin-bottom: -1px;
		transform: translateY(2px);
		filter: grayscale(100%);
		opacity: 0.5;
	}
`;

export default class Button extends React.Component {

	static defaultProps = {
	  width: "auto",
	};

	returnBackgroundColour = ( state ) => {
		switch ( state ) {
			case "primary":
				return colours.primary;
			case "disabled":
				return colours.gray0;
			case "paypal-disabled":
				return colours.gray0;
			case "apple-disabled":
				return colours.gray0;
			default:
				return "none"
		}
	}

	returnRollOverColour = ( state ) => {
		switch ( state ) {
			case "primary":
				return colours.highlight;
			case "disabled":
				return colours.gray0;
			case "paypal-disabled":
				return colours.gray0;
			case "apple-disabled":
				return colours.gray0;
			default:
				return "none"
		}
	}

	returnBorderColour = ( state ) => {
		switch ( state ) {
			case "primary":
				return colours.pink70;
			case "disabled":
				return colours.gray20;
			case "paypal-disabled":
				return colours.gray0;
			case "apple-disabled":
				return colours.gray0;
			default:
				return colours.highlight;
		}
	}

	returnRollOverBorderColour = ( state ) => {
		switch ( state ) {
			case "primary":
				return colours.blue80;
			case "disabled":
				return colours.gray20;
			case "paypal-disabled":
				return colours.gray0;
			case "apple-disabled":
				return colours.gray0;
			default:
				return colours.blue80;
		}
	}

	returnTextColour = ( state ) => {
		switch ( state ) {
			case "primary":
				return colours.white;
			case "disabled":
				return colours.gray20;
			default:
				return colours.highlight;
		}
	}

	returnFontWeight = ( state ) => {
		if( state === "disabled" || state === "text-button" ) {
			return 400;
		}

		return 600;
	}

	returnBorderRadius = ( type ) => {
		if( type === "paypal" ) {
			return "50px";
		}

		return "3px";
	}

	render() {
		return(
			<CalltoAction 
			  background={ this.returnBackgroundColour( this.props.state ) }
			  borderColour={ this.returnBorderColour( this.props.state ) } 
			  textColour={ this.returnTextColour( this.props.state ) } 
			  rollOverColour= { this.returnRollOverColour( this.props.state ) }
			  rollOverBorderColour= { this.returnRollOverBorderColour( this.props.state ) } 
			  width={ this.props.width }
			  fontWeight={ this.returnFontWeight( this.props.status ) }
			  borderRadius={ this.returnBorderRadius( this.props.type )}
			  borderWeight={ this.props.status === "text-button" ? "0" : "1px" }
			  textDecoration={ this.props.status === "text-button" ? "underline" : "none" }
			  padding={ this.props.status === "text-button" ? "0" : "10px 15px" } 
			  onClick={ this.props.onClick } >
			 	  { this.props.label }

			 	  { this.props.content }
			</CalltoAction>
		)
	}
}
