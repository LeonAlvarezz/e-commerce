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
  },
  {
    id: 2,
    title: 'Product',
    icon: <IoBag />,
  },
  {
    id: 3,
    title: 'Message',
    icon: <IoChatboxEllipses />,
  },
  {
    id: 4,
    title: 'Statistic',
    icon: <ImStatsBars />,
  },
];

const accountSubContent: SubContentType[] = [
  {
    id: 1,
    title: 'Setting',
    icon: <IoMdSettings />,
  },
  {
    id: 2,
    title: 'Log out',
    icon: <IoLogOut />,
  },
];
export default function Sidebar() {
  const [sbSize, setSbSize] = useState<boolean>(false);
  const handleChangeSbSize = () => {
    setSbSize((current) => !current);
  };
  return (
    <aside
      className={cn(
        'sticky h-screen w-72 bg-slate-500 transition-all',
        sbSize && 'w-24'
      )}
    >
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
    </aside>
  );
}
