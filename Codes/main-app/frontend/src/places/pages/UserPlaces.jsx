import { useParams } from "react-router";

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
    title: "Burj Khalifa",
    description:
      "Spired 828-metre skyscraper with a viewing deck, a restaurant, a hotel and offices.",
    imageUrl:
      "https://s3.amazonaws.com/images.skyscrapercenter.com/thumbs/5190_500x650.jpg",
    address:
      "1 Sheikh Mohammed bin Rashid Blvd - Downtown Dubai - Dubai - United Arab Emirates",
    coordinates: {
      lat: 25.19742996863342,
      lng: 55.274333480622374,
    },
    creatorId: "u1`",
  },
];

console.log(DUMMY_PLACES);

const UserPlaces = () => {
  // console.log("Params: ", useParams());
  const userId = useParams().userId;
  // console.log("User ID: ", userId);

  const loadedPlaces = DUMMY_PLACES.filter(
    (place) => place.creatorId === userId
  );

  // console.log(loadedPlaces);
  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
