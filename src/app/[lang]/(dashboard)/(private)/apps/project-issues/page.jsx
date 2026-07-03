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

import { getProjectIssueData } from '@/app/server/actions'

const ProjectIssuesPage = async () => {
  const issues = await getProjectIssueData()

  return (
    <Grid container spacing={6}>
      <Grid size={{ xs: 12 }}>
        <Typography variant='h4'>Project Issues</Typography>
        <Typography color='text.secondary'>Daftar issue proyek dan tindak lanjutnya.</Typography>
      </Grid>
      <Grid size={{ xs: 12 }}>
        <Card>
          <CardHeader title='Issue List' />
          <CardContent>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Project</TableCell>
                  <TableCell>Task</TableCell>
                  <TableCell>Issue</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Priority</TableCell>
                  <TableCell>PIC</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {issues.map(issue => (
                  <TableRow key={issue.id}>
                    <TableCell>{issue.projectCode}</TableCell>
                    <TableCell>{issue.task}</TableCell>
                    <TableCell>{issue.issue}</TableCell>
                    <TableCell>{issue.status}</TableCell>
                    <TableCell>{issue.priority}</TableCell>
                    <TableCell>{issue.pic}</TableCell>
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

export default ProjectIssuesPage
