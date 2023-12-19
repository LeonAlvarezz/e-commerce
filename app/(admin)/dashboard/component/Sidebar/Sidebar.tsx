'use client';
import React, { useEffect, useState } from 'react';
import SidebarHeader from './SidebarHeader';
import cn from '@/lib/util';
import SubContent from './SubContent';
import { MdSpaceDashboard } from 'react-icons/md';
import { IoChatboxEllipses, IoBag, IoLogOut } from 'react-icons/io5';
import { ImStatsBars } from 'react-icons/im';
import { IoMdSettings } from 'react-icons/io';
import type { SubContentType } from '@/type/sidebar.type';

const overViewSubContent: SubContentType[] = [
  {
    id: 1,
    title: 'Dashboard',
    icon: <MdSpaceDashboard />,
    linkTo: '/dashboard',
  },
  {
    id: 2,
    title: 'Product',
    icon: <IoBag />,
    linkTo: '/dashboard/products',
  },
  {
    id: 3,
    title: 'Message',
    icon: <IoChatboxEllipses />,
    linkTo: '/dashboard/message',
  },
  {
    id: 4,
    title: 'Statistic',
    icon: <ImStatsBars />,
    linkTo: '/dashboard/statistic',
  },
];

const accountSubContent: SubContentType[] = [
  {
    id: 1,
    title: 'Setting',
    icon: <IoMdSettings />,
    linkTo: '/settings',
  },
  {
    id: 2,
    title: 'Log out',
    icon: <IoLogOut />,
    linkTo: '/log-out',
  },
];
export default function Sidebar() {
  const [sbSize, setSbSize] = useState<boolean>(true);
  const handleChangeSbSize = () => {
    setSbSize((current) => !current);
  };
  return (
    <aside
      className={cn(
        'sticky top-0 min-h-screen w-64 bg-slate-500 transition-all',
        sbSize && 'w-24'
      )}
    >
      <div className='sticky top-0'>
        <SidebarHeader
          sbSize={sbSize}
          handleChangeSbSize={handleChangeSbSize}
        ></SidebarHeader>
        <SubContent
          subContentTitle={'Overview'}
          subContent={overViewSubContent}
          sbSize={sbSize}
        ></SubContent>  
        <SubContent
          subContentTitle={'Account'}
          subContent={accountSubContent}
          sbSize={sbSize}
        ></SubContent>
      </div>
    </aside>
  );
}
