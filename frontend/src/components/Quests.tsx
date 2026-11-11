import { Quest } from './Quest.tsx';
import { Table, TableBody, TableHead, TableRow, TableCell, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from  '@mui/material';
import { useState, useId } from 'react'

type QuestStatus =  "Completed" | "Started" | "Eligible" | "Ineligible"

type QuestFilter = {
	membersOnly: "yes" | "no" | "all";
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
	}

	return newQuest as QuestStr;
}

function filterQuest(f: "yes"|"no"|"all", q: QuestStr){
	if (f === "all"){
		return true;
	}
	return f === q.members;
}
function filter(membersOnly, status, quests){
	let questArr: QuestStr[] = []
	const keys = Object.keys(quests)
	keys.forEach(k => {
		const quest = setStatus(quests[k], k);
		if (!filterQuest(membersOnly, quest)){
			return;
		}
		if(status.includes(quest.status)){
			questArr = questArr.concat(quest);
		}
	})
	return questArr;
}

export const Quests = ({ quests }) => {
	const [membFilter, setMembFilter] = useState('all');

	const handleMemberFilter = (event) => {
		setMembFilter(event.target.value)
	}

	const rid = useId();

	if (!quests){
		return;
	}


	const questsArr = filter(membFilter, ["Completed", "Started", "Eligible", "Ineligible"] , quests);
	if (questsArr.length === 0){
		return (
			<div>
				<p> something went wrong. quest arr is empty </p>
			</div>
		)
	}

	return(
		<>
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
					{questsArr.map(q => {
						return (
							<Quest id={q.id} title={q.title}
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
