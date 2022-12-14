import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Box, Grid,Typography,Badge ,Divider} from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "#03C9D7",
        "#FB9678",
        "#03C9D7",
        "#FB9678",
       
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        // 'rgba(255, 206, 86, 1)',
        // 'rgba(75, 192, 192, 1)',
        // 'rgba(153, 102, 255, 1)'
        
      ],
      borderWidth: 1,
      height:390
    },
  ],
  labels: ['Red', 'Blue']
};
const BasicTable = () => {
  function createData(
    Assigned: string,
    Name: string,
    priority:string,
    Budget: string,
    
  ) {
    return { Assigned,Name,priority,Budget };
  }

  const rows = [
    createData( 'Elite Admin','Sunil Joshi','Low', '$3.9k'),
    createData('Real Homes WP Theme','Andrew MacDonald','Medium','$24.5k'),
    createData( 'MedicalPro WP Theme','Christopher Jamil','High', '$12.8k'),
    createData( 'Hosting Press HTML', 'Nirav Joshi','Critical','$2.4k'),
    createData( 'Helping Hands Theme', 'Micheal Doe','Moderate','$9.3k'),
    
  ];
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 ,height:390}} size="small" aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{color:"#777E89"}}>Assigned</TableCell>
            <TableCell align="right" sx={{color:"#777E89"}}> Name</TableCell>
            <TableCell align="right" sx={{color:"#777E89"}}>Priority</TableCell>
            <TableCell align="right" sx={{color:"#777E89"}}>Budget</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.Name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" sx={{fontWeight: "bold"}}>
                {row.Name}
              </TableCell>
              <TableCell align="right" sx={{color:"#777E89"}}> {row.Assigned}</TableCell>
              <TableCell align="right"><Badge badgeContent={row.priority} color="warning"></Badge></TableCell>
              <TableCell align="right">{row.Budget}</TableCell>
             
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
export default function Tables() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={5} sx={{height:150,mb:{xs:10,sm:10,md:0 }}}>
        <Box sx={{height:460,backgroundColor:"#fff",borderRadius: '16px'}}>
        <Typography variant='subtitle1' sx={{fontWeight:"bold", p:2}}>Total Sales</Typography>
        <p></p>
          <Divider/>
          <p></p>
          <Doughnut data={data} options={{
          responsive: true,
          maintainAspectRatio: false
        }} />
        </Box>
      </Grid>
      <Grid item xs={12} md={7}>
        <Box > 
          <Paper>
            <Typography variant='subtitle1' sx={{fontWeight:"bold", p:2}}>Product Performance</Typography>
          <BasicTable />
          </Paper>
        </Box>
      </Grid>
    </Grid>

  )
}

