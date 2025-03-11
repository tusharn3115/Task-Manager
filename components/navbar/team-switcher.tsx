import React from "react";
import { Popover, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import { CaretSortIcon, PlusCircledIcon } from "@radix-ui/react-icons";
import { PopoverContent } from "@radix-ui/react-popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "../ui/command";

const groups = [
  {
    label: "Personal Account",
    teams: [{ label: "Tushar" }],
  },
  {
    label: "Teams",
    teams: [{ label: "saksham" }, { label: "aman" }, { label: "suraj" }],
  },
];

const TeamSwitcher = () => {
  return (
    <Popover>
      <PopoverTrigger>
        <Button
          variant="outline"
          role="combobox"
          aria-label="Select a team"
          className="w-[200px] justify-start"
        >
          <Avatar className="h-5 w-5">
            <AvatarImage
              src="http://avatar.vercel.sh/Tushar.png"
              alt="Profile Image"
            />
            <AvatarFallback>TN</AvatarFallback>
          </Avatar>
          Tushar
          <CaretSortIcon className="ml-20" />
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-80">
        <Command>
          <CommandInput placeholder="Search team..." />
          <CommandList>
            <CommandEmpty>No team found!</CommandEmpty>

            {groups.map((group) => (
              <CommandGroup key={group.label} heading={group.label}>
                {group.teams.map((team) => (
                  <CommandItem key={team.label} className="text-sm">
                    <Avatar className="mr-2 h-5 w-5">
                      <AvatarImage
                        src={`https://avatar.vercel.sh/${team.label}.png`}
                        alt={team.label}
                      />
                      <AvatarFallback className="uppercase">
                        {team.label}
                      </AvatarFallback>
                    </Avatar>
                    {team.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            ))}
          </CommandList>
          <CommandSeparator />
          <CommandList>
            <CommandGroup>
              <CommandItem>
                <PlusCircledIcon className="mr-2 h-5 w-5" />
                Create Team
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default TeamSwitcher;
