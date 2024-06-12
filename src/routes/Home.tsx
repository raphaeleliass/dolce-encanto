import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import ScrollTopButton from "@/components/Buttons/scrollTopButton";
import Products from "@/components/Products/Products";

function Home() {
  return (
    <section>
      <Header />
      <Hero />
      <Products />
      <ScrollTopButton />
    </section>
  );
}

export default Home;
