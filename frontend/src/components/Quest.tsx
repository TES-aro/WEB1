import { TableCell, TableRow, Link } from '@mui/material';

export const Quest = ({ id, title, difficulty, members, qp, eligible, status }) => {
	let dif;
	switch (difficulty) {
	case 0:
		dif = 'Novice';
		break;
	case 1:
		dif = 'Intermediate';
		break;
	case 2:
		dif = 'Experienced';
		break;
	case 3:
		dif = 'Master';
		break;
	case 4:
		dif = 'Grandmaster';
		break;
	default:
		dif = 'Multi';
		break;
	}

	const membOnly = members ? 'yes' : 'no';

	let statusStr;
	switch (status){
	case 'NOT_STARTED':
		statusStr = eligible ? 'eligible' : 'ineligible';
		break;
	case 'STARTED':
		statusStr = 'started';
		break;
	case 'COMPLETED':
		statusStr = 'completed';
		break;
	default:
		statusStr = 'unknown';
	}
	const formatedName = title.replace(' ', '_');
	const wikiURL = `https://runescape.wiki/w/${formatedName}`;

	return(
		<TableRow key={id}>
			<TableCell> <Link href={wikiURL} underline='hover' >{title} </Link></TableCell>
			<TableCell align='right'> {qp} </TableCell>
			<TableCell align='right'> {dif} </TableCell>
			<TableCell align='right'> {membOnly} </TableCell>
			<TableCell align='right'> {statusStr} </TableCell>
		</TableRow>
	);
};
