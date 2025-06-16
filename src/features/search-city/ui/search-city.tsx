import useDebounce from "@/shared/hook/use-debounce";
import { Input } from "@/shared/ui/input";
import { SearchIcon, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { cn } from "@/shared/lib/utils";
type Props = {
  className?: string;
};

const SearchCity = ({ className }: Props) => {
  const [city, setCity] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const debouncedValue = useDebounce(city, 300);
  const router = useRouter();

  useEffect(() => {
    if (debouncedValue) {
      setIsLoading(true);
      router.push(`/?city=${debouncedValue}`);
      const timer = setTimeout(() => setIsLoading(false), 700);
      return () => clearTimeout(timer);
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
      <div className="absolute right-5 top-1/2 -translate-y-1/2">
        {isLoading ? (
          <Loader2 className="size-5 animate-spin" />
        ) : (
          <SearchIcon className="size-5" />
        )}
      </div>
    </label>
  );
};

export default SearchCity;
