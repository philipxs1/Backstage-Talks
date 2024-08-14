import Menu from "./Menu";

const Footer = () => {
  return (
    <footer className="mb-5 ">
      <div className=" mb-5 fixed bottom-0 left-6 w-[20.125rem]">
        <p className="font-semibold text-[1.125rem] leading-6 ">
          Backstage Talks is a magazine of casual, but in depth dialogues on design and business.
          Our decisions shape and influence this complex world—to have a chance to make the right
          ones, we need to talk.
        </p>
        <small className="mb-5 mt-2 block text-xs font-light ">
          © 2024
          <a href="#" className="pl-1 underline">
            Published by Büro Milk
          </a>
        </small>{" "}
        <a href="#" className="underline font-bold text-lg">
          Privacy Policy
        </a>
      </div>
      <Menu />

      <p className="absolute top-0 right-6 pt-5">
        <a href="mailto:info@backstagetalks.com">info@backstagetalks.com</a>
      </p>
    </footer>
  );
};

export default Footer;
