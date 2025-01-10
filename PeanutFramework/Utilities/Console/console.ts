import { Benchmark, replaceMinecraftColorCodes } from "../utils";

export class Console {
  private static logs: {
    source: keyof typeof Console.queue; // Trace, unused.
    text: string; // Text to log.
    elapsed?: DOMHighResTimeStamp;
    order: number; // Order to display; larger = higher priority.
  }[] = [];
  public static log(text: string) {
    console.log(replaceMinecraftColorCodes(text));
  }
  public static writeQueue() {
    console.log();
    this.logs.sort((a, b) => a.order - b.order);
    for (const t of this.logs) {
      let log = `[\x1b[30m${new Date().toLocaleTimeString([], {
        hour12: false,
      })}\x1b[0m] ${t.text}`;
      if (t.elapsed)
        log += ` after \x1b[35m${Benchmark.format(t.elapsed)}\x1b[0m`;
      console.log(log);
    }
    console.log();
  }
  public static queue = {
    info: (data: string, elapsed?: DOMHighResTimeStamp) => {
      this.logs.push({
        source: "info",
        text: replaceMinecraftColorCodes(
          `§5Compilation §asuccessful§r: '${data}'`
        ),
        elapsed,
        order: 1,
      });
    },
    err: (data: string, elapsed?: DOMHighResTimeStamp) => {
      this.logs.push({
        source: "err",
        text: replaceMinecraftColorCodes(`§5Compilation §cfailed§r: '${data}'`),
        elapsed,
        order: 3,
      });
    },
    warn: (data: string) => {
      this.logs.push({
        source: "warn",
        text: replaceMinecraftColorCodes(`§5Compilation §6warning§r: ${data}`),
        order: 2,
      });
    },
    custom: (data: string, order: number, elapsed?: DOMHighResTimeStamp) => {
      this.logs.push({
        source: "custom",
        text: replaceMinecraftColorCodes(data),
        elapsed,
        order: order,
      });
    },
  };
}
