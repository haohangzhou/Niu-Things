import React, { useState } from 'react';

const TestForm = () => {
	const [name, setName] = useState('');
	console.log(name);
	const handleChange = (e) => {
		const name = e.target.value;
		setName(name);
	};
	return (
		<div>
			<form>
				<input type="text" value={name} onChange={handleChange} />
			</form>
		</div>
	);
};

export default TestForm;
