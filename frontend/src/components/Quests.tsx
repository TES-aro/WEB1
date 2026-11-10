import { Quest } from './Quest.tsx';
import { Table, TableBody, TableHead, TableRow, TableCell } from  '@mui/material';

export const Quests = ({ quests }) => {
	if (!quests){
		return;
	}

	const keys = Object.keys(quests);

	return(
		<>
			<Table aria-label="simple table">
				<TableHead>
					<TableRow>
						<TableCell> Quest name </TableCell>
						<TableCell align='right'> QP </TableCell>
						<TableCell align='right'> Difficulty </TableCell>
						<TableCell align='right'> Members Only </TableCell>
						<TableCell align='right'> Status </TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{keys.map(k => {
						return (
							<Quest id={k} title={quests[k].title}
								difficulty={quests[k].difficulty}
								members={quests[k].members} qp={quests[k].qp}
								eligible={quests[k].eligible} status={quests[k].status}
							/>
						);
					})}
				</TableBody>
			</Table>
		</>
	);

};
