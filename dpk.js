import { createHash } from "crypto";

export function deterministicPartitionKey(event) {
  const TRIVIAL_PARTITION_KEY = "0";
  const MAX_PARTITION_KEY_LENGTH = 256;
  let candidate;
  const hash = createHash("sha3-512");

  if (!event){
    return TRIVIAL_PARTITION_KEY;
  }

  if (!event.partitionKey) {
    const data = JSON.stringify(event);
    candidate = hash.update(data).digest("hex");
  }

  if (event.partitionKey) {
    candidate = event.partitionKey;
    if (typeof candidate !== "string") {
      candidate = JSON.stringify(event.partitionKey);
    }
  }

  if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
    candidate = hash.update(candidate).digest("hex");
  }

  return candidate;
}