export default function (url: string): number | undefined {
  const id = url.split('/')[2];

  if (!id) return;

  return Number(id);
}
