const units = ["ms", "μs", "ns"];

/**
 * The `Benchmark` class provides utility methods for measuring and formatting time in performance benchmarks.
 * It can be used to record start times, calculate elapsed times, and format the results in human-readable units.
 */
export class Benchmark {
  /**
   * Records the current time (in high-resolution) for benchmarking purposes.
   * 
   * @returns {DOMHighResTimeStamp} The current high-resolution time in milliseconds.
   * 
   * @example
   * const startTime = Benchmark.set();
   */
  public static set(): DOMHighResTimeStamp {
    return performance.now();
  }

  /**
   * Calculates the time difference (elapsed time) between two timestamps.
   * 
   * @param {DOMHighResTimeStamp} start - The start time of the benchmark.
   * @param {DOMHighResTimeStamp} end - The end time of the benchmark.
   * @returns {number} The elapsed time in milliseconds.
   * 
   * @example
   * const elapsedTime = Benchmark.elapsed(startTime, performance.now());
   */
  public static elapsed(start: DOMHighResTimeStamp, end: DOMHighResTimeStamp): number {
    return end - start;
  }

  /**
   * Formats a time value into a human-readable string with the appropriate time unit (milliseconds, microseconds, or nanoseconds).
   * The value will be formatted based on its magnitude, and the most appropriate unit will be chosen.
   * 
   * @param {DOMHighResTimeStamp} value - The time value to format.
   * @returns {string} The formatted time value with the appropriate unit.
   * 
   * @example
   * const formattedTime = Benchmark.format(elapsedTime);
   * console.log(formattedTime); // e.g., "150 ms" or "500 μs"
   */
  public static format(value: DOMHighResTimeStamp): string {
    let unitIndex = 0;
    // Find the appropriate unit
    while (value < 1 && unitIndex < units.length - 1) {
      value *= 1000;
      unitIndex++;
    }
    return `${value.toFixed()} ${units[unitIndex]}`;
  }
}
