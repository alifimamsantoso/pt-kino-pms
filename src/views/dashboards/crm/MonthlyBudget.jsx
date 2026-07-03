'use client'

// Next Imports
import dynamic from 'next/dynamic'

// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material/styles'

// Components Imports
import OptionMenu from '@core/components/option-menu'

// Styled Component Imports
const AppReactApexCharts = dynamic(() => import('@/libs/styles/AppReactApexCharts'))

const MonthlyBudget = () => {
  const theme = useTheme()

  const options = {
    chart: {
      parentHeightOffset: 0,
      toolbar: { show: false }
    },

    stroke: {
      width: 4,
      curve: 'smooth'
    },

    colors: ['var(--mui-palette-primary-main)'],

    fill: {
      type: 'gradient',
      gradient: {
        opacityFrom: 0.5,
        opacityTo: 0.05
      }
    },

    dataLabels: {
      enabled: false
    },

    grid: {
      borderColor: 'var(--mui-palette-divider)',
      strokeDashArray: 6
    },

    xaxis: {
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun'
      ]
    },

    yaxis: {
      labels: {
        formatter: value => `${value}M`
      }
    },

    responsive: [
      {
        breakpoint: theme.breakpoints.values.md,
        options: {
          chart: {
            height: 250
          }
        }
      }
    ]
  }

  const series = [
    {
      name: 'Budget Used',
      data: [150, 280, 420, 690, 980, 1500]
    }
  ]

  return (
    <Card>

      <CardHeader
        title='Project Budget'
        subheader='Budget Utilization'
        action={
          <OptionMenu
            options={[
              'This Year',
              'Export',
              'Refresh'
            ]}
          />
        }
      />

      <CardContent>

        <AppReactApexCharts
          type='area'
          height={220}
          width='100%'
          options={options}
          series={series}
        />

        <div className='mt-6 flex flex-col gap-2'>

          <div className='flex justify-between'>
            <Typography>Total Budget</Typography>
            <Typography fontWeight={600}>
              Rp 1.750.000.000
            </Typography>
          </div>

          <div className='flex justify-between'>
            <Typography>Budget Used</Typography>
            <Typography
              color='success.main'
              fontWeight={600}
            >
              Rp 1.500.000.000
            </Typography>
          </div>

          <div className='flex justify-between'>
            <Typography>Remaining</Typography>
            <Typography
              color='warning.main'
              fontWeight={600}
            >
              Rp 250.000.000
            </Typography>
          </div>

        </div>

      </CardContent>

    </Card>
  )
}

export default MonthlyBudget
