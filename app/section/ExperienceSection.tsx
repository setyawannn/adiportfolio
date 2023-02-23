import ExTabs from "@/components/ExTabs";
import React from "react";

const dataExperience = [
  {
    name: "UI/UX Competition Independence Day",
    title: "Winner",
    organizer: "SMK Telkom Malang",
    date: "2021, August 17",
  },
  {
    name: "UI Design Competition",
    title: "Participant",
    organizer: "Brawijaya University",
    date: "2021, September 5",
  },
  {
    name: "Playbox Season 2",
    title: "Top 10",
    organizer: "Telkom Surabaya Institute of Technology",
    date: "2021, October 21",
  },
  {
    name: "Innovative Informatics Contest",
    title: "Top 15",
    organizer: "Atma Jaya University",
    date: "2022, February 25",
  },
  {
    name: "Innovative Informatics Contest",
    title: "Winner",
    organizer: "Udayana University",
    date: "2022, March 24",
  },
  {
    name: "Playbox Season 3",
    title: "Level 2",
    organizer: "Telkom Surabaya Institute of Technology",
    date: "2021, June 17",
  },
  {
    name: "Bionix Student Level",
    title: "Semifinalist",
    organizer: "Sepuluh Nopember Institute of Technology",
    date: "2022, July 15",
  },
  {
    name: "UI/UX Competition Independence Day",
    title: "B2B Champion",
    organizer: "SMK Telkom Malang",
    date: "2022, August 17",
  },
  {
    name: "Creative Bussiness Competition",
    title: "Semifinalist",
    organizer: "Surabaya University",
    date: "2022, September 25",
  },
  {
    name: "Mobile Application Competition Creative Idea (MACCI)",
    title: "Finalist",
    organizer: "Jakarta Bina Nusantara University",
    date: "2022, October 6",
  },
  {
    name: "Multimedia and Game Event (MAGE8)",
    title: "Finalist",
    organizer: "Sepuluh Nopember Institute of Technology",
    date: "2022, October 22",
  },
];

export default function ExperienceSection() {
  return (
    <section className="container min-h-screen mt-20 relative max-w-[680px] m-auto">
      <h2 className="text-4xl font-bold mb-6">Adi Experience?</h2>
      <p className="text-lg">
        Saya juga banyak mengikuti perlombaan dengan banyak kegagalan dan juga
        kemenangan, serta tetap menggarap project yang ada di Ciboox Indonesia
      </p>

      <ExTabs />
    </section>
  );
}
