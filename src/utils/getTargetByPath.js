export default function getTargetByPath(source, path = "", strict) {
  path = path.replace(/\[(\w+)\]/g, ".$1");
  path = path.replace(/^\./, "");

  const keys = path.split(".");
  const length = keys.length;
  let i = 0;

  for (; i < length - 1; ++i) {
    if (!source && !strict) {
      break;
    }

    const key = keys[i];

    if (key in source) {
      source = source[key];
    }
    else {
      if (strict) {
        throw new Error("[Vui Design ECharts warn][getTargetByPath]: please transfer a valid prop path.");
      }

      break;
    }
  }

  return {
    from: source,
    key: keys[i],
    value: source ? source[keys[i]] : undefined
  };
};