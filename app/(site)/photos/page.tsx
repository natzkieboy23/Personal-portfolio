import type { Metadata } from "next";
import { PhotoGallery } from "@/components/photo-gallery";
import { personalInfo } from "@/data/personalInfo";

export const metadata: Metadata = {
  title: "Photos",
  description: `Professional photos of ${personalInfo.name}, showcasing different aspects of their personality and professional presence.`,
};

const professionalPhotos = [
  {
    src: "/images/others/BenjieNonato.jpg",
    alt: "Benjie Louise Nonato - Main Profile Photo",
    caption: "Professional headshot"
  },
  {
    src: "/images/others/_DSC5509.JPG",
    alt: "Benjie Louise Nonato - Professional Photo 1",
    caption: "Professional portrait"
  },
  {
    src: "/images/others/_DSC5510.JPG",
    alt: "Benjie Louise Nonato - Professional Photo 2",
    caption: "Professional portrait"
  },
  {
    src: "/images/others/_DSC5511.JPG",
    alt: "Benjie Louise Nonato - Professional Photo 3",
    caption: "Professional portrait"
  },
  {
    src: "/images/others/_DSC5512.JPG",
    alt: "Benjie Louise Nonato - Professional Photo 4",
    caption: "Professional portrait"
  },
  {
    src: "/images/others/_DSC5513.JPG",
    alt: "Benjie Louise Nonato - Professional Photo 5",
    caption: "Professional portrait"
  },
  {
    src: "/images/others/_DSC5514.JPG",
    alt: "Benjie Louise Nonato - Professional Photo 6",
    caption: "Professional portrait"
  },
  {
    src: "/images/others/_DSC5515.JPG",
    alt: "Benjie Louise Nonato - Professional Photo 7",
    caption: "Professional portrait"
  },
  {
    src: "/images/others/_DSC5516.JPG",
    alt: "Benjie Louise Nonato - Professional Photo 8",
    caption: "Professional portrait"
  },
  {
    src: "/images/others/_DSC5517.JPG",
    alt: "Benjie Louise Nonato - Professional Photo 9",
    caption: "Professional portrait"
  },
  {
    src: "/images/others/_DSC5518.JPG",
    alt: "Benjie Louise Nonato - Professional Photo 10",
    caption: "Professional portrait"
  },
];

export default function PhotosPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <PhotoGallery
              images={professionalPhotos}
              title="Professional Photos"
              description="A collection of professional photographs showcasing different aspects of my personality and professional presence"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
