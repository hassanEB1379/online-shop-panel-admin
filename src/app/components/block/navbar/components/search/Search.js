import { InputBase } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

// styles
import useStyles from './styles';

// icons
import { Search as SearchIcon } from '@material-ui/icons';

const Search = () => {
  const classes = useStyles();

  const { t } = useTranslation();

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
        placeholder={t('search')}
      />
    </div>
  );
};

export default Search;
