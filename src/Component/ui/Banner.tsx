import '../../Style/Bannar.css';

const Banner = () => {
  return (
    <section id="backgrounds">
      <div>
        <div id="banner" className="grid lg:grid-cols-2 banner gap-2">
          <img
            className="lg:h-[450px] p-3 h-[300px] rounded mx-auto"
            src="https://images.hindustantimes.com/rf/image_size_640x362/HT/p2/2016/08/30/Pictures/book-fair_aebce57c-6e68-11e6-93fb-3c3e574fb2a6.jpg"
            alt=""
          />
          <div className="justify-center items-center   lg:mx-9">
            <h1 className="text-teal-500 lg:text-5xl text-center text-xl ">
              Readers Book Fair
            </h1>
            <p className="text-white">
              The Mofassel Book Fair Bestseller Award leaderboard excitement is
              over with the online book fair.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
