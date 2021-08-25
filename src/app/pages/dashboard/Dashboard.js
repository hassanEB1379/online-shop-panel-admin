import { Box, Grid } from '@material-ui/core';
import IconBox from './components/IconBox';
import PaperWithTitle from 'app/components/micro/PaperWithTitle';

// charts
import PublicChart from 'app/pages/dashboard/charts/Public';
import ByCategoryChart from 'app/pages/dashboard/charts/ByCategory';

// icons
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';

const Dashboard = () => {
  return (
    <Box>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} lg={3}>
          <IconBox
            bgColor="#ff8084"
            icon={<PeopleAltIcon />}
            header="فروشندگان جدید"
            text="41215"
          />
        </Grid>

        <Grid item xs={12} sm={6} lg={3}>
          <IconBox
            bgColor="#a5a5a5"
            icon={<ChatBubbleOutlineIcon />}
            header="پیام های جدید"
            text="687"
          />
        </Grid>

        <Grid item xs={12} sm={6} lg={3}>
          <IconBox
            bgColor="#ffbc58"
            icon={<ShoppingCartIcon />}
            header="سفارشات جدید"
            text="5869"
          />
        </Grid>

        <Grid item xs={12} sm={6} lg={3}>
          <IconBox
            bgColor="#13c9ca"
            icon={<AttachMoneyIcon />}
            header="میزان درآمد"
            text="51345 $"
          />
        </Grid>

        <Grid item xs={12} lg={6}>
          <PaperWithTitle title="آخرین سفارشات"></PaperWithTitle>
        </Grid>

        <Grid item xs={12} lg={6}>
          <PaperWithTitle title="لیست کاربران"></PaperWithTitle>
        </Grid>

        <Grid item xs>
          <PaperWithTitle title="خلاصه وضعیت فروش">
            <Grid container spacing={3}>
              <Grid item xs={11} lg={8}>
                <PublicChart />
              </Grid>

              <Grid item xs={11} lg={4}>
                <ByCategoryChart />
              </Grid>
            </Grid>
          </PaperWithTitle>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
