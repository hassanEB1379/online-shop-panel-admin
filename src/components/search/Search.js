import { InputBase } from '@material-ui/core';

// styles
import useStyles from './styles';

// icons
import { Search as SearchIcon } from '@material-ui/icons';

const Search = () => {
  const classes = useStyles();

  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        classes={{
          root: classes.searchBase,
          input: classes.searchInput,
        }}
        placeholder="جستجو..."
      />
    </div>
  );
};

export default Search;
