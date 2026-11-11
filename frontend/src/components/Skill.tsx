import { TableRow, TableCell, Link } from '@mui/material';

export const Skill = ({ skillName, fine_xp, level }) => {
	if (!fine_xp){
		return;
	}
	const url = `https://runescape.wiki/w/${skillName}`;
	return(
		<TableRow key={skillName}>
			<TableCell>
				<Link href={url}> {skillName} </Link>
			</TableCell>
			<TableCell align='right'> {level} </TableCell>
			<TableCell align='right'> {fine_xp} </TableCell>
		</TableRow>
	);
};
