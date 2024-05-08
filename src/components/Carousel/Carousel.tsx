'use client';
import classes from '@/components/Carousel/Carousel.module.css';
import { Carousel } from '@mantine/carousel';

export function Updates() {
  return (
    <Carousel orientation="vertical">
      <Carousel.Slide>1</Carousel.Slide>
      <Carousel.Slide>2</Carousel.Slide>
      <Carousel.Slide>3</Carousel.Slide>
    </Carousel>
  );
}
