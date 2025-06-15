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
          <Button className="my-2 relative" key={city.id}>
            <Link
              className="before:absolute before:inset-0 before:z-0"
              href={`/?city=${city.name}`}
            >
              {city.name}
            </Link>
          </Button>
        ))}
      </CardContent>
    </Card>
  );
};

export default PopularCities;
