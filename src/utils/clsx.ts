type ClassValue = number | string | boolean | ClassArray | ClassObject | null | undefined;
type ClassArray = Array<ClassValue>
interface ClassObject {
  [key: string]: boolean | undefined | null;
}

const clsx = (...args: ClassValue[]): string => {
  const classes = new Set<string>();

  args.forEach((arg) => {
    if (!arg || typeof arg === 'boolean') {
      return;
    }

    if (Array.isArray(arg)) {
      classes.add(clsx(...arg));
    } else if (typeof arg === 'object') {
      Object.keys(arg).forEach((key) => {
        if (arg[key]) {
          classes.add(key);
        }
      });
    } else {
      classes.add(`${arg}`);
    }
  });

  return Array.from(classes).join(' ');
};

export default clsx;
