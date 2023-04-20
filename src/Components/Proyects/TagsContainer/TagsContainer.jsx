import { Chip, Stack } from '@mui/material';

const TagsContainer = ({ tags }) => {
	return (
		<Stack
			direction='row'
			spacing={1}
			flexWrap='wrap'
			rowGap={1}
			justifyContent={'center'}>
			{tags.map((tag) => (
				<Chip label={tag} variant='outlined' key={tag} color='primary'></Chip>
			))}
		</Stack>
	);
};

export default TagsContainer;
