import { Helmet } from 'react-helmet-async';
import { faker } from '@faker-js/faker/locale/en_IND';
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography } from '@mui/material';
import Iconify from '../components/iconify';
import {
  AppNewsUpdate,
  AppOrderTimeline,
  AppCurrentVisits,
  AppWebsiteVisits,
  AppWidgetSummary,
} from '../sections/@dashboard/app';

// ----------------------------------------------------------------------

export default function DashboardAppPage() {
  const theme = useTheme();
  const random =[
     "3756-3740-1453-8742" ,
     "8741-9865-2103-9543" ,
     "9898-2131-7803-9876" ,
     "3208-8975-4567-2266" ,
     "8897-2543-7744-4565" ,
  ]

  return (
    <>
      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Monitor and Analyze
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={2.4}>
            <AppWidgetSummary title="App downloads" color='warning' total={7140} icon={'material-symbols:cloud-download'} />
          </Grid>

          <Grid item xs={12} sm={6} md={2.4}>
            <AppWidgetSummary title="Active users" total={135} color="info" icon={'gridicons:multiple-users'} />
          </Grid>

          <Grid item xs={12} sm={6} md={2.4}>
            <AppWidgetSummary title="Doctors" total={96} color="info" icon={'material-symbols:heart-plus'} />
          </Grid>

          <Grid item xs={12} sm={6} md={2.4}>
            <AppWidgetSummary title="Bug Reports" total={23} color='error' icon={'ant-design:bug-filled'} />
          </Grid>
          <Grid item xs={12} sm={6} md={2.4}>
            <AppWidgetSummary title="SOS pass on" total={12} color="success" icon={'material-symbols:help'} />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppWebsiteVisits
              title="National Health Analytics"
              subheader="curated and monitored"
              chartLabels={[
                '01/01/2023',
                '02/01/2023',
                '03/01/2023',
                '04/01/2023',
                '05/01/2023',
                '06/01/2023',
                '07/01/2023',
                '08/01/2023',
                '09/01/2023',
                '10/01/2023',
                '11/01/2023',
              ]}
              chartData={[
                {
                  name: 'Health spending as share of GDP',
                  type: 'column',
                  fill: 'solid',
                  data: [23, 41, 32, 27, 43, 12, 57, 31, 44, 20, 39],
                },
                {
                  name: 'Vaccine Doses Administered',
                  type: 'line',
                  fill: 'solid',
                  data: [22, 28, 36, 44, 50, 59, 63, 67, 71, 73, 78],
                },
                {
                  name: 'Prevelance of chronic disease',
                  type: 'area',
                  fill: 'gradient',
                  data: [30, 50, 36, 30, 55, 35, 64, 52, 59, 36, 49],
                },
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentVisits
              title="Monitored Insights Division Wise"
              subheader="usage of application area wise"
              chartData={[
                { label: 'sub urban', value: 4344 },
                { label: 'Urban', value: 5435 },
                { label: 'rural', value: 1443 },
                { label: 'sub rural', value: 4443 },
              ]}
              chartColors={[
                theme.palette.primary.main,
                theme.palette.info.main,
                theme.palette.warning.main,
                theme.palette.error.main,
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppNewsUpdate
              title="SOS help Upadates"
              list={[...Array(5)].map((_, index) => ({
                title: faker.name.fullName(),
                description: random[index],
                image: faker.image.avatar(),
                postedAt: faker.date.recent(),
              }))}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppOrderTimeline
              title="Order Timeline"
              list={[...Array(5)].map((_, index) => ({
                id: faker.datatype.uuid(),
                title: [
                  'Vaccination begins of 1.5m doses',
                  'Invioces and payments',
                  'Redistributon and Replenishment',
                  'Doses passed to states',
                  '1.5m, doses arrived',
                ][index],
                type: `order${index + 1}`,
                time: faker.date.past(),
              }))}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
