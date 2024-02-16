import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Empire state building",
    description: "One of the most famous sky scrappers in the world!",
    imageUrl:
      "https://lh3.googleusercontent.com/p/AF1QipOMAB7d2AGdQu-A6PU4jFMUfVAESsKvHwMmlZwf=s1360-w1360-h1020",
    address: "20 W 34th St., New York, NY 10001, United States",
    coordinates: {
      lat: 40.748817,
      lng: -73.985428,
    },
    creatorId: "u1",
  },
  {
    id: "p2",
    title: "Empire state building",
    description: "One of the most famous sky scrappers in the world!",
    imageUrl:
      "https://lh3.googleusercontent.com/p/AF1QipOMAB7d2AGdQu-A6PU4jFMUfVAESsKvHwMmlZwf=s1360-w1360-h1020",
    address: "20 W 34th St., New York, NY 10001, United States",
    coordinates: {
      lat: 40.748817,
      lng: -73.985428,
    },
    creatorId: "u2",
  },
];

console.log(DUMMY_PLACES);

const UserPlaces = () => {
  return <PlaceList items={DUMMY_PLACES} />;
};

export default UserPlaces;
