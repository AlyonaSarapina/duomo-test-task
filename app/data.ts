interface Info {
  title: string;
  progress: number;
  steps: [
    { id: number; title: string },
    { id: number; title: string },
    { id: number; title: string },
    { id: number; title: string }
  ];
}

const info: Info = {
  title: "We are crafting \n your spiritual growth plan",
  progress: 87,
  steps: [
    { id: 1, title: "Aligning with your goals" },
    { id: 2, title: "Reviewing  your answers" },
    { id: 3, title: "Picking Bible verses and prayers for you" },
    { id: 4, title: "Finalizing your personalized plan" },
  ],
};

export default info;
