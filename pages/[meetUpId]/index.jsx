import MeetUpDetails from "@/components/meetups/MeetUpDetails";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const meetups = [
  {
    id: "m1",
    title: "First Meet Up",
    image:
      "https://res.klook.com/image/upload/Mobile/City/swox6wjsl5ndvkv5jvum.jpg",
    address: "123 Main St, City",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non metus vitae nisi lobortis scelerisque ac vitae quam.",
  },
  {
    id: "m2",
    title: "Second Meet Up",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/67/London_Skyline_%28125508655%29.jpeg",
    address: "456 Elm St, Town",
    description:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris rhoncus, turpis nec accumsan gravida.",
  },
  {
    id: "m3",
    title: "Third Meet Up",
    image:
      "https://i.natgeofe.com/k/5b396b5e-59e7-43a6-9448-708125549aa1/new-york-statue-of-liberty_16x9.jpg?w=1200",
    address: "789 Oak St, Village",
    description:
      "Sed dapibus mi quis massa ornare, vitae rutrum ante vestibulum. Nulla sollicitudin, urna eu pellentesque efficitur, arcu dui tincidunt elit.",
  },
];

const MeetUpPlace = () => {
  const [place, setPlace] = useState({});
  const router = useRouter();
  const { meetUpId } = router.query;

  useEffect(() => {
    if (meetUpId) {
      setPlace(meetups.find((data) => data.id === meetUpId));
    }
  }, [meetUpId]);

  console.log(meetUpId);
  console.log(place);

  return <MeetUpDetails place={place} />;
};

export default MeetUpPlace;
