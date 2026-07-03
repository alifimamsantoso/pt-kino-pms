'use client'

// Next Imports
import dynamic from 'next/dynamic'

// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import { useTheme } from '@mui/material/styles'

// Components Imports
import CustomAvatar from '@core/components/mui/Avatar'
import OptionMenu from '@core/components/option-menu'

// Styled Component Imports
const AppReactApexCharts = dynamic(() => import('@/libs/styles/AppReactApexCharts'))

const series = []

const ProjectTimeline = ({ projects }) => {
  // Hookss
  const theme = useTheme()
  const labels = projects.map(project => project.projectName)

const series = [
  {
    data: projects.map(project => ({
      x: project.projectName,
      y: [
        new Date(project.startDate).getTime(),
        new Date(project.finishDate).getTime()
      ]
    }))
  }
]

  const options = {
    chart: {
      parentHeightOffset: 0,
      toolbar: { show: false }
    },
    tooltip: { enabled: false },
    plotOptions: {
      bar: {
        horizontal: true,
        borderRadius: 10,
        distributed: true,
        barHeight: 26
      }
    },
    stroke: {
      width: 2,
      colors: ['var(--mui-palette-background-paper)']
    },
    colors: [
      'var(--mui-palette-primary-main)',
      'var(--mui-palette-success-main)',
      'var(--mui-palette-secondary-main)',
      'var(--mui-palette-info-main)',
      'var(--mui-palette-warning-main)'
    ],
    dataLabels: {
      enabled: true,
      style: { fontSize: '0.8125rem', fontWeight: 500 },
      formatter: (val, opts) => labels[opts.dataPointIndex],
      offsetY: 5
    },
    states: {
      hover: {
        filter: { type: 'none' }
      },
      active: {
        filter: { type: 'none' }
      }
    },
    legend: { show: false },
    grid: {
      strokeDashArray: 6,
      borderColor: 'var(--mui-palette-divider)',
      xaxis: {
        lines: { show: true }
      },
      yaxis: {
        lines: { show: false }
      },
      padding: {
        top: -2,
        left: theme.direction === 'rtl' ? 7 : -10,
        right: -5,
        bottom: 10
      }
    },
    xaxis: {
      type: 'datetime',
      axisTicks: { show: false },
      axisBorder: { show: false },
      labels: {
        style: { colors: 'var(--mui-palette-text-disabled)', fontSize: '13px' },
        datetimeFormatter: {
          month: 'MMM'
        }
      }
    },
    yaxis: {
      labels: {
        show: true,
        align: theme.direction === 'rtl' ? 'right' : 'left',
        style: {
          fontSize: '0.8125rem',
          colors: 'var(--mui-palette-text-primary)'
        }
      }
    },
    responsive: [
      {
        breakpoint: 1024,
        options: {
          dataLabels: {
            style: { fontSize: '0.625rem' }
          }
        }
      }
    ]
  }

  return (
    <Card>
      <Grid container>
        <Grid size={{ xs: 12, sm: 8 }} className='max-sm:border-be sm:border-ie'>
          <CardHeader
  title='Master Project Schedule'
  subheader={`${projects.length} Active Projects`}
/>
          <CardContent>
            <AppReactApexCharts height={315} width='100%' type='rangeBar' series={series} options={options} />
          </CardContent>
        </Grid>
        <Grid size={{ xs: 12, sm: 4 }} className='flex flex-col'>
          <CardHeader
  title='Active Project'
  subheader={`${projects.filter(project => project.status === 'On Progress').length} Running Projects`}
            action={<OptionMenu options={['Refresh', 'Update', 'Share']} />}
          />
          <CardContent className='flex grow flex-col justify-center gap-6'>
            {projects
  .filter(project => project.status === 'On Progress')
  .map(project => (
    <div key={project.id} className='flex items-center gap-3'>
      <CustomAvatar
        skin='light'
        color='primary'
        variant='rounded'
      >
        <i className='ri-folder-line' />
      </CustomAvatar>

      <div className='flex flex-col gap-0.5'>
        <Typography
          color='text.primary'
          className='font-medium'
        >
          {project.projectName}
        </Typography>

        <Typography variant='body2'>
          Progress {project.progress}%
        </Typography>
      </div>
    </div>
))}
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  )
}

export default ProjectTimeline
