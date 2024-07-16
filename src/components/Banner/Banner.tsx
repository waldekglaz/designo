import Button from "../Button/Button";
interface BannerProps {
  title: string;
  text: string;
  btnText: string;
  href: string;
}

const Banner = ({ title, text, btnText, href }: BannerProps) => {
  return (
    <div className="bg-footer-pattern bg-no-repeat bg-center bg-orange absolute top-[-20%] text-white py-10 px-4 text-center rounded-lg left-1/2 transform -translate-x-1/2 w-[90%] xl:w-[1111px] xl:flex items-center justify-between xl:text-left xl:py-20 xl:px-24 xl:top-[-40%]">
      <div>
        <h2 className="text-3xl mb-4 md:text-5xl md:max-w-[335px] md:mx-auto xl:ml-0">
          {title}
        </h2>
        <p className="text-sm leading-relaxed mb-6 md:text-base md:max-w-[520px] md:mx-auto">
          {text}
        </p>
      </div>

      <Button text={btnText} href={href} />
    </div>
  );
};

export default Banner;
