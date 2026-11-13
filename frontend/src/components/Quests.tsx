import { Quest } from './Quest.tsx';
import { Table, TableBody, TableHead, TableRow, TableCell, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Box, FormGroup, Checkbox } from  '@mui/material';
import { useState, useId } from 'react';

type QuestStatus =  'Completed' | 'Started' | 'Eligible' | 'Ineligible'

type StatusFilter = {
	Completed: boolean;
	Started: boolean;
	Eligible: boolean;
	Ineligible: boolean;
}

type QuestFilter = {
	membersOnly: 'yes' | 'no' | 'all';
	status: QuestStatus[]
}

type QuestStr = {
	id: string;
	title: string;
	members: string;
	difficulty: string;
	qp: number;
	status: QuestStatus;
}

function setStatus(quest, key): QuestStr {

	const membOnly = quest.members ? 'yes' : 'no';

	let dif;
	switch (quest.difficulty) {
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

	let statusStr;
	switch (quest.status){
	case 'NOT_STARTED':
		statusStr = quest.eligible ? 'Eligible' : 'Ineligible';
		break;
	case 'STARTED':
		statusStr = 'Started';
		break;
	case 'COMPLETED':
		statusStr = 'Completed';
		break;
	default:
		statusStr = 'Unknown';
	}

	const newQuest = {
		id: key,
		title: quest.title,
		members: membOnly,
		difficulty: dif,
		qp: quest.qp,
		status: statusStr
	};

	return newQuest as QuestStr;
}

function filterQuest(f: 'yes'|'no'|'all', q: QuestStr){
	if (f === 'all'){
		return true;
	}
	return f === q.members;
}

function filter(membersOnly, status, quests){
	let questArr: QuestStr[] = [];
	const keys = Object.keys(quests);
	keys.forEach(k => {
		const quest = setStatus(quests[k], k);
		if (!filterQuest(membersOnly, quest)){
			return;
		}
		if(status[quest.status]){
			questArr = questArr.concat(quest);
		}
	});
	return questArr;
}
const questTheme = {
	bgcolor: '#8be9fd',
};
export const Quests = ({ quests }) => {
	const [membFilter, setMembFilter] = useState('all');
	const [statusFilter, setStatusFilter] = useState({
		Completed: true,
		Started: true,
		Eligible: true,
		Ineligible: true
	});

	const handleStatus = (event) => {
		const newStatus = {
			...statusFilter,
			[event.target.name]: event.target.checked
		};
		setStatusFilter(newStatus);
		console.log(newStatus);
	};

	const handleMemberFilter = (event) => {
		setMembFilter(event.target.value);
	};

	const rid = useId();

	if (!quests){
		return;
	}

	const questsArr = filter(membFilter, statusFilter , quests);

	return(
		<>
			<Box sx={{ display: 'flex' }}>
				<FormControl>
					<FormLabel id={`${rid}-member-label`}> Members Only: </FormLabel>
					<RadioGroup
						aria-labelledby={`${rid}-members-label`}
						name="members-radio"
						value={membFilter}
						onChange={handleMemberFilter}
					>
						<FormControlLabel value='all' control={<Radio />} label="All" />
						<FormControlLabel value='yes' control={<Radio />} label="Members Only" />
						<FormControlLabel value='no' control={<Radio />} label="Free-to-play" />
					</RadioGroup>
				</FormControl>
				<FormControl>
					<FormLabel id={`${rid}-status-label`}>Show:</FormLabel>
					<FormGroup>
						<FormControlLabel
							control={
								<Checkbox
									checked={statusFilter.Completed}
									onChange={handleStatus}
									name="Completed"
								/>
							}
							label="Completed"
						/>
						<FormControlLabel
							control={
								<Checkbox
									checked={statusFilter.Started}
									onChange={handleStatus}
									name="Started"
								/>
							}
							label="Started"
						/>
						<FormControlLabel
							control={
								<Checkbox
									checked={statusFilter.Eligible}
									onChange={handleStatus}
									name="Eligible"
								/>
							}
							label="Eligible"
						/>
						<FormControlLabel
							control={
								<Checkbox
									checked={statusFilter.Ineligible}
									onChange={handleStatus}
									name="Ineligible"
								/>
							}
							label="Ineligible"
						/>

					</FormGroup>
				</FormControl>
			</Box>
			<Table aria-label="simple table">
				<TableHead sx={{ bgcolor: questTheme.bgcolor }}>
					<TableRow>
						<TableCell> Quest name </TableCell>
						<TableCell align='right'> QP </TableCell>
						<TableCell align='right'> Difficulty </TableCell>
						<TableCell align='right'> Members Only </TableCell>
						<TableCell align='right'> Status </TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{questsArr.map(q => {
						return (
							<Quest key={q.id} title={q.title}
								difficulty={q.difficulty}
								members={q.members} qp={q.qp}
								status={q.status}
							/>
						);
					})}
				</TableBody>
			</Table>
		</>
	);

};
