export interface MagazineType {
  name: string;
  img: string;
  id: string;
  available: boolean;
}

const Issue = ({ name, available, id, img }: MagazineType) => {
  return (
    <section
      id={id}
      className="w-full h-[100vh] flex flex-col items-center snap-start pt-20 transition ease-in-out">
      <img src={img} alt={name} className="w-[26.25rem]" />
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
    </section>
  );
};

export default Issue;
