import React from "react";
import {
  Avatar as AvatarComponent,
  AvatarFallback,
  AvatarImage,
} from "../ui/avatar";

const avatar = () => {
  return (
    <AvatarComponent className="h-8 w-8">
      <AvatarImage
        src="http://avatar.vercel.sh/Tushar.png"
        alt="Profile Image"
      />
      <AvatarFallback>TN</AvatarFallback>
    </AvatarComponent>
  );
};

export default avatar;
