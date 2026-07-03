import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

import ProjectTable from '@views/apps/project-master/ProjectTable'

import { getProjectManagementData } from '@/app/server/actions'

const ProjectMasterPage = async () => {

  const projects = await getProjectManagementData()

  return (
    <Grid container spacing={6}>

      <Grid size={{ xs: 12 }}>

        <Typography variant='h4'>
          Project Master
        </Typography>

        <Typography color='text.secondary'>
          Manage all project data
        </Typography>

      </Grid>

      <Grid size={{ xs: 12 }}>

        <ProjectTable
          tableData={projects}
        />

      </Grid>

    </Grid>
  )
}

export default ProjectMasterPage
