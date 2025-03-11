import React from "react";

const links = () => {
  return (
    <div className="flex items-center space-x-4 lg:space-x-6">
      <span className="text-sm font-medium transition-colors hover:text-primary">
        Task
      </span>
      <span className="text-sm text-muted font-medium transition-colors hover:text-primary">
        Calender
      </span>
      <span className="text-sm text-muted font-medium transition-colors hover:text-primary">
        Settings
      </span>
    </div>
  );
};

export default links;
