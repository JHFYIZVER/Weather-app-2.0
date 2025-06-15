

const CityNotFound = ({ cityName }: { cityName: string }) => {
  return (
    <main className="w-full px-4">
      <div className="max-w-7xl w-full mx-auto px-3 bg-white/2 h-150 flex flex-col items-center justify-center gap-10">
        <h1 className="text-2xl md:text-3xl lg:text-4xl">
          Не удалось получить данные о погоде по запросу{" "}
          <strong>{cityName}</strong>
        </h1>
       
      </div>
    </main>
  );
};

export default CityNotFound;
