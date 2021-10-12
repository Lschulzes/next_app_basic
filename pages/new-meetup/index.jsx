import NewMeetupForm from "../../components/meetups/NewMeetupForm";

import { useRouter } from "next/router";
import Head from "next/head";
import { Fragment } from "react";
function NewMeetup() {
  const router = useRouter();
  async function addMeetupHandler(meetupData) {
    const res = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    router.replace("/");
  }
  return (
    <Fragment>
      <Head>
        <title>Add a new Meetup</title>
        <meta
          name="description"
          content="Add your own meetups, create amazing network opportunities."
        />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </Fragment>
  );
}

export default NewMeetup;
