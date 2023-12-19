import { ReactElement } from 'react';
import { IconType } from 'react-icons';

type SubContentType = {
  id: number;
  title: string;
  icon: ReactElement;
  linkTo: string;
};

export type { SubContentType };
