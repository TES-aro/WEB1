import { Card, CardContent, Typography } from '@mui/material';

function parseTime(date: string){
	const dateStr = date.substring(0, 10);
	const timeStr = date.substring(11, 16);
	return(
		{
			dateStr: dateStr,
			timeStr: timeStr
		}
	);
}
export function Event({ event }) {
	const { dateStr, timeStr } = parseTime(event.date);
	return(
		<>
			<Card variant="outlined">
				<CardContent>
					<Typography variant="subtitle1">{dateStr} </Typography>
					<Typography variant="subtitle1">{timeStr} </Typography>
					<Typography variant="body1"> {event.details} </Typography>
				</CardContent>
			</Card>
		</>
	);
}
