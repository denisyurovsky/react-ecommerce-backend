export default function getBaseUrl(url: string): string {
  return url.split('/')[1].split('?')[0];
}
