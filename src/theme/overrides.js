const overrides = {
  MuiButton: {
    root: {
      borderRadius: '4rem',
      padding: '.5rem 1.5rem',
    },
  },
  MuiPaper: {
    rounded: {
      borderRadius: '1rem',
    },
    root: {
      padding: 22,
    },
  },
  MuiOutlinedInput: {
    root: {
      borderRadius: '4rem',
      padding: '0 1rem',
    },
  },
  MuiAppBar: {
    colorPrimary: {
      color: '#000',
      backgroundColor: '#fff',
    },
  },
  MuiDivider: {
    vertical: {
      margin: '0 10px',
    },
    root: {
      backgroundColor: 'rgb(0 0 0 / 6%)',
    },
  },
  MuiListItemIcon: {
    root: {
      minWidth: 32,
      color: 'inherit',
    },
  },
};

export default overrides;
