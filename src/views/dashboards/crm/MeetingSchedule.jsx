// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'

// Components Imports
import OptionMenu from '@core/components/option-menu'
import CustomAvatar from '@core/components/mui/Avatar'

const data = [
  {
    avatarSrc: '/images/avatars/1.png',
    title: 'Weekly Project Meeting',
    subtitle: '03 Jul | 09:00 - 10:00',
    chipLabel: 'High',
    chipColor: 'error'
  },
  {
    avatarSrc: '/images/avatars/2.png',
    title: 'Vendor Coordination - PT KIA',
    subtitle: '04 Jul | 13:30 - 14:30',
    chipLabel: 'Medium',
    chipColor: 'warning'
  },
  {
    avatarSrc: '/images/avatars/3.png',
    title: 'Fire Alarm Progress Review',
    subtitle: '05 Jul | 10:00 - 11:00',
    chipLabel: 'High',
    chipColor: 'error'
  },
  {
    avatarSrc: '/images/avatars/4.png',
    title: 'HVAC Commissioning',
    subtitle: '06 Jul | 08:00 - 09:30',
    chipLabel: 'Normal',
    chipColor: 'success'
  },
  {
    avatarSrc: '/images/avatars/5.png',
    title: 'Solar PV Technical Discussion',
    subtitle: '08 Jul | 14:00 - 15:30',
    chipLabel: 'Normal',
    chipColor: 'primary'
  },
  {
    avatarSrc: '/images/avatars/6.png',
    title: 'Corporate Project Review',
    subtitle: '10 Jul | 15:00 - 17:00',
    chipLabel: 'Critical',
    chipColor: 'error'
  }
]

const MeetingSchedule = () => {
  return (
    <Card>
      <CardHeader
        title='Upcoming Project Meeting'
        subheader='Next Project Activities'
        action={
          <OptionMenu
            options={[
              'This Week',
              'This Month',
              'Export'
            ]}
          />
        }
      />

      <CardContent className='flex flex-col gap-6'>
        {data.map((item, index) => (
          <div
            key={index}
            className='flex items-center gap-4'
          >
            <CustomAvatar
              variant='rounded'
              src={item.avatarSrc}
              size={40}
            />

            <div className='flex justify-between items-center is-full flex-wrap gap-x-4 gap-y-2'>

              <div className='flex flex-col gap-1'>

                <Typography
                  color='text.primary'
                  className='font-medium'
                >
                  {item.title}
                </Typography>

                <div className='flex items-center gap-2'>
                  <i className='ri-calendar-line text-base text-textSecondary' />
                  <Typography variant='body2'>
                    {item.subtitle}
                  </Typography>
                </div>

              </div>

              <Chip
                label={item.chipLabel}
                color={item.chipColor}
                size='small'
                variant='tonal'
              />

            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}

export default MeetingSchedule
