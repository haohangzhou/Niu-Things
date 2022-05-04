/* eslint-disable react/prop-types */
import React from 'react';
import { FormInputLabel, Input, Group } from './InputField.style.jsx';

const InputField = ({ label, ...otherProps }) => {
	return (
		<Group>
			<Input {...otherProps} />
			{label && (
				<FormInputLabel shrink={otherProps.value.length}>
					{label}
				</FormInputLabel>
			)}
		</Group>
	);
};

export default InputField;
