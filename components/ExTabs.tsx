"use client";
import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const DataTabList = [{ name: "Competition" }, { name: "Work" }];

const dataExperience = [
  {
    for: "Competition",
    details: [
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
        name: "Web Design Competition",
        title: "Winner",
        organizer: "Udayana University",
        date: "2022, March 24",
      },
      {
        name: "Playbox Season 3",
        title: "Level 2",
        organizer: "Telkom Surabaya Institute of Technology",
        date: "2022, June 17",
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
    ],
  },
  {
    for: "Work",
    details: [
      {
        name: "SiAbsen",
        title: "UI/UX",
        organizer: "Ciboox Indonesia",
        date: "2022, March 24",
      },
      {
        name: "Mlengsoy",
        title: "UI/UX",
        organizer: "Ciboox Indonesia",
        date: "2021, August 17",
      },
      {
        name: "Benerin App",
        title: "UI/UX",
        organizer: "Ciboox Indonesia",
        date: "2021, August 17",
      },
      {
        name: "Plantani App",
        title: "UI/UX",
        organizer: "Ciboox Indonesia",
        date: "2021, August 17",
      },
      {
        name: "Vragio",
        title: "UI/UX & Frontend",
        organizer: "Ciboox Indonesia",
        date: "2021, August 17",
      },
      {
        name: "Sinar Berkah Ornament",
        title: "UI/UX",
        organizer: "Ciboox Indonesia",
        date: "2021, August 17",
      },
      {
        name: "PPDB MIN 1 Malang",
        title: "UI/UX & Frontend",
        organizer: "Ciboox Indonesia",
        date: "2021, August 17",
      },
      {
        name: "Sports Analytic",
        title: "UI/UX & Frontend",
        organizer: "Ciboox Indonesia",
        date: "On Proggress",
      },
    ],
  },
];

export default function ExTabs() {
  const [activeTab, setActiveTab] = useState(0);

  const handleActiveSelect = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div>
      <Tabs
        selectedIndex={activeTab}
        onSelect={handleActiveSelect}
        className={"mt-6"}
      >
        <TabList className={"flex w-72"}>
          {DataTabList.map((data, index) => {
            return (
              <Tab
                key={index}
                className={`
                  h-12 w-1/2 text-lg text-center text-secondary py-2 font-bold outline-none hover:border-b-[3px] hover:border-secondary ${
                    activeTab == index
                      ? "border-b-[3px] border-secondary bg-lime-400"
                      : "hover:cursor-pointer hover:bg-lime-400"
                  }
                  `}
              >
                {data.name}
              </Tab>
            );
          })}
        </TabList>
        {dataExperience.map((data, index) => {
          return (
            <TabPanel key={index}>
              {data.details.map((data, index) => {
                return (
                  <div key={index} className="mt-6">
                    <div className="h-[1.5px] w-full bg-secondary mb-2"></div>
                    <div className="flex flex-row gap-4">
                      <div className="w-1/3">
                        <h6 className="text-base font-bold ">{data.date}</h6>
                      </div>
                      <div className="w-2/3">
                        <h5 className="font-bold text-xl">
                          {`${data.title} | ${data.name}`}
                        </h5>
                        <p className="mt-1 font-medium text-base text-zinc-700">
                          {data.organizer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </TabPanel>
          );
        })}
      </Tabs>
    </div>
  );
}
