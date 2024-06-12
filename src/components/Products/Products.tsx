import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "../ui/carousel";
import { useRef, useState } from "react";
import { Button } from "../ui/button";

function Products() {
  const docesRef = useRef<HTMLButtonElement>(null);
  const bolosRef = useRef<HTMLButtonElement>(null);
  const tortasRef = useRef<HTMLButtonElement>(null);

  const [activeTab, setActiveTab] = useState("doces");

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <section className="mx-auto flex w-full max-w-xs justify-center pt-32 md:max-w-3xl lg:max-w-6xl">
      <Tabs
        defaultValue="doces"
        className="w-full max-w-xs md:max-w-3xl lg:max-w-6xl"
      >
        <TabsList className="mx-auto mb-2 flex w-full flex-row items-center justify-center space-x-2 rounded-md bg-neutral-100 py-2 md:w-[400px]">
          <TabsTrigger
            value="doces"
            ref={docesRef}
            className={`tab-trigger ${activeTab === "doces" ? "active" : ""}`}
            onClick={() => handleTabChange("doces")}
          >
            Doces
          </TabsTrigger>
          <TabsTrigger
            value="tortas"
            ref={tortasRef}
            className={`tab-trigger ${activeTab === "tortas" ? "active" : ""}`}
            onClick={() => handleTabChange("tortas")}
          >
            Tortas
          </TabsTrigger>
          <TabsTrigger
            value="bolos"
            ref={bolosRef}
            className={`tab-trigger ${activeTab === "bolos" ? "active" : ""}`}
            onClick={() => handleTabChange("bolos")}
          >
            Bolos
          </TabsTrigger>
        </TabsList>
        <TabsContent value="doces">
          <Card>
            <CardHeader>
              <CardTitle>Doces</CardTitle>
              <CardDescription>
                Doces artesanais confeccionados com muito carinho.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Carousel
                opts={{
                  align: "start",
                }}
                className="mx-auto w-full max-w-xs md:max-w-3xl"
              >
                <CarouselContent>
                  {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem
                      key={index}
                      className="md:basis-1/2 lg:basis-1/3"
                    >
                      <Card>
                        <CardHeader>
                          <img
                            src="https://images.pexels.com/photos/9285194/pexels-photo-9285194.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                            alt="Doce de chocolate"
                            className="aspect-square rounded-lg object-cover object-center"
                          />
                        </CardHeader>
                        <CardContent>
                          <CardTitle>Doce de chocolate</CardTitle>
                          <CardDescription>
                            Doce de chocolate com açúcar de chocolate
                          </CardDescription>
                        </CardContent>
                        <CardFooter className="flex justify-center">
                          <Button className="w-full bg-green-500 hover:bg-green-600">
                            Adicionar ao carrinho
                          </Button>
                        </CardFooter>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="tortas">
          <Card>
            <CardHeader>
              <CardTitle>Tortas</CardTitle>
              <CardDescription>
                Tortas artesanais confeccionados com carinho.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Carousel
                opts={{
                  align: "start",
                }}
                className="mx-auto w-full max-w-xs md:max-w-3xl"
              >
                <CarouselContent>
                  {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem
                      key={index}
                      className="md:basis-1/2 lg:basis-1/3"
                    >
                      <Card>
                        <CardHeader>
                          <img
                            src="https://images.pexels.com/photos/5738635/pexels-photo-5738635.jpeg?auto=compress&cs=tinysrgb&w=600"
                            alt="Torta salgada"
                            className="aspect-square rounded-lg object-cover object-center"
                          />
                        </CardHeader>
                        <CardContent>
                          <CardTitle>Torta salgada</CardTitle>
                          <CardDescription>
                            Torta salgada com queijo parmesão, tomate e
                            calabresa
                          </CardDescription>
                        </CardContent>
                        <CardFooter className="flex justify-center">
                          <Button className="w-full bg-green-500 hover:bg-green-600">
                            Adicionar ao carrinho
                          </Button>
                        </CardFooter>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="bolos">
          <Card>
            <CardHeader>
              <CardTitle>Bolos</CardTitle>
              <CardDescription>
                Bolos artesanais confeccionados com carinho.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Carousel
                opts={{
                  align: "start",
                }}
                className="mx-auto w-full max-w-xs md:max-w-3xl"
              >
                <CarouselContent>
                  {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem
                      key={index}
                      className="md:basis-1/2 lg:basis-1/3"
                    >
                      <Card>
                        <CardHeader>
                          <img
                            src="https://images.pexels.com/photos/14107/pexels-photo-14107.jpeg?auto=compress&cs=tinysrgb&w=600"
                            alt="Doce de chocolate"
                            className="aspect-square rounded-lg object-cover object-center"
                          />
                        </CardHeader>
                        <CardContent>
                          <CardTitle>Bolo de baunilha</CardTitle>
                          <CardDescription>
                            Bolo de baunilha com açúcar de chocolate
                          </CardDescription>
                        </CardContent>
                        <CardFooter className="flex justify-center">
                          <Button className="w-full bg-green-500 hover:bg-green-600">
                            Adicionar ao carrinho
                          </Button>
                        </CardFooter>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </section>
  );
}

export default Products;
