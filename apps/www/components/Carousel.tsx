import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

export function CarouselDemo() {
    return (
        <Carousel className="w-[40rem]">
            <CarouselContent className="w-[32rem]">
                <CarouselItem className="cursor-pointer w-[30rem]">
                    <div className="w-fit p-1">
                        <Card className="h-[23rem] w-[30rem]">
                            <img
                                className="h-full w-full rounded-md"
                                src="https://i.pinimg.com/564x/d0/26/2a/d0262a318deb47cb05531e8f7e7b986b.jpg"
                                alt=""
                            />
                        </Card>
                    </div>
                </CarouselItem>
                <CarouselItem className="cursor-pointer">
                    <div className="w-fit  p-1">
                        <Card className="h-[23rem] w-[30rem] rounded-md">
                            <img
                                className="h-full w-full"
                                src="https://i.pinimg.com/564x/79/c5/fd/79c5fdffb314e8c54bffbf20b5f9e91a.jpg"
                                alt=""
                            />
                        </Card>
                    </div>
                </CarouselItem>

                <CarouselItem className="cursor-pointer">
                    <div className="w-fit  p-1">
                        <Card className="h-[23rem] w-[30rem] rounded-md">
                            <img
                                className="h-full w-full"
                                src="https://i.pinimg.com/564x/fc/23/f4/fc23f43f4a01860d04d06d1431adec43.jpg"
                                alt=""
                            />
                        </Card>
                    </div>
                </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    );
}
