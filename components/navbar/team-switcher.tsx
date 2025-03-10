import React from 'react'
import { Popover, PopoverTrigger } from '../ui/popover'
import { Button } from '../ui/button'
import { Avatar, AvatarImage } from '../ui/avatar'

const TeamSwitcher = () => {
  return (
    <Popover>
      <PopoverTrigger>
        <Button variant="outline" role='combobox' aria-label='Select a team' className='w-[200px] justify-between'>
          <Avatar className='mr-2 h-6 w-6'>
            <AvatarImage src="http://avatar.vercel.sh/Tushar.png" alt="Profile Image" />
          </Avatar>
        </Button>
      </PopoverTrigger>
    </Popover>
  )
}

export default TeamSwitcher