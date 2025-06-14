import AppInterface from "./widget/app-interface/ui/app-interface";
import Header from "./widget/header/ui/header";
import HomeScreen from "./widget/home-screen/ui/home-screen";

type Props = {
  searchParams: Promise<{ city: string }>;
};

export default async function Home({ searchParams }: Props) {
  const { city } = await searchParams;

  if (!city) return <HomeScreen />;

  return (
    <>
      <Header />
      <AppInterface city={city} />
    </>
  );
}
