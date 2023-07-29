const cutString = (string: string, maxLength: number) => {
  if (string.trim().length > maxLength) {
    return string.slice(0, maxLength).trim() + '...';
  } else {
    return string;
  }
};

export default cutString;
