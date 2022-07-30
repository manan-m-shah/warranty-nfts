const ProgressBar = ({ progressPercentage, color }: { progressPercentage: number, color: string }) => {
  return (
    <div className='h-3 w-full bg-gray-300 rounded-xl'>
      <div
        style={{ width: `${progressPercentage}%` }}
        className={`rounded-xl h-full ${color}`}>
      </div>
    </div>
  );
};

export default ProgressBar;