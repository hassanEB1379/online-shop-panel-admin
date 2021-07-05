const { Typography } = require('@material-ui/core');

const PageTitle = ({ title, subTitle }) => {
  return (
    <div>
      <Typography variant="h3">{title}</Typography>
      <Typography variant="caption">{subTitle}</Typography>
    </div>
  );
};

export default PageTitle;
