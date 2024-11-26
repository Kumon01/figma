import { Button, Card } from "flowbite-react";
import React from "react";
import contoh from "../assets/contoh.jpg";

const Portfolio = () => {
  return (
    <div
      className="relative p-16 h-screen container "
      id="Portfolio"
      data-aos="fade-left"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
    >
      <h5 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
        My Project
      </h5>
      <div className="grid grid-rows-3 grid-flow-col gap-4">
        
        <div class="row-start-1 row-span-3">
          <Card className="flex-col-3" imgSrc={contoh}>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Contohh
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              contoh 
            </p>
            <Button color="blue" pill>
            Click
            </Button>
          </Card>
        </div>

        <div class="row-start-1 row-span-3">
          <Card className="flex-col-3" imgSrc={contoh}>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Web sepatu
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              web sepatu
            </p>
            <Button color="blue" pill>
              Click
            </Button>
          </Card>
        </div>
        
        <div class="row-start-1 row-span-3">
          <Card className="flex-col-3" imgSrc={contoh}>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Contoh
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              contoh
            </p>
            <Button color="blue" pill>
            Click
            </Button>
          </Card>
        </div>

      </div>
    </div>
  );
};

export default Portfolio;
