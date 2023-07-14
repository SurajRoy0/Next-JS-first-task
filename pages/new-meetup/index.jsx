import { useRouter } from "next/router";

const {
  default: NewMeetupForm,
} = require("@/components/meetups/NewMeetupForm");

const MeetUpForm = () => {
  const router = useRouter();
  const addNewMeetUpHandler = async (enteredData) => {
    const res = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    console.log(data);
    router.replace("/");
  };

  return <NewMeetupForm onAddMeetup={addNewMeetUpHandler} />;
};

export default MeetUpForm;
