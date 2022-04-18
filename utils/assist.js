export function formatDate(t) {
  return new Date(t).toLocaleDateString().replace(/\//g, '.');
}