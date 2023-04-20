import { Paper, Stack, Typography, styled } from '@mui/material';

const TabContent = ({ data }) => {
	return (
		<Stack
			direction='row'
			flexWrap='wrap'
			gap={2}
			alignItems='center'
			justifyContent='center'>
			{data?.map((item, index) => {
				return (
					<StyledSvg key={index} elevation={3}>
						<img src={item.img} alt={item.alt} />
						<Typography align='center'>{item.description}</Typography>
					</StyledSvg>
				);
			})}
		</Stack>
	);
};

export default TabContent;

const StyledSvg = styled(Paper)`
	height: clamp(150px, 170px, 230px);
	width: clamp(100px, 115px, 170px);
	padding: 0.7em;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	transition: all 0.2s ease-in;

	& img {
		aspect-ratio: 1/1;
		width: 100%;
		object-fit: contain;
		/* filter: grayscale(100); */
		transition: all 0.2s ease-in;
	}
	&:hover {
		transform: scale(1.05);
		& img {
			filter: grayscale(0);
		}
	}
`;
