'use client'

// MUI Imports
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import { useTheme } from '@mui/material/styles'

// Third-party Components
import classnames from 'classnames'

const Award = ({ project }) => {
  const theme = useTheme()

  return (
    <Card className='relative bs-full'>
      <CardContent>
        <div className='flex flex-col items-start gap-2.5'>

          <div className='flex flex-col'>
            <Typography variant='h5'>
              {project.projectName}
            </Typography>

            <Typography variant='subtitle1'>
              {project.vendor}
            </Typography>
          </div>

          <div className='flex flex-col'>

            <Typography
              variant='h4'
              color='primary.main'
            >
              {project.progress}%
            </Typography>

            <Typography>
              Target {project.target}% • {project.status}
            </Typography>

          </div>

          <Button
            size='small'
            variant='contained'
          >
            View Project
          </Button>

        </div>

        <img
          src='/images/cards/trophy.png'
          className={classnames(
            'is-[106px] absolute block-end-0 inline-end-5',
            {
              'scale-x-[-1]': theme.direction === 'rtl'
            }
          )}
        />

      </CardContent>
    </Card>
  )
}

export default Award
