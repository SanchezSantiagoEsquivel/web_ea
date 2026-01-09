export interface EditorialTestimonialsCarouselInterface {
    name: string;
    data: DataEditorialCarouselInterface[];
}

export interface DataEditorialCarouselInterface {
    id: number;
    headline: string;
    description: string;
    author: string;
    position: string;
    image: string;
}