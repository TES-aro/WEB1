import {TableRow, TableCell, Link} from '@mui/material';


export const Skill = ({skillName, fine_xp, level}) => {
  if (!fine_xp){
    return
  }
  const url = `https://runescape.wiki/w/${skillName}`
  return(
    <TableRow key={skillName}>
      <TableCell>
        <Link href={url}> {skillName} </Link>
      </TableCell>
      <TableCell> {level} </TableCell>
      <TableCell> {fine_xp} </TableCell>
    </TableRow>
  )
}
