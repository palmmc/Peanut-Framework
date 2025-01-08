const units = ["ms", "μs", "ns"];

export class Benchmark {
  public static set() {
    return performance.now();
  }
  public static elapsed(start: DOMHighResTimeStamp, end: DOMHighResTimeStamp) {
    return end - start;
  }
  public static format(value: DOMHighResTimeStamp) {
    let unitIndex = 0;
    // Find the appropriate unit
    while (value < 1 && unitIndex < units.length - 1) {
      value *= 1000;
      unitIndex++;
    }
    return `${value.toFixed()} ${units[unitIndex]}`;
  }
}
