interface PlanOption {
  id: number;
  planTitle: string;
  price: string;
  isMostPopular: boolean;
}

export const MonthPlanData: PlanOption[] = [
  {
    id: 1,
    planTitle: "1-Month Plan",
    price: "10",
    isMostPopular: false,
  },
  {
    id: 2,
    planTitle: "3-Month Plan",
    price: "30",
    isMostPopular: true,
  },
  {
    id: 3,
    planTitle: "6-Month Plan",
    price: "60",
    isMostPopular: false,
  },
];
