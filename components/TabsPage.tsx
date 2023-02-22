"use client";
import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const TitleTabs = [
  {
    id: 0,
    title: "UI/UX",
    Head: "UI/UX's My Priority",
    subHead: "2 years experience",
    details: {
      firstSkill: "Figma",
      firstHeight: "h-[90%]",
      firstPercent: 90.32,
      secondSkill: "Research",
      secondHeight: "h-[75%]",
      secondPercent: 75.14,
      thirdSkill: "UX Solve",
      thirdHeight: "h-[84%]",
      thirdPercent: 84.96,
    },
  },
  {
    id: 1,
    title: "Frontend",
    Head: "My Support Skill",
    subHead: "2 years experience",
    details: {
      firstSkill: "React JS",
      firstHeight: "h-[88%]",
      firstPercent: 88.12,
      secondSkill: "Next JS",
      secondHeight: "h-[64%]",
      secondPercent: 64.51,
      thirdSkill: "TailwindCSS",
      thirdHeight: "h-[82%]",
      thirdPercent: 82.96,
    },
  },
  {
    id: 2,
    title: "Graphic",
    Head: "This's My Hobby",
    subHead: "Just for fun guys",
    details: {
      firstSkill: "Draw",
      firstHeight: "h-[67%]",
      firstPercent: 67.82,
      secondSkill: "A. Illustrator",
      secondHeight: "h-[74%]",
      secondPercent: 74.91,
      thirdSkill: "A. Photoshop",
      thirdHeight: "h-[56%]",
      thirdPercent: 56.91,
    },
  },
];

export default function TabsPage() {
  const [activeTab, setActiveTab] = useState(0);

  const handleActiveSelect = (index: number) => {
    setActiveTab(index);
  };

  return (
    <Tabs selectedIndex={activeTab} onSelect={handleActiveSelect}>
      <TabList className="flex">
        {TitleTabs.map((tab, index) => {
          return (
            <Tab
              key={index}
              className={`w-1/3 px-4 py-3 text-center text-base font-medium duration-75 text-primary border-b outline-none hover:bg-neutral-900 hover:border-teal-600 hover:cursor-pointer ${
                activeTab == index
                  ? "bg-neutral-900 border-teal-600"
                  : "bg-transparent border-zinc-300"
              }`}
            >
              {tab.title}
            </Tab>
          );
        })}
      </TabList>

      {TitleTabs.map((data) => {
        return (
          <TabPanel key={data.id} className={"text-white mt-6"}>
            <div className="text-center">
              <h4 className="text-2xl font-semibold text-primary">
                {data.Head}
              </h4>
              <h6 className="text-md mt-2 font-normal text-neutral-400">
                {data.subHead}
              </h6>
            </div>
            <div className="border-y border-dashed border-neutral-600 mt-4 h-64 flex gap-4">
              <div className="w-1/3 border-r border-dashed border-neutral-600 h-full flex flex-col justify-end items-center">
                <span className="text-base font-medium text-zinc-300">
                  {data.details.firstPercent}
                </span>
                <div
                  className={`${data.details.firstHeight} w-10/12 bg-primary`}
                ></div>
              </div>
              <div className="w-1/3 h-full flex flex-col justify-end items-center">
                <span className="text-base font-medium text-zinc-300">
                  {data.details.secondPercent}
                </span>
                <div
                  className={`${data.details.secondHeight} w-10/12 bg-third`}
                ></div>
              </div>
              <div className="w-1/3 border-l border-dashed border-neutral-600 h-full flex flex-col justify-end items-center">
                <span className="text-base font-medium text-zinc-300">
                  {data.details.thirdPercent}
                </span>
                <div
                  className={`${data.details.thirdHeight} w-10/12 bg-third`}
                ></div>
              </div>
            </div>
            <div className="flex mt-2 font-medium text-zinc-300">
              <div className="w-1/3 text-center">{data.details.firstSkill}</div>
              <div className="w-1/3 text-center">
                {data.details.secondSkill}
              </div>
              <div className="w-1/3 text-center">{data.details.thirdSkill}</div>
            </div>
          </TabPanel>
        );
      })}
    </Tabs>
  );
}
