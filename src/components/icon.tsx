import React from 'react';

require('../icons/tag.svg');
require('../icons/account.svg');
require('../icons/statistic.svg');

type Props = {
  name: string
}

function Icon (props:Props) {
  return (
    <svg className="icon">
      <use xlinkHref={`#${props.name}`}/>
    </svg>
  )
}

export default Icon;