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
import Chip from '@mui/material/Chip'

import { getVendorTransactionsData } from '@/app/server/actions'

const VendorTransactionsPage = async () => {
  const transactions = await getVendorTransactionsData()

  return (
    <Grid container spacing={6}>
      <Grid size={{ xs: 12 }}>
        <Typography variant='h4'>Vendor Transactions</Typography>
        <Typography color='text.secondary'>Catatan keluar/masuk barang vendor per proyek.</Typography>
      </Grid>
      <Grid size={{ xs: 12 }}>
        <Card>
          <CardHeader title='Transaction History' />
          <CardContent>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Code</TableCell>
                  <TableCell>Vendor</TableCell>
                  <TableCell>Asset</TableCell>
                  <TableCell>Type</TableCell>
                  <TableCell>Quantity</TableCell>
                  <TableCell>Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {transactions.map(row => (
                  <TableRow key={row.id}>
                    <TableCell>{row.transactionCode}</TableCell>
                    <TableCell>{row.vendor}</TableCell>
                    <TableCell>{row.assetName}</TableCell>
                    <TableCell>{row.type}</TableCell>
                    <TableCell>{row.quantity} {row.unit}</TableCell>
                    <TableCell>
                      <Chip
                        label={row.status}
                        size='small'
                        color={row.type === 'in' ? 'success' : 'warning'}
                      />
                    </TableCell>
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

export default VendorTransactionsPage
