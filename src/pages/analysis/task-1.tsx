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

import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';

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
  errors?: string[];
}

interface AnalysisData {
  timestamp: string;
  count: CountData;
  teams: TeamData[];
  errorSummary: string[];
}

const AnalysisPage = () => {
  const [data, setData] = useState<AnalysisData | null>(null);
  const [open, setOpen] = useState<{ teamName: string; errors: string[] } | null>(null);

  const handleOpen = (teamName: string, errors: string[]) => setOpen({ teamName, errors });
  const handleClose = () => setOpen(null);

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
          Team Details
        </Typography>
        <TableContainer component={Paper} sx={{ mb: 4 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Team Name</TableCell>
                <TableCell align="right">Members</TableCell>
                <TableCell align="right">Primary</TableCell>
                <TableCell align="right">Sub-Domains</TableCell>
                <TableCell align="right">Categories</TableCell>
                <TableCell align="right">Sub-Categories</TableCell>
                <TableCell align="center">Validity</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.teams.map((team, index) => (
                <TableRow key={index}>
                  <TableCell>{team.name}</TableCell>
                  <TableCell align="right">{team.members}</TableCell>
                  <TableCell align="right">{team.primary}</TableCell>
                  <TableCell align="right">{team.subDomains}</TableCell>
                  <TableCell align="right">{team.categories}</TableCell>
                  <TableCell align="right">{team.subCategories}</TableCell>
                  <TableCell align="center">
                    {team.status === 'valid' ? (
                      <Chip label="Valid" color="success" />
                    ) : (
                      <Button variant="outlined" color="error" onClick={() => handleOpen(team.name, team.errors || [])}>
                        View Errors
                      </Button>
                    )}
                  </TableCell>
                </TableRow>
              ))}
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

        <Modal open={!!open} onClose={handleClose}>
          <Box sx={{ width: '80%', maxHeight: '80vh', overflowY: 'auto', margin: 'auto', mt: 5, p: 3, bgcolor: 'background.paper', boxShadow: 24, borderRadius: 2 }}>
            <Typography variant="h5" gutterBottom>
              Error Report for {open?.teamName}
            </Typography>
            <ul>
              {open?.errors.map((error, index) => (
                <li key={index}>{error}</li>
              ))}
            </ul>
            <Button onClick={handleClose} variant="contained" sx={{ mt: 2 }}>
              Close
            </Button>
          </Box>
        </Modal>
      </Container>
    </PageLayout>
  );
};

export default AnalysisPage;
