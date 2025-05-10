"use client";

import React, { createContext, useContext, useState } from "react";
import { toast } from "sonner";

import type { ExtraLinkProps, DataProps } from "@/types";

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
  name: "",
  image: "",
  username: "",
  description: "",
  bg: "",
  em: "",
  gh: "",
  li: "",
  yo: "",
  bl: "",
  tw: "",
  sp: "",
  di: "",
  ig: "",
  th: "",
  pe: "",
  ma: "",
  fa: "",
  ti: "",
  ls: [],
};

const sampleData: DataProps = {
  name: "Jane Doe",
  image: "https://manylinks.vercel.app/user.png",
  username: "janedoe",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent egestas ullamcorper vulputate. Curabitur finibus lorem et dolor lobortis facilisis.",
  bg: "#4F4F4F",
  em: "jan_doe@email.com",
  gh: "https://github.com/jane_d0e",
  li: "https://linkedin.com/in/jane-d0e",
  yo: "https://youtube.com/@jane_d0e",
  bl: "https://bsky.app/profile/jane_d0e.bsky.social",
  tw: "https://twitter.com/jane_d0e",
  sp: "https://spotify.com/jae_d0e",
  di: "https://discord.com/channels/@jane_d0e",
  ig: "https://instagram.com/jane__d0e",
  th: "https://threads.com/@jane_d0e",
  pe: "https://peerlist.io/jan_d0e",
  ma: "https://mastodon.social/@jane_d0e",
  fa: "https://facebook.com/janed0e",
  ti: "https://tiktok.com/jae_d0e",

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
      i: "tabler:image-in-picture",
      l: "Portfolio",
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
