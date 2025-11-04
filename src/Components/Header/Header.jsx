import React from 'react'
import ProfileMenu from './ProfileMenu'
import { IconLayoutSidebarLeftCollapse, IconLayoutSidebarLeftCollapseFilled } from '@tabler/icons-react';
import { ActionIcon } from '@mantine/core';



function Header() {
  return (
    <div className='w-full h-16 flex justify-between gap-x-5 items-center bg-backg-950'>
      
      <ActionIcon variant="transparent" size="xl" aria-label="Settings">
        <IconLayoutSidebarLeftCollapseFilled className='text-primary-900' style={{ width: '90%', height: '90%' }} stroke={1.5} />
      </ActionIcon>

      <div>
        <ProfileMenu/>
      </div>
    </div>
  )
}

export default Header