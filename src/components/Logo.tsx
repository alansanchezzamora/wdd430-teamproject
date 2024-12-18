import Image from 'next/image';

export default function LogoImage() {
  return (
        
    <Image
      className="logo"
      src="/logo.webp"
      alt="Show logo"
      placeholder = 'empty'
      sizes="20vw"
      style={{
        width: '90%',
        height: 'auto',
      }}
      width={150}
      height={205}
    />  
  );
};

