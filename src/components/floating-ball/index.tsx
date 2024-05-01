const ballCount = [1, 2];

export const FloatingBalls = () => (
  <>
    {ballCount.map((ball) => (
      <div
        key={ball}
        className={`floating-ball-${ball} absolute -z-10 h-96 w-96 bg-primary-200 dark:bg-primary-900`}
      />
    ))}
  </>
);
