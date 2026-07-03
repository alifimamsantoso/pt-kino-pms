'use client'

// Next Imports
import dynamic from 'next/dynamic'

// MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material/styles'

// Third Party Imports
import classnames from 'classnames'

// Components Imports
import OptionMenu from '@core/components/option-menu'

// Styled Component Imports
const AppReactApexCharts = dynamic(() => import('@/libs/styles/AppReactApexCharts'))

// Styles Imports
import tableStyles from '@core/styles/table.module.css'

const data = [
  {
    total: '12 File',
    title: 'Shop Drawing',
    status: '100%',
    trend: 'up'
  },
  {
    total: '8 File',
    title: 'Method Statement',
    status: '80%',
    trend: 'up'
  },
  {
    total: '10 File',
    title: 'As Built Drawing',
    status: '65%',
    trend: 'up'
  },
  {
    total: '5 File',
    title: 'FAT / SAT Report',
    status: '40%',
    trend: 'down'
  },
  {
    total: '6 File',
    title: 'Commissioning Report',
    status: '50%',
    trend: 'up'
  },
  {
    total: '3 File',
    title: 'BAST Document',
    status: '20%',
    trend: 'down'
  }
]

const series = [
  {
    name: 'Required',
    data: [12, 10, 12, 8, 8, 5]
  },
  {
    name: 'Completed',
    data: [12, 8, 10, 5, 6, 3]
  }
]

const ExternalLinks = () => {
  const theme = useTheme()

  const options = {
    chart: {
      stacked: false,
      parentHeightOffset: 0,
      toolbar: { show: false }
    },

    plotOptions: {
      bar: {
        borderRadius: 8,
        columnWidth: '45%'
      }
    },

    colors: [
      'var(--mui-palette-primary-main)',
      'var(--mui-palette-success-main)'
    ],

    dataLabels: {
      enabled: false
    },

    stroke: {
      width: 0
    },

    legend: {
      position: 'top'
    },

    xaxis: {
      categories: [
        'Shop',
        'Method',
        'As Built',
        'FAT',
        'Comm.',
        'BAST'
      ]
    },

    yaxis: {
      labels: {
        formatter: value => `${value}`
      }
    },

    grid: {
      borderColor: 'var(--mui-palette-divider)',
      strokeDashArray: 5
    },

    responsive: [
      {
        breakpoint: theme.breakpoints.values.md,
        options: {
          chart: {
            height: 280
          }
        }
      }
    ]
  }

  return (
    <Card>

      <CardHeader
        title='Project Documents'
        subheader='Document Completion Status'
        action={
          <OptionMenu
            options={[
              'Refresh',
              'Export',
              'Print'
            ]}
          />
        }
      />

      <CardContent className='flex flex-col gap-8'>

        <AppReactApexCharts
          type='bar'
          height={250}
          width='100%'
          series={series}
          options={options}
        />

        <div className='overflow-x-auto'>
          <table className={tableStyles.table}>
            <tbody>

              {data.map((row, index) => (

                <tr key={index}>

                  <td className='!pis-0'>
                    <Typography
                      color='text.primary'
                      className='font-medium'
                    >
                      {row.title}
                    </Typography>
                  </td>

                  <td align='right'>
                    <Typography>
                      {row.total}
                    </Typography>
                  </td>

                  <td align='right'>

                    <div className='flex justify-end items-center gap-2'>

                      <Typography className='font-medium'>
                        {row.status}
                      </Typography>

                      <i
                        className={classnames(
                          row.trend === 'up'
                            ? 'ri-arrow-up-s-line text-success'
                            : 'ri-arrow-down-s-line text-error'
                        )}
                      />

                    </div>

                  </td>

                </tr>

              ))}

            </tbody>
          </table>
        </div>

      </CardContent>

    </Card>
  )
}

export default ExternalLinks
