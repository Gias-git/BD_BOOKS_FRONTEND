
import { Card, CardContent } from "../ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "../ui/carousel";
import slider1 from "../../assets/slider1.webp";
import slider2 from "../../assets/slider2.webp";
import slider3 from "../../assets/slider3.webp";


export function Slider() {
    const images = [
        slider1,
        slider2,
        slider3,
    ];
    return (
        <Carousel className="w-11/12  mx-auto mt-10">
            <CarouselContent>
                {images.map((img, index) => (
                    <CarouselItem key={index}>
                        <div className="">
                            <Card className="p-0 ">
                                <CardContent className="flex items-center justify-center p-0 ">
                                    <img src={img} className="w-full rounded-xl" alt={`Slide ${index + 1}`} />
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:block" />
            <CarouselNext className="hidden lg:block" />
        </Carousel>
    )
}
