"use client";

import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface ImageCarouselProps {
    images: string[];
    title: string;
}

export function ImageCarousel({ images, title }: ImageCarouselProps) {
    if (images.length === 1) {
        return (
            <div className="relative w-full aspect-video">
                <Image
                    src={images[0]}
                    alt={title}
                    fill
                    className="object-cover"
                />
            </div>
        );
    }

    return (
        <Carousel
            showThumbs={false}
            showStatus={false}
            infiniteLoop
            autoPlay
            interval={5000}
            className="project-carousel"
        >
            {images.map((image, index) => (
                <div key={index} className="relative w-full aspect-video">
                    <Image
                        src={image}
                        alt={`${title} screenshot ${index + 1}`}
                        fill
                        className="object-cover"
                    />
                </div>
            ))}
        </Carousel>
    );
}
