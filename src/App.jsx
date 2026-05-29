import "./App.css";
import {
  Header,
  Navbar,
  FilterGroup,
  Footer,
  Carousel,
  SkinList,
  ErrorPage,
} from "./components";
import { useSkinsContext } from "./contexts/SkinsContext";

export default function App() {
  const { loading, error } = useSkinsContext();

  if (loading) {
    return <div className="app-loading">Carregando skins...</div>;
  }

  if (error) {
    return <ErrorPage message={error} />;
  }

  return (
    <>
      <Header />
      <Navbar />
      <Carousel />
      <FilterGroup />
      <SkinList />
      <Footer />
    </>
  );
}
