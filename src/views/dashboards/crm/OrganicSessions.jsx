'use client'

import { useMemo } from 'react'

// Next Imports
import dynamic from 'next/dynamic'

// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import { useTheme } from '@mui/material/styles'

// Components Imports
import OptionMenu from '@core/components/option-menu'

// Styled Component Imports
const AppReactApexCharts = dynamic(() => import('@/libs/styles/AppReactApexCharts'))

const OrganicSessions = ({ projects }) => {
  const theme = useTheme()
  const summary = useMemo(() => {
  const completed = projects.filter(p => p.status === 'Completed').length
  const progress = projects.filter(p => p.status === 'On Progress').length
  const waiting = projects.filter(p => p.status === 'Waiting Material').length
  const hold = projects.filter(p => p.status === 'Hold').length
  const delayed = projects.filter(p => p.status === 'Delayed').length

  return [completed, progress, waiting, hold, delayed]
}, [projects])

const overall =
  projects.length > 0
    ? Math.round(
        projects.reduce((a, b) => a + b.progress, 0) / projects.length
      )
    : 0

  const options = {
    chart: {
      sparkline: { enabled: true }
    },
    colors: [
      'var(--mui-palette-primary-main)',
      'var(--mui-palette-success-main)',
      'var(--mui-palette-warning-main)',
      'var(--mui-palette-info-main)',
      'var(--mui-palette-error-main)'
    ],
    grid: {
      padding: {
        bottom: -30
      }
    },
    legend: {
      show: true,
      position: 'bottom',
      fontSize: '15px',
      offsetY: 5,
      itemMargin: {
        horizontal: 28,
        vertical: 6
      },
      labels: {
        colors: 'var(--mui-palette-text-secondary)'
      },
      markers: {
        offsetY: 1,
        offsetX: theme.direction === 'rtl' ? 4 : -1,
        width: 10,
        height: 10
      }
    },
    tooltip: { enabled: true },
    dataLabels: { enabled: false },
    stroke: {
      width: 4,
      lineCap: 'round',
      colors: ['var(--mui-palette-background-paper)']
    },

    labels: [
  'Completed',
  'On Progress',
  'Waiting Material',
  'Hold',
  'Delayed'
],

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
        endAngle: 130,
        startAngle: -130,
        customScale: 0.9,
        donut: {
          size: '83%',
          labels: {
            show: true,
            name: {
              offsetY: 25,
              fontSize: '0.9375rem',
              color: 'var(--mui-palette-text-secondary)'
            },
            value: {
              offsetY: -15,
              fontWeight: 600,
              fontSize: '1.75rem',
              formatter: value => `${value}%`,
              color: 'var(--mui-palette-text-primary)'
            },
            total: {
              show: true,
              label: 'Overall',
              fontSize: '1rem',
              color: 'var(--mui-palette-text-secondary)',
              formatter: () => `${overall}%`
            }
          }
        }
      }
    }
  }

  return (
    <Card>
      <CardHeader
        title='Project Status Summary'
        action={
          <OptionMenu
            options={[
              'This Month',
              'Last Month',
              'This Year'
            ]}
          />
        }
      />

      <CardContent>
        <AppReactApexCharts
          type='donut'
          height={373}
          width='100%'
          options={options}
          series={summary}
        />
      </CardContent>
    </Card>
  )
}

export default OrganicSessions
