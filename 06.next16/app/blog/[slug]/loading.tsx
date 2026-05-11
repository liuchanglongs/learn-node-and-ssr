export default function Loading() {
  return (
    <div className="rounded-lg border border-amber-500/60 bg-amber-50 p-4 text-amber-950 dark:border-amber-400/50 dark:bg-amber-950/40 dark:text-amber-100">
      <p className="font-semibold">Loading post…</p>
      <p className="mt-1 text-sm opacity-90">
        来自 app/blog/[slug]/loading.tsx；服务端还在渲染该段 page。
      </p>
    </div>
  );
}
