'use client'

// Next Imports
import dynamic from 'next/dynamic'

// MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material/styles'

// Styled Component Imports
const AppReactApexCharts = dynamic(() => import('@/libs/styles/AppReactApexCharts'))

// Progress Project
const series = [94, 4, 2]

const DonutChart = () => {
  const theme = useTheme()

  const options = {
    legend: { show: false },
    stroke: { width: 5, colors: ['var(--mui-palette-background-paper)'] },
    grid: {
      padding: {
        top: 10,
        left: 0,
        right: 0,
        bottom: 13
      }
    },
    colors: [
      'var(--mui-palette-success-main)',
      'var(--mui-palette-warning-main)',
      'var(--mui-palette-error-main)'
    ],
    labels: [
  'Completed',
  'On Progress',
  'Issue'
],
    tooltip: {
      y: {
        formatter: val => `${val}%`
      }
    },
    dataLabels: {
      enabled: false
    },
    states: {
      hover: {
        filter: { type: 'none' }
      },
      active: {
        filter: { type: 'none' }
      }
    },
    plotOptions: {
      pie: {
        donut: {
          size: '70%',
          labels: {
            show: true,
            name: {
              show: false
            },
            total: {
              show: true,
              label: 'Progress',
              fontWeight: 600,
              fontSize: '1rem',
              color: 'var(--mui-palette-text-secondary)',
              formatter: () => '94%'

            },
            value: {
              offsetY: 6,
              fontWeight: 600,
              fontSize: '0.9375rem',
              formatter: val => `${val}%`,
              color: 'var(--mui-palette-text-primary)'
            }
          }
        }
      }
    },
    responsive: [
      {
        breakpoint: 1309,
        options: {
          plotOptions: {
            pie: {
              offsetY: 20
            }
          }
        }
      },
      {
        breakpoint: 900,
        options: {
          plotOptions: {
            pie: {
              offsetY: 0
            }
          }
        }
      },
      {
        breakpoint: theme.breakpoints.values.sm,
        options: {
          chart: {
            height: 165
          }
        }
      }
    ]
  }

  return (
  <Card className='bs-full'>
    <CardContent className='pbe-0'>
      <div className='flex flex-wrap items-center gap-1'>
        <Typography variant='h5'>94%</Typography>

        <Typography color='success.main'>
          Excellent
        </Typography>
      </div>

      <Typography variant='subtitle1'>
        Overall Progress
      </Typography>

      <AppReactApexCharts
        type='donut'
        height={127}
        width='100%'
        options={options}
        series={series}
      />
    </CardContent>
  </Card>
)
}

export default DonutChart
