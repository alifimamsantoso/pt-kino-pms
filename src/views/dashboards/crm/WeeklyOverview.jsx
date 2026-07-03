'use client'

// Next Imports
import dynamic from 'next/dynamic'

// MUI Imports
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import { useTheme } from '@mui/material/styles'

// Components Imports
import OptionMenu from '@core/components/option-menu'

// Styled Component Imports
const AppReactApexCharts = dynamic(() => import('@/libs/styles/AppReactApexCharts'))

const series = [
  {
    name: 'Target',
    type: 'column',
    data: [75, 80, 85, 88, 92, 95]
  },
  {
    name: 'Actual',
    type: 'line',
    data: [72, 78, 82, 86, 90, 94]
  }
]

const WeeklyOverview = () => {
  const theme = useTheme()

  const options = {
    chart: {
      parentHeightOffset: 0,
      toolbar: { show: false }
    },

    plotOptions: {
      bar: {
        borderRadius: 7,
        columnWidth: '35%'
      }
    },

    markers: {
      size: 4,
      strokeWidth: 2,
      colors: ['var(--mui-palette-background-paper)'],
      strokeColors: ['var(--mui-palette-primary-main)']
    },

    stroke: {
      width: [0, 3]
    },

    legend: {
      show: true,
      position: 'top'
    },

    dataLabels: {
      enabled: false
    },

    colors: [
      'var(--mui-palette-primary-main)',
      'var(--mui-palette-success-main)'
    ],

    grid: {
      strokeDashArray: 7,
      borderColor: 'var(--mui-palette-divider)'
    },

    xaxis: {
      categories: [
        'Week 24',
        'Week 25',
        'Week 26',
        'Week 27',
        'Week 28',
        'Week 29'
      ]
    },

    yaxis: {
      min: 0,
      max: 100,
      tickAmount: 5,
      labels: {
        formatter: value => `${value}%`
      }
    }
  }

  return (
    <Card>

      <CardHeader
        title='Weekly Project Progress'
        subheader='Target vs Actual Progress'
        action={
          <OptionMenu
            options={[
              'This Month',
              'Last Month',
              'Export'
            ]}
          />
        }
      />

      <CardContent>

        <AppReactApexCharts
          type='line'
          height={220}
          width='100%'
          options={options}
          series={series}
        />

        <div className='mt-6 flex items-center justify-between'>

          <div>

            <Typography variant='h4'>
              94%
            </Typography>

            <Typography color='text.secondary'>
              Overall Project Progress
            </Typography>

          </div>

          <Button
            variant='contained'
          >
            View Report
          </Button>

        </div>

      </CardContent>

    </Card>
  )
}

export default WeeklyOverview
