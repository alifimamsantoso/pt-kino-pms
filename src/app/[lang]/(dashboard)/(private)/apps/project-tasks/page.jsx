import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Typography from '@mui/material/Typography'

import { getProjectTasksData } from '@/app/server/actions'

const ProjectTasksPage = async () => {
  const tasks = await getProjectTasksData()

  return (
    <Grid container spacing={6}>
      <Grid size={{ xs: 12 }}>
        <Typography variant='h4'>Project Tasks</Typography>
        <Typography color='text.secondary'>Daftar task proyek dan status pelaksanaan.</Typography>
      </Grid>
      <Grid size={{ xs: 12 }}>
        <Card>
          <CardHeader title='Task List' />
          <CardContent>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Project</TableCell>
                  <TableCell>Task</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Progress</TableCell>
                  <TableCell>Vendor</TableCell>
                  <TableCell>PIC</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {tasks.map(task => (
                  <TableRow key={task.id}>
                    <TableCell>{task.projectCode}</TableCell>
                    <TableCell>{task.task}</TableCell>
                    <TableCell>{task.status}</TableCell>
                    <TableCell>{task.progress}%</TableCell>
                    <TableCell>{task.vendor}</TableCell>
                    <TableCell>{task.pic}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default ProjectTasksPage
