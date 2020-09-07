import React from 'react';

require('../icons/tag.svg');
require('../icons/account.svg');
require('../icons/statistic.svg');
require('../icons/arrow-left.svg');
require('../icons/arrow-right.svg');

function importAll(require: __WebpackModuleApi.RequireContext) {
  require.keys().forEach(require);
}

try {
  importAll(require.context('../icons', true, /\.svg$/));
} catch (e) {
  console.log(e)
}

type Props = {
  name: string
}

function Icon(props: Props) {
  return (
      <svg className="icon">
        {props.name && <use xlinkHref={`#${props.name}`}/>}
      </svg>
  )
}

export default Icon;