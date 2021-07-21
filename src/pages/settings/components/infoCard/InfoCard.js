import {
  Paper,
  Box,
  Avatar,
  List,
  ListItem,
  Typography,
  Divider,
} from '@material-ui/core';
import useStyles from './styles';

const InfoCard = () => {
  const classes = useStyles();

  return (
    <Box padding="0 2rem">
      <Paper>
        <Avatar className={classes.avatar} />
        <Box marginTop="1.5rem">
          <List>
            <ListItem>
              <Typography>نام کاربری :</Typography>
            </ListItem>

            <Divider />

            <ListItem>
              <Typography>ایمیل :</Typography>
            </ListItem>

            <Divider />

            <ListItem>
              <Typography>شماره موبایل :</Typography>
            </ListItem>

            <Divider />

            <ListItem>
              <Typography>نقش :</Typography>
            </ListItem>

            <Divider />

            <ListItem>
              <Typography>رمز عبور :</Typography>
            </ListItem>
          </List>
        </Box>
      </Paper>
    </Box>
  );
};

export default InfoCard;
