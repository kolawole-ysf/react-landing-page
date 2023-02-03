import Header from "./components/Header";
import Hero from "./components/Hero";
import Travel from './assets/Travel.jpeg';
import Travel2 from './assets/Travel2.jpeg';
import Travel3 from './assets/Travel3.jpeg';
import Travel4 from './assets/Travel4.jpeg';
import Travel5 from './assets/Travel5.jpeg';
import Travel6 from './assets/Travel6.jpeg';
import Travel7 from './assets/Travel7.jpeg';
import Travel8 from './assets/Travel8.jpeg';
import Travel0 from './assets/Travel0.png';
import Travel01 from './assets/Travel01.jpg';
import Travel02 from './assets/Travel02.jpg';
import Travel9 from './assets/Travel9.webp';
import nike from './logo/nike.png'
import adidas from './logo/adidas.png'
import kia from './logo/kia.png'
import Slider from "./components/Slider";
import Destination from "./components/Destination";
import Testimonials from "./components/Testimonials";
import Sponsors from "./components/Sponsors";
import Footer from "./components/Footer";
import Places from "./components/Places";


function App() {
  //Places
  const places=[
    {
      id: 1,
      imageSrc: Travel0,
      place: " Santorini",
      price: "$320"
  },
  {
    id: 2,
    imageSrc: Travel01,
    place: " Marakesh Beach",
    price: "$450"
},
{
  id: 3,
  imageSrc: Travel02,
  place: " Maldives",
  price: "$380"
},
]
  //Navlinks
  const navLinks=[{
    url: "#",
    title: "Home"
  },
  {
    url: "#",
    title: "About"
  },
  {
    url: "#",
    title: "Contact"
  },
  ]

  //Slider cards
  const destinationSlider=[
    {
      id: 1,
      imageSrc : Travel3,
      location: "Al Katab",
      distance: "100km from Muskat",
      city:"Muscat Oman",
      destination: "Al Wadi Al Kabir",
      details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      price: "$250",
      duration: "3 Days (1 Night)",
    },
    {
      id: 2,
      imageSrc : Travel4,
      location: "Al Katab",
      distance: "100km from Muskat",
      city:"Muscat Oman",
      destination: "Al Kantab",
      details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      price: "$250",
      duration: "3 Days (1 Night)",
    },
    {
      id: 3,
      imageSrc : Travel5,
      location: "Al Katab",
      distance: "100km from Muskat",
      city:"Muscat Oman",
      destination: "Maldives",
      details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      price: "$250",
      duration: "3 Days (1 Night)",
    },
    {
      id: 4,
      imageSrc: Travel,
      location: "Al Katab",
      distance: "100km from Muskat",
      city:"Muscat Oman",
      destination: "Santorini",
      details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      price: "$250",
      duration: " 3 Days (1 Night)",
    },
    {
      id: 5,
      imageSrc : Travel7,
      location: "Al Katab",
      distance: "100km from Muskat",
      city:"Muscat Oman",
      destination: "Al Wadi Al Kabir",
      details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      price: "$250",
      duration: "3 Days (1 Night)",
    },
    {
      id: 6,
      imageSrc: Travel6,
      location: "Al Katab",
      distance: "100km from Muskat",
      city:"Muscat Oman",
      destination: "Al Wadi Al Kabir",
      details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      price: "$250",
      duration: " 3 Days (1 Night)",
    },
    {
      id: 7,
      imageSrc: Travel8,
      location: "Al Katab",
      distance: "100km from Muskat",
      city:"Muscat Oman",
      destination: "Al Wadi Al Kabir",
      details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      price: "$250",
      duration: " 3 Days (1 Night)",
    }
  ]
  //sponsors
  const sponsors=[
    {id: 1, imageSrc: nike},
    {id: 2, imageSrc: adidas},
    {id: 3, imageSrc: kia},
    {id: 4, imageSrc: adidas},
    {id: 5, imageSrc: kia},
    {id: 6, imageSrc: nike},
  ]

  return (
    <div>
        <Header navLinks={navLinks} />
        <Hero imageSrc={Travel} />
        <Places places={places} />
        <Slider imageSrc={Travel2} title={'Explore amazing locations'} subtitle={'Get access to various locations of interest with amazing views and serenity.'} />
        <Slider imageSrc={Travel4} title={'Enjoy your solitude'} subtitle={'Get the best that nature have to offer at your disposal.'} flipped={true} />
        {/* <Slider imageSrc={Travel3} title={'Enjoy your baecation'} subtitle={'Get the best that nature have to offer with your partner.'} /> */}

        <Destination destinationSlider={destinationSlider} />
        <Testimonials imageSrc={Travel9}/>
        <Sponsors sponsors={sponsors} />
        <Footer imageSrc={Travel8} />
    </div>

  )
}

export default App;
