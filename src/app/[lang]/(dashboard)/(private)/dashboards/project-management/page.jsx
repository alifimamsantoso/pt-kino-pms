import Grid from '@mui/material/Grid'

import Award from '@views/dashboards/crm/Award'
import CardStatVertical from '@components/card-statistics/Vertical'
import StackedBarChart from '@views/dashboards/crm/StackedBarChart'
import DonutChart from '@views/dashboards/crm/DonutChart'
import OrganicSessions from '@views/dashboards/crm/OrganicSessions'
import ProjectTimeline from '@views/dashboards/crm/ProjectTimeline'
import WeeklyOverview from '@views/dashboards/crm/WeeklyOverview'
import SocialNetworkVisits from '@views/dashboards/crm/SocialNetworkVisits'
import MonthlyBudget from '@views/dashboards/crm/MonthlyBudget'
import MeetingSchedule from '@views/dashboards/crm/MeetingSchedule'
import ExternalLinks from '@views/dashboards/crm/ExternalLinks'
import PaymentHistory from '@views/dashboards/crm/PaymentHistory'
import SalesInCountries from '@views/dashboards/crm/SalesInCountries'
import UserTable from '@views/dashboards/crm/UserTable'

import { getServerMode } from '@core/utils/serverHelpers'
import {
  getUserData,
  getProjectManagementData
} from '@/app/server/actions'

const DashboardProjectManagement = async () => {
  const data = await getUserData()
  const projects = await getProjectManagementData()
  const serverMode = await getServerMode()

  return (
    <Grid container spacing={6}>
      <Grid size={{ xs: 12, md: 4 }}>
        <Award project={projects[0]} />
      </Grid>
      <Grid size={{ xs: 12, md: 2, sm: 3 }}>
        <CardStatVertical
          stats='18'
          title='Total Project'
          trendNumber='+2'
          chipText='This Month'
          avatarColor='primary'
          avatarIcon='ri-folder-line'
          avatarSkin='light'
          chipColor='secondary'
        />
      </Grid>
      <Grid size={{ xs: 12, sm: 3, md: 2 }}>
        <CardStatVertical
          stats='11'
          title='Active Project'
          trendNumber='+1'
          chipText='Running'
          avatarColor='success'
          avatarIcon='ri-play-circle-line'
          avatarSkin='light'
          chipColor='secondary'
        />
      </Grid>
      <Grid size={{ xs: 12, sm: 3, md: 2 }}>
        <StackedBarChart />
      </Grid>
      <Grid size={{ xs: 12, sm: 3, md: 2 }}>
        <DonutChart />
      </Grid>
      <Grid size={{ xs: 12, md: 4 }}>
        <OrganicSessions projects={projects} />
      </Grid>
      <Grid size={{ xs: 12, md: 8 }}>
        <ProjectTimeline projects={projects} />
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 4 }}>
        <WeeklyOverview />
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 4 }}>
        <SocialNetworkVisits />
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 4 }}>
        <MonthlyBudget />
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 4 }}>
        <MeetingSchedule />
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 4 }}>
        <ExternalLinks />
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 4 }}>
        <PaymentHistory serverMode={serverMode} />
      </Grid>
      <Grid size={{ xs: 12, md: 4 }}>
        <SalesInCountries />
      </Grid>
      <Grid size={{ xs: 12, md: 8 }}>
        <UserTable tableData={projects} />
      </Grid>
    </Grid>
  )
}

export default DashboardProjectManagement
