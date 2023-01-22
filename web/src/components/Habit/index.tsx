interface HabitProps {
  completed: number;
}

export function Habit({ completed }: HabitProps) {
  return <>Habits completed: {completed}</>;
}
