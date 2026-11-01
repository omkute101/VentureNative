export const date = (value?: string) => value ? new Intl.DateTimeFormat('en', { day: 'numeric', month: 'short', year: 'numeric' }).format(new Date(`${value}T00:00:00`)) : 'Not yet verified';
export const classNames = (...values: Array<string | false | undefined>) => values.filter(Boolean).join(' ');
export const slugify = (value: string) => value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
