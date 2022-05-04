/* eslint-disable react/prop-types */
import React from 'react';

import {
	BaseButton,
	GoogleSignInButton,
	InvertedButton,
} from './Button.style.jsx';

export const BUTTON_TYPE_CLASSES = {
	base: BaseButton,
	google: GoogleSignInButton,
	inverted: InvertedButton,
};

const Button = ({ children, buttonType = 'base', ...otherProps }) => {
	const CustomButton = BUTTON_TYPE_CLASSES[buttonType];
	return <CustomButton {...otherProps}>{children}</CustomButton>;
};

export default Button;
