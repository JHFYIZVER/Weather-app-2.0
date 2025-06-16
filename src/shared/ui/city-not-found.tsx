import { Card, CardHeader, CardTitle } from "./card";

const CityNotFound = ({ cityName }: { cityName: string }) => {
  return (
    <main className="w-full flex items-center justify-center h-svh px-4">
      <Card className="max-w-7xl w-full">
        <CardHeader className=" w-full mx-auto px-3 flex flex-col items-center justify-center gap-10">
          <CardTitle className="text-center">
            <h1 className="text-2xl md:text-3xl lg:text-4xl">
              Не удалось получить данные о погоде по запросу{" "}
              <strong>{cityName}</strong>
            </h1>
          </CardTitle>
        </CardHeader>
      </Card>
    </main>
  );
};

export default CityNotFound;
