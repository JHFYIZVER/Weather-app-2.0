import { useState, useEffect } from "react";

type Props = {
  value: string;
  delay: number;
};

const useDebounce = ({ value, delay }: Props) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [debouncedValue]);
};

export default useDebounce;
