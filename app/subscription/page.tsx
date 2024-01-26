import PlanOptions from "@/components/planOptions";
import UsersLoveApp from "@/components/usersLoveApp";
import WhatYouAchieved from "@/components/whatYouAchieved";
import WhatYouGet from "@/components/whatYouGet";
import React from "react";

const Subscription = () => {
  return (
    <div className="flex flex-col gap-10">
      <PlanOptions />
      <WhatYouGet />
      <WhatYouAchieved />
      <UsersLoveApp />
      <PlanOptions />
    </div>
  );
};

export default Subscription;
