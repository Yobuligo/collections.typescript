export function measureTimeMillis(block: () => void): number {
  const startTime = new Date();
  block();
  const endTime = new Date();
  return endTime.getTime() - startTime.getTime();
}
