import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export interface MagazineType {
  name: string;
  img: string;
  id: string;
  available: boolean;
  background_color: string;
  setViewing: React.Dispatch<React.SetStateAction<undefined | string>>;
}

const Main = ({ name, available, id, img, setViewing }: MagazineType) => {
  const { ref, inView, entry } = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      const issue = entry?.target.id;
      setViewing(issue);
    }
  }, [inView, entry, setViewing]);
  return (
    <main
      ref={ref}
      id={id}
      className="w-full h-[100vh] flex flex-col items-center snap-center pt-20 transition ease-in-out">
      <img src={img} alt={id} className="w-[26.25rem]" />
      <p className="font-semibold">
        Issue #{name}
        {available ? "" : "is sold out"}
      </p>
      {available && (
        <p>
          <a href="#" className="text-white">
            BUY HERE
          </a>
        </p>
      )}
      {available ? "or in" : " If you are lucky, you may get the last pieces in"}
      {!available && <br />}
      <a href="#">selected stores.</a>
    </main>
  );
};

export default Main;
