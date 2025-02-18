import { FC } from 'react';

interface TickProps {
  className?: string;
}

const Tick: FC<TickProps> = ({ className }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="white" className={className}>
    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
  </svg>
);

export default Tick;
