import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Typography from '@mui/material/Typography'

import { getProjectInventoryData } from '@/app/server/actions'

const ProjectInventoryPage = async () => {
  const inventory = await getProjectInventoryData()

  return (
    <Grid container spacing={6}>
      <Grid size={{ xs: 12 }}>
        <Typography variant='h4'>Project Inventory</Typography>
        <Typography color='text.secondary'>Monitoring asset dan stok barang proyek.</Typography>
      </Grid>
      <Grid size={{ xs: 12 }}>
        <Card>
          <CardHeader title='Inventory List' />
          <CardContent>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Asset</TableCell>
                  <TableCell>Category</TableCell>
                  <TableCell>Vendor</TableCell>
                  <TableCell>Balance</TableCell>
                  <TableCell>Location</TableCell>
                  <TableCell>Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {inventory.map(item => (
                  <TableRow key={item.id}>
                    <TableCell>{item.assetName}</TableCell>
                    <TableCell>{item.category}</TableCell>
                    <TableCell>{item.vendor}</TableCell>
                    <TableCell>{item.stockBalance} {item.unit}</TableCell>
                    <TableCell>{item.location}</TableCell>
                    <TableCell>{item.status}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default ProjectInventoryPage
