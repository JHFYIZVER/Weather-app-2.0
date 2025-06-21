import useDebounce from "@/shared/hook/use-debounce";
import { Input } from "@/shared/ui/input";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { cn } from "@/shared/lib/utils";
type Props = {
  className?: string;
};

const SearchCity = ({ className }: Props) => {
  const [city, setCity] = useState("");

  const debouncedValue = useDebounce(city, 300);
  const router = useRouter();

  useEffect(() => {
    if (debouncedValue) {
      router.push(`/?city=${debouncedValue}`);
    }
  }, [debouncedValue, router]);

  return (
    <label className={cn("relative w-full max-w-xl", className)}>
      <Input
        value={city}
        onChange={(e) => setCity(e.target.value)}
        type="text"
        placeholder="Название города"
      />
    </label>
  );
};

export default SearchCity;
