import heroImage from "@assets/stock_images/happy_children_learn_13113239.jpg";

export function ModernHero() {
  return (
    <div className="relative w-full" data-testid="hero-background">
      <img
        src={heroImage}
        alt="Shree Balaji Foundation"
        className="w-full h-[450px] md:h-[550px] lg:h-[650px] object-cover animate-float-hero"
        data-testid="img-hero"
      />
    </div>
  );
}
