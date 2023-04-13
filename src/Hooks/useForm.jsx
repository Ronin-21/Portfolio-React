import { useState } from 'react';

export const useForm = (initialForm = {}) => {
	const [formState, setFormState] = useState(initialForm);

	const onInputChange = ({ target }) => {
		const { name, value } = target;
		setFormState({
			...formState,
			[name]: value,
		});
	};

	const onResetForm = () => {
		setFormState(initialForm);
	};

	return {
		...formState,
		formState,
		onInputChange,
		onResetForm,
	};
};

// Como se utiliza

/*
const { name, email, password, onInputChange, onResetForm } = useForm({
	name: '',
	email: '',
	password: '',
});
*/

/* 
<input
	type='text'
	name='name'
	id='name'
	value={name}
	onChange={onInputChange}
	required
	autoComplete='off'
/>; 
*/
