import { type NextPage } from "next";
import Head from "next/head";
import Button from "../components/Button";
import LogoList from "../components/LogoList";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Make Remote Work · Snap</title>
        <meta name="description" content="Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar." />
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>

      <main>
        <div className="mb-10">
          <div style={{
            backgroundImage: 'url(/images/hero/image-hero-mobile.png)',
            backgroundSize: 'cover',
            paddingBottom: `${564 / 750 * 100}%`,
          }} />
        </div>

        <div className="text-center px-2">
          <header className="mb-3">
            <h1 className="text-3xl font-700">Make remote work</h1>
          </header>
          <div className="mb-6 text-gray">
            <p>Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</p>
          </div>
          <div className="mb-9">
            <Button href="#" variant="primary" size="lg">Learn more</Button>
          </div>
          <div>
            <LogoList
              items={[
                {
                  title: 'Databiz',
                  image: '/images/clients/client-databiz.svg',
                  width: 114,
                  height: 20,
                },
                {
                  title: 'Audiophile',
                  image: '/images/clients/client-audiophile.svg',
                  width: 73,
                  height: 36,
                },
                {
                  title: 'Meet',
                  image: '/images/clients/client-meet.svg',
                  width: 90,
                  height: 20,
                },
                {
                  title: 'Maker',
                  image: '/images/clients/client-maker.svg',
                  width: 83,
                  height: 24,
                },
              ]}
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
