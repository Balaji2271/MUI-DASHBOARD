import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, IconButton, Stack, Grid } from '@mui/material';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

const Cards = () => {
  const TransactionDetails = [{
    name: "Purchases",
    amount: 2367,
    transaction_type: "Monthly Sales",
    size: 1,
    iconType: LocalMallIcon,
  },
  {
    name: "Total Earnings",
    amount: "$93438.78",
    transaction_type: "Monthly Revenue",
    size: 2,
    iconType: AttachMoneyIcon
  }
  ]
  return (
    <Grid container spacing={2} sx={{borderRadius: '16px'}}>
      <Grid item xs={12} sm={12} md={5}>
      <Card sx={{ display: "flex",height:"200px",justifyContent:"space-between",borderRadius: '16px'}}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardContent>
            <Typography variant='body1' >Congratulation Julia</Typography>
            <Typography variant="h6" sx={{ fontWeight: "bold", my: 2 }}>$39,358 ↖︎+9% </Typography>
            <Button sx={{ backgroundColor: "#fb9678", color: "#fff", fontSize: 12, }}>Download</Button>
          </CardContent>
        </Box>
        <CardMedia
          component="img"
          sx={{ width:250, objectFit: "cover" }}
          image="https://ouch-cdn2.icons8.com/rfeyNbkwtVRJESAvi_BbF5HRYtGzN2ZiDII1SNPgd2c/rs:fit:256:193/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvODA3/Lzg3ZmFjZTljLTkw/Y2UtNGU5OS04ZjEy/LTdmMWQzYTZmMmE2/My5wbmc.png"
        ></CardMedia>
      </Card>
      </Grid> 
      {
        TransactionDetails.map(transaction => (
          <Grid item xs={12 } sm={12} md = {transaction.size === 1 ? 2 : 4}>
          <Card sx={{ display: "flex",height:"200px", flexGrow: 1, justifyContent: "space-between", alignItems: "start", px: 2,borderRadius: '16px' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <CardContent>
                <Typography variant='body1' sx={{ mb: 3 }}>{transaction.name}</Typography>
                <Typography variant="h6" sx={{ fontWeight: "bold", mb: 0.2 }}>{transaction.amount}</Typography>
                <Typography variant="caption" sx={{ color: '#78909c' }}>{transaction.transaction_type}</Typography>
              </CardContent>
            </Box>
            <IconButton disableRipple sx={{ mt: 2, backgroundColor: "#03C9D7", color: "#fff" }}><transaction.iconType /></IconButton>
          </Card>
          </Grid>
        ))}
      </Grid>
  )
}

export default Cards