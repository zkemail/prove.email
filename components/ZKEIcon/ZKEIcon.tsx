// 'use client';
// import React from 'react';
// import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

// const ZKEIcon: React.FC<SvgIconProps> = (props) => {
//   return (
//     <SvgIcon {...props}>
//         <svg width="270" height="258" viewBox="0 0 270 258" fill="none" xmlns="http://www.w3.org/2000/svg">
//         <path fill-rule="evenodd" clip-rule="evenodd" d="M219.791 53.2V70H268.391V58.2H233.591V56.6L268.191 16.8V0H220.791V11.8H254.391V13.4L219.791 53.2ZM1.99998 46H202V26H1.99998V46ZM67.9688 142.5H269.031V122.5H67.9688V142.5ZM189 242H1.99998V222H189V242ZM0.301147 169V99H13.5011V126.8H15.3011L38.0012 99H54.9012L25.7011 133.5L55.9012 169H38.5012L15.3011 140.6H13.5011V169H0.301147ZM222.914 188V258H268.514V246H236.114V228.7H265.114V216.7H236.114V200H267.914V188H222.914Z" fill="black"/>
//         </svg>
//     </SvgIcon>
//   );
// };

// export default ZKEIcon;


'use client';
import React from 'react';
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

interface ZKEIconProps extends Omit<SvgIconProps, 'color'> {
  mode: 'light' | 'dark';
}

const ZKEIcon: React.FC<ZKEIconProps> = ({ mode, ...props }) => {
  const iconColor = mode === 'light' ? 'black' : 'white';

  return (
    <SvgIcon {...props}>
      <svg width="270" height="258" viewBox="0 0 270 258" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M219.791 53.2V70H268.391V58.2H233.591V56.6L268.191 16.8V0H220.791V11.8H254.391V13.4L219.791 53.2ZM1.99998 46H202V26H1.99998V46ZM67.9688 142.5H269.031V122.5H67.9688V142.5ZM189 242H1.99998V222H189V242ZM0.301147 169V99H13.5011V126.8H15.3011L38.0012 99H54.9012L25.7011 133.5L55.9012 169H38.5012L15.3011 140.6H13.5011V169H0.301147ZM222.914 188V258H268.514V246H236.114V228.7H265.114V216.7H236.114V200H267.914V188H222.914Z" fill={iconColor} />
      </svg>
    </SvgIcon>
  );
};

export default ZKEIcon;



