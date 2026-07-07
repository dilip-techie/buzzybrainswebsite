interface EmailJob {
  fn: () => Promise<void>;
}

export async function processEmailQueue(jobs: EmailJob[], concurrency = 5): Promise<{ sent: number; failed: number }> {
  let sent = 0;
  let failed = 0;
  const queue = [...jobs];

  const worker = async () => {
    while (queue.length > 0) {
      const job = queue.shift();
      if (!job) break;
      try {
        await job.fn();
        sent++;
      } catch {
        failed++;
      }
      // Rate limit: ~30/min → ~500ms between emails per worker
      await new Promise(r => setTimeout(r, 500));
    }
  };

  const workers = Array.from({ length: Math.min(concurrency, jobs.length) }, () => worker());
  await Promise.all(workers);

  return { sent, failed };
}
