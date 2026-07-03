'use client'

// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'

// Components Imports
import OptionMenu from '@core/components/option-menu'

// Style Imports
import tableStyles from '@core/styles/table.module.css'

const data = [
  {
    material: 'Fire Alarm Panel',
    vendor: 'Dastek',
    status: 'Delivered',
    color: 'success',
    value: 'Rp320 Jt'
  },
  {
    material: 'Smoke Detector',
    vendor: 'Dastek',
    status: 'On Delivery',
    color: 'warning',
    value: 'Rp95 Jt'
  },
  {
    material: 'Cable Tray',
    vendor: 'PT KIA',
    status: 'PO Process',
    color: 'primary',
    value: 'Rp180 Jt'
  },
  {
    material: 'MCB Schneider',
    vendor: 'Schneider',
    status: 'Delivered',
    color: 'success',
    value: 'Rp42 Jt'
  },
  {
    material: 'GRC Board',
    vendor: 'TB Sumber',
    status: 'Waiting',
    color: 'secondary',
    value: 'Rp18 Jt'
  },
  {
    material: 'Conduit Pipe',
    vendor: 'PT ABC',
    status: 'Delivered',
    color: 'success',
    value: 'Rp27 Jt'
  }
]

const PaymentHistory = () => {
  return (
    <Card>

      <CardHeader
        title='Material Procurement'
        subheader='Procurement Status'
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

      <div className='overflow-x-auto pbe-3'>

        <table className={tableStyles.table}>

          <thead>

            <tr>

              <th>Material</th>

              <th>Vendor</th>

              <th>Status</th>

              <th className='text-end'>Value</th>

            </tr>

          </thead>

          <tbody>

            {data.map((item, index) => (

              <tr key={index}>

                <td>

                  <Typography
                    color='text.primary'
                    className='font-medium'
                  >
                    {item.material}
                  </Typography>

                </td>

                <td>

                  <Typography>
                    {item.vendor}
                  </Typography>

                </td>

                <td>

                  <Chip
                    label={item.status}
                    color={item.color}
                    size='small'
                    variant='tonal'
                  />

                </td>

                <td className='text-end'>

                  <Typography
                    color='text.primary'
                    className='font-medium'
                  >
                    {item.value}
                  </Typography>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </Card>
  )
}

export default PaymentHistory
