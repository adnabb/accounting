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
  className?: string
} & React.SVGAttributes<HTMLOrSVGElement>

function Icon(props: Props) {
  const {className, name, ...rest} = props;
  return (
      <svg className={'icon ' + className} {...rest}>
        {name && <use xlinkHref={`#${name}`}/>}
      </svg>
  )
}

export default Icon;