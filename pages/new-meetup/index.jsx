import Head from "next/head";
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

  return (
    <>
      <Head>
        <title>Add a new meetup</title>
        <meta name="description" content="Find meet up places" />
        <NewMeetupForm onAddMeetup={addNewMeetUpHandler} />
      </Head>
    </>
  );
};

export default MeetUpForm;
