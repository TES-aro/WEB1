import {Skill} from './Skill.tsx'
import {Table, TableBody, TableHead, TableRow, TableCell} from '@mui/material'

export const Skills = ({skills}) => {
  if (!skills){
    return;
  }
  const keys = Object.keys(skills);
  return(
    <Table>
      <TableHead>
        <TableRow>
          <TableCell> Skill </TableCell>
          <TableCell align='right' > Level </TableCell>
          <TableCell align='right' > total experience </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {keys.map(k => {
          return(
            <Skill skillName={k}
              fine_xp={skills[k].fine_xp}
              level={skills[k].level}
            />
          )
        })}
      </TableBody>
    </Table>
  )
}
