import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactFlagsSelect from 'react-flags-select';
import locales from '../../i18n/locales';
import getCountry from '../../i18n/scripts/getCountry';
import getLocale from '../../i18n/scripts/getLocale';

import 'react-flags-select/scss/react-flags-select.scss';

const countries = locales.map(getCountry);

class LanguageSelect extends Component {
  render() {
    const defaultCountry = getCountry(this.context.intl.locale);
    return (
      <ReactFlagsSelect
        countries={countries}
        defaultCountry={defaultCountry}
        showSelectedLabel={false}
        showOptionLabel={false}
        onSelect={(country) => {
          const locale = getLocale(country);
          if (locale === 'en-US') {
            window.location.replace('/');
          } else {
            window.location.replace(`/?locale=${locale}`);
          }
        }}
      />
    );
  }
}

LanguageSelect.contextTypes = {
  intl: PropTypes.object
}

export default LanguageSelect;
