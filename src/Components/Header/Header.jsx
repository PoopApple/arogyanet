import React from 'react'
import ProfileMenu from './ProfileMenu'
import { IconLayoutSidebarLeftCollapse, IconLayoutSidebarLeftCollapseFilled } from '@tabler/icons-react';
import { ActionIcon } from '@mantine/core';



function Header() {
  return (
    <div className='bg-green-400 w-full h-16'>
      {/* <ProfileMenu/> */}
      <ActionIcon variant="outline" aria-label="Settings">
        <IconLayoutSidebarLeftCollapseFilled style={{ width: '70%', height: '70%' }} stroke={1.5} />
      </ActionIcon>
    </div>
  )
}

export default Header