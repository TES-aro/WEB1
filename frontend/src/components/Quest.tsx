import { TableCell, TableRow, Link } from '@mui/material';

export const Quest = ({ id, title, difficulty, members, qp, status }) => {
	
	const formatedName = title.replace(' ', '_');
	const wikiURL = `https://runescape.wiki/w/${formatedName}`;

	return(
		<TableRow key={id}>
			<TableCell> <Link href={wikiURL} underline='hover' >{title} </Link></TableCell>
			<TableCell align='right'> {qp} </TableCell>
			<TableCell align='right'> {difficulty} </TableCell>
			<TableCell align='right'> {members} </TableCell>
			<TableCell align='right'> {status} </TableCell>
		</TableRow>
	);
};
