// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Chip from '@mui/material/Chip'
import Typography from '@mui/material/Typography'

// Third-party Imports
import classnames from 'classnames'

// Components Imports
import OptionMenu from '@core/components/option-menu'

// Styles Imports
import tableStyles from '@core/styles/table.module.css'

const data = [
  {
    plant: 'Plant 10',
    progress: '94%',
    status: 'On Track',
    trend: 'up'
  },
  {
    plant: 'Plant 9',
    progress: '88%',
    status: 'On Track',
    trend: 'up'
  },
  {
    plant: 'Plant LD',
    progress: '72%',
    status: 'Attention',
    trend: 'down'
  },
  {
    plant: 'Cikembar',
    progress: '91%',
    status: 'On Track',
    trend: 'up'
  },
  {
    plant: 'Bandung',
    progress: '45%',
    status: 'Delayed',
    trend: 'down'
  },
  {
    plant: 'Tangerang',
    progress: '100%',
    status: 'Completed',
    trend: 'up'
  }
]

const SalesInCountries = () => {
  return (
    <Card>

      <CardHeader
        title='Project Progress by Plant'
        subheader='Overall Site Performance'
        action={
          <OptionMenu
            options={[
              'This Month',
              'This Quarter',
              'Export'
            ]}
          />
        }
      />

      <CardContent className='flex flex-col gap-10'>

        <div className='flex flex-col gap-2'>

          <div className='flex items-center gap-2'>

            <Typography variant='h2'>
              81%
            </Typography>

            <Chip
              variant='tonal'
              color='success'
              label='On Track'
              size='small'
            />

          </div>

          <Typography>
            Average Progress All Plants
          </Typography>

        </div>

        <div>

          <table className={tableStyles.table}>

            <tbody>

              {data.map((row, index) => (

                <tr key={index} className='first:border-bs'>

                  <td className='!pis-0'>

                    <Typography color='text.primary'>
                      {row.plant}
                    </Typography>

                  </td>

                  <td className='text-end'>

                    <Typography
                      color='text.primary'
                      className='font-medium'
                    >
                      {row.progress}
                    </Typography>

                  </td>

                  <td className='!pie-0'>

                    <div className='flex gap-2 items-center justify-end'>

                      <Typography
                        color='text.primary'
                        className='font-medium'
                      >
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

export default SalesInCountries
