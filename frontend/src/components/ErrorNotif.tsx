import { Alert } from '@mui/material'
export const ErrorNotif = ({message}) => {
  if(message==""){
    return(
      <>
      </>
    )
  }
  return(
    <Alert severity="error">{message}</Alert>
  )
}
