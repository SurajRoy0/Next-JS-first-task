const {
  default: NewMeetupForm,
} = require("@/components/meetups/NewMeetupForm");

const MeetUpForm = () => {
  const addNewMeetUpHandler = (enteredData) => {
    console.log(enteredData);
  };

  return <NewMeetupForm onAddMeetup={addNewMeetUpHandler} />;
};

export default MeetUpForm;
