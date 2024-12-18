import Image from 'next/image';

export default function HeroImage() {
  return (
    <Image
      className="hero"
      src="/Hero-image.jpg"
      alt="Hero"
      sizes="80vw"
      style={{
        width: '100%',
        height: 'auto',
      }}
      width={736}
      height={736}
      priority
  />
    
  );
};
