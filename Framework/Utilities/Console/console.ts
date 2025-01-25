import { Benchmark, replaceMinecraftColorCodes } from "../utils";

/**
 * The Console class provides methods for logging messages to the console with optional color formatting.
 * It also includes the ability to manage a queue of logs, sorted by priority and time elapsed, 
 * and output them with additional information like time stamps and elapsed time.
 */
export class Console {
  /**
   * Stores the log entries in the queue, each with its source, text, elapsed time, and display order.
   * @private
   */
  private static logs: {
    source: keyof typeof Console.queue; // Trace, unused.
    text: string; // Text to log.
    elapsed?: DOMHighResTimeStamp; // Time elapsed, if available.
    order: number; // Order to display; larger = higher priority.
  }[] = [];

  /**
   * Logs a message to the console with Minecraft color code formatting.
   * @param {string} text - The text to log, possibly containing Minecraft color codes.
   */
  public static log(text: string) {
    console.log(replaceMinecraftColorCodes(text));
  }

  /**
   * Writes all queued log entries to the console, sorting them by order and displaying them with time stamps.
   * If elapsed time is provided, it will be formatted and displayed next to the log message.
   */
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

  /**
   * A queue of log types with associated methods to add logs of different severities or custom messages.
   * Includes log types for info, error, warning, and custom messages.
   */
  public static queue = {
    /**
     * Adds an informational log to the queue.
     * @param {string} data - The informational data to log.
     * @param {DOMHighResTimeStamp} [elapsed] - Optional elapsed time to display alongside the log.
     */
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

    /**
     * Adds an error log to the queue.
     * @param {string} data - The error data to log.
     * @param {DOMHighResTimeStamp} [elapsed] - Optional elapsed time to display alongside the log.
     */
    err: (data: string, elapsed?: DOMHighResTimeStamp) => {
      this.logs.push({
        source: "err",
        text: replaceMinecraftColorCodes(`§5Compilation §cfailed§r: '${data}'`),
        elapsed,
        order: 3,
      });
    },

    /**
     * Adds a warning log to the queue.
     * @param {string} data - The warning data to log.
     */
    warn: (data: string) => {
      this.logs.push({
        source: "warn",
        text: replaceMinecraftColorCodes(`§5Compilation §6warning§r: ${data}`),
        order: 2,
      });
    },

    /**
     * Adds a custom log to the queue with a specified priority order.
     * @param {string} data - The custom log data to add.
     * @param {number} order - The priority order for the log (larger value indicates higher priority).
     * @param {DOMHighResTimeStamp} [elapsed] - Optional elapsed time to display alongside the log.
     */
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
