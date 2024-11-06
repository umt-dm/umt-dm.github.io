import { useEffect, useState } from 'react';
import PageLayout from '../../layouts/PageLayout';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Chart } from 'react-chartjs-2';
import 'chart.js/auto';

interface CountData {
  valid: number;
  invalid: number;
  primary: number;
  subDomains: number;
  categories: number;
  subCategories: number;
}

interface TeamData {
  name: string;
  members: number;
  status: string;
  primary: number;
  subDomains: number;
  categories: number;
  subCategories: number;
  message?: string;
}

interface AnalysisData {
  timestamp: string;
  count: CountData;
  teams: TeamData[];
}

const AnalysisPage = () => {
  const [data, setData] = useState<AnalysisData | null>(null);

  useEffect(() => {
    // Fetch the analysis data
    import('../../dist/submissions/task-1.json').then((json) => {
      setData(json);
    });
  }, []);

  if (!data) return null;

  // Chart configurations
  const domainData = {
    labels: ['Primary', 'Sub-Domains', 'Categories', 'Sub-Categories'],
    datasets: [
      {
        data: [
          data.count.primary,
          data.count.subDomains,
          data.count.categories,
          data.count.subCategories,
        ],
        backgroundColor: ['#42A5F5', '#66BB6A', '#FFA726', '#FF7043'],
      },
    ],
  };

  const teamStatusData = {
    labels: ['Valid Teams', 'Invalid Teams'],
    datasets: [
      {
        data: [data.count.valid, data.count.invalid],
        backgroundColor: ['#66BB6A', '#EF5350'],
      },
    ],
  };

  const submissionsPerTeam = {
    labels: data.teams.map((team) => team.name),
    datasets: [
      {
        label: 'Primary Domains',
        data: data.teams.map((team) => team.primary),
        backgroundColor: '#42A5F5',
      },
      {
        label: 'Sub-Domains',
        data: data.teams.map((team) => team.subDomains),
        backgroundColor: '#66BB6A',
      },
      {
        label: 'Categories',
        data: data.teams.map((team) => team.categories),
        backgroundColor: '#FFA726',
      },
      {
        label: 'Sub-Categories',
        data: data.teams.map((team) => team.subCategories),
        backgroundColor: '#FF7043',
      },
    ],
  };

  return (
    <PageLayout>
      <Container maxWidth="lg" sx={{ my: 4 }}>
        <Typography variant="h4" gutterBottom>
          Task 1: Domains and Categories Analysis
        </Typography>
        <Typography variant="body1" color="textSecondary">
          Analysis generated on: {new Date(data.timestamp).toLocaleString()}
        </Typography>

        <Typography variant="h6" sx={{ mt: 4 }}>
          Overview
        </Typography>
        <TableContainer component={Paper} sx={{ mb: 4, backgroundColor: '#333', color: '#fff' }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Metric</TableCell>
                <TableCell align="right">Count</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Valid Teams</TableCell>
                <TableCell align="right">{data.count.valid}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Invalid Teams</TableCell>
                <TableCell align="right">{data.count.invalid}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Primary Domains</TableCell>
                <TableCell align="right">{data.count.primary}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Sub-Domains</TableCell>
                <TableCell align="right">{data.count.subDomains}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Categories</TableCell>
                <TableCell align="right">{data.count.categories}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Sub-Categories</TableCell>
                <TableCell align="right">{data.count.subCategories}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <Typography variant="h6" sx={{ mt: 4 }}>
          Stats
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <Chart type="pie" data={domainData} options={{ plugins: { legend: { position: 'top' } } }} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Chart type="pie" data={teamStatusData} options={{ plugins: { legend: { position: 'top' } } }} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Chart type="bar" data={submissionsPerTeam} options={{ plugins: { legend: { position: 'top' } } }} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Chart type="doughnut" data={domainData} options={{ plugins: { legend: { position: 'top' } } }} />
          </Grid>
        </Grid>
      </Container>
    </PageLayout>
  );
};

export default AnalysisPage;
