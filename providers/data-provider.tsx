"use client";

import React, { createContext, useContext, useState } from "react";
import type { ExtraLinkProps, DataProps } from "@/types";
import { toast } from "sonner";

interface DataContextType {
  data: DataProps;
  addNewData: (userData: ExtraLinkProps) => void;
  updateIndex: (updatedIndex: ExtraLinkProps[]) => void;
  updateProfileInfo: (name: string, value: string) => void;
  updateSocialInfo: (name: string, value: string) => void;
  updateAdditionalInfo: (updatedIndex: ExtraLinkProps[]) => void;
  showSample: () => void;
  selectBackground: (bgcode: string) => void;
  savePageData: () => Promise<boolean | { error: string }>;
}

const initialData: DataProps = {
  n: "",
  i: "",
  u: "",
  d: "",
  e: "",
  gh: "",
  l: "",
  y: "",
  bl: "",
  t: "",
  ig: "",
  w: "",
  tg: "",
  f: "",
  bg: "",
  ls: [],
};

const sampleData: DataProps = {
  n: "Jane Doe",
  i: "https://manylinks.vercel.app/user.png",
  u: "janedoe",
  d: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent egestas ullamcorper vulputate. Curabitur finibus lorem et dolor lobortis facilisis.",
  e: "jan_doe@email.com",
  gh: "https://github.com/jane_doe",
  l: "https://linkedin.com/jane_doe",
  y: "https://youtube.com/@jane_doe",
  bl: "https://bsky.app/profile/janedoe.bsky.social",
  t: "https://twitter.com/jane_doe",
  ig: "https://www.instagram.com/jane_doe",
  w: "+15555555555",
  tg: "https://t.me/jane_doe",
  f: "https://www.facebook.com/jane_doe",

  bg: "#4F4F4F",
  ls: [
    {
      id: 1,
      i: "tabler:world-www",
      l: "Website",
      u: "https://manylinks.vercel.app",
    },
    {
      id: 2,
      i: "tabler:user-edit",
      l: "Blog",
      u: "https://manylinks.vercel.app",
    },
    {
      id: 3,
      i: "tabler:brand-discord",
      l: "Discord",
      u: "https://manylinks.vercel.app",
    },
    {
      id: 4,
      i: "tabler:brand-spotify",
      l: "Spotify",
      u: "https://manylinks.vercel.app",
    },
    {
      id: 5,
      i: "tabler:brand-threads",
      l: "Threads",
      u: "https://manylinks.vercel.app",
    },
  ],
};

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider = ({ children }: { children: React.ReactNode }) => {
  const [data, setData] = useState<DataProps>(initialData);

  const selectBackground = (bgcode: string) => {
    setData((prevState) => ({
      ...prevState,
      bg: bgcode,
    }));
  };

  const addNewData = (userData: ExtraLinkProps) => {
    setData((prevData) => ({
      ...prevData,
      ls: [...prevData.ls, userData],
    }));
  };

  const updateIndex = (updatedIndex: ExtraLinkProps[]) => {
    setData((prevState) => ({
      ...prevState,
      ls: updatedIndex,
    }));
  };

  const updateAdditionalInfo = (updatedIndex: ExtraLinkProps[]) => {
    setData((prevState) => ({
      ...prevState,
      ls: updatedIndex,
    }));
  };

  const updateProfileInfo = (name: string, value: string) => {
    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const updateSocialInfo = (name: string, value: string) => {
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const showSample = () => {
    setData(sampleData);
  };

  const savePageData = async () => {
    try {
      const response = await fetch("/api/user/save", {
        // Your existing save API route
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success("Your page data has been saved!");
        return true;
      } else {
        const errorData = await response.json();
        toast.error(
          errorData?.message || "Failed to save data. Please try again."
        );
        return { error: errorData?.message || "Failed to save data." };
      }
    } catch (error: any) {
      console.error("Error saving data:", error);
      toast.error("An unexpected error occurred while saving.");
      return { error: error.message || "An unexpected error occurred." };
    }
  };

  return (
    <DataContext.Provider
      value={{
        data,
        addNewData,
        updateIndex,
        updateProfileInfo,
        updateSocialInfo,
        updateAdditionalInfo,
        showSample,
        selectBackground,
        savePageData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
};
