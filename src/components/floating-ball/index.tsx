const ballCount = [1, 2];

export const FloatingBalls = () => (
  <>
    {ballCount.map((ball) => (
      <div
        key={ball}
        className={`floating-ball-${ball} absolute -z-10 h-64 w-64 bg-primary-300 blur-lg dark:bg-primary-1000 md:h-96 md:w-96`}
      />
    ))}
  </>
);
