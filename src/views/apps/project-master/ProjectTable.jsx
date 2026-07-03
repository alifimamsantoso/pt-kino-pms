'use client'

import { useState, useMemo } from 'react'

import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'
import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  useReactTable
} from '@tanstack/react-table'

import tableStyles from '@core/styles/table.module.css'

const columnHelper = createColumnHelper()

const ProjectTable = ({ tableData }) => {
    const [projects, setProjects] = useState(tableData || [])
    const [projectCode, setProjectCode] = useState('')
const [projectName, setProjectName] = useState('')
const [vendor, setVendor] = useState('')
const [plant, setPlant] = useState('')
const [pic, setPic] = useState('')
const [progress, setProgress] = useState('')
const [startDate, setStartDate] = useState('')
const [finishDate, setFinishDate] = useState('')
const [budget, setBudget] = useState('')
const [department, setDepartment] = useState('')
const [priority, setPriority] = useState('')
const [status, setStatus] = useState('')

  const [globalFilter, setGlobalFilter] = useState('')
const [open, setOpen] = useState(false)
  const columns = useMemo(() => [
    columnHelper.accessor('projectCode', {
      header: 'Project Code'
    }),

    columnHelper.accessor('projectName', {
      header: 'Project Name'
    }),

    columnHelper.accessor('plant', {
      header: 'Plant'
    }),

    columnHelper.accessor('vendor', {
      header: 'Vendor'
    }),

    columnHelper.accessor('pic', {
      header: 'PIC'
    }),

    columnHelper.accessor('progress', {
      header: 'Progress',
      cell: info => (
        <Typography color='success.main' fontWeight={600}>
          {info.getValue()}%
        </Typography>
      )
    }),

    columnHelper.accessor('status', {
      header: 'Status',
      cell: info => (
        <Chip
          label={info.getValue()}
          color={
            info.getValue() === 'Completed'
              ? 'success'
              : info.getValue() === 'On Progress'
              ? 'warning'
              : 'error'
          }
          size='small'
        />
      )
    })

  ], [])
    const table = useReactTable({
    data: projects,
    columns,
    state: {
      globalFilter
    },
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel()
  })

  return (
    <Card>

      <CardHeader
        title='Project Master'
        action={
          <Button
  variant='contained'
  onClick={() => setOpen(true)}
>
  + Add Project
</Button>
        }
      />

      <CardContent>

        <Stack
          direction='row'
          justifyContent='space-between'
          mb={4}
        >

          <TextField
  fullWidth
  label='Project Code'
  value={projectCode}
  onChange={e => setProjectCode(e.target.value)}
/>

        </Stack>

        <div className='overflow-x-auto'>

          <table className={tableStyles.table}>

            <thead>

              {table.getHeaderGroups().map(headerGroup => (

                <tr key={headerGroup.id}>

                  {headerGroup.headers.map(header => (

                    <th key={header.id}>

                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}

                    </th>

                  ))}

                </tr>

              ))}

            </thead>

            <tbody>
            {table.getRowModel().rows.map(row => (

              <tr key={row.id}>

                {row.getVisibleCells().map(cell => (

                  <td key={cell.id}>

                    {flexRender(
                      cell.column.columnDef.cell,
                      cell.getContext()
                    )}

                  </td>

                ))}

              </tr>

            ))}

          </tbody>

        </table>

        </div>

      </CardContent>

    </Card>
  )
}

export default ProjectTable
