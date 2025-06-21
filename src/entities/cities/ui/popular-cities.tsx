"use client";
import { Button } from "@/shared/ui/button";
import { Card, CardContent, CardTitle } from "@/shared/ui/card";
import Link from "next/link";
import { useRouter } from "next/navigation";

const PopularCities = () => {
  const router = useRouter();
  const cities = [
    { id: 1, name: "Санкт-Петербург" },
    { id: 2, name: "Москва" },
    { id: 3, name: "Казань" },
    { id: 4, name: "Калининград" },
    { id: 5, name: "Нижний Новгород" },
  ];

  return (
    <Card className="flex flex-col w-full lg:max-w-56 p-6">
      <CardTitle className="font-bold">Популярные города</CardTitle>
      <CardContent className="space-y-6 flex flex-col w-full px-0">
        {cities.map((city) => (
          <Link
            key={city.id}
            className="my-2 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive relative before:absolute before:inset-0 before:z-0 bg-primary-foreground border text-primary hover:bg-primary-foreground/30 h-9 px-4 py-2 has-[>svg]:px-3"
            href={`/?city=${city.name}`}
          >
            {city.name}
          </Link>
        ))}
      </CardContent>
    </Card>
  );
};

export default PopularCities;
