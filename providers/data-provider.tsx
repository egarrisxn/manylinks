"use client";

import React, { createContext, useContext, useState } from "react";
import { toast } from "sonner";
import { catchError } from "@/lib/utils";
import {
  initialData,
  sampleData,
  saveUserData,
  loadUserData,
} from "@/lib/data";

import type { DataContextType, DataProps, ExtraLinkProps } from "@/types";

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider = ({ children }: { children: React.ReactNode }) => {
  const [data, setData] = useState<DataProps>(initialData);
  const [isLoaded, setIsLoaded] = useState(false);

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

  const updateProfileInfo = (name: string, value: string) => {
    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const updateAdditionalInfo = (updatedIndex: ExtraLinkProps[]) => {
    setData((prevState) => ({
      ...prevState,
      ls: updatedIndex,
    }));
  };

  const updateSocialInfo = (name: string, value: string) => {
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const selectBackground = (bgcode: string) => {
    setData((prevState) => ({
      ...prevState,
      background: bgcode,
    }));
  };

  const showSample = () => {
    setData(sampleData);
  };

  const savePageData = async () => {
    try {
      const result = await saveUserData(data);
      if (result?.success === true) {
        toast.success("Your page data has been saved!");
        return true;
      } else if (result && result.error) {
        toast.error(result.error);
        return { error: result.error };
      }
      return { error: "An unexpected error occurred." };
    } catch (error) {
      catchError(error);
      return { error: "An unexpected error occurred." };
    }
  };

  const loadPageData = async () => {
    if (isLoaded) return;
    try {
      const savedData = await loadUserData();
      if (savedData) {
        setData({
          name: savedData.name || "",
          image: savedData.profileUrl || "",
          username: savedData.username || "",
          description: savedData.description || "",
          background: savedData.background || "",
          email: savedData.email || "",
          github: savedData.github || "",
          linkedin: savedData.linkedin || "",
          youtube: savedData.youtube || "",
          bluesky: savedData.bluesky || "",
          twitter: savedData.twitter || "",
          spotify: savedData.spotify || "",
          discord: savedData.discord || "",
          instagram: savedData.instagram || "",
          threads: savedData.threads || "",
          peerlist: savedData.peerlist || "",
          mastodon: savedData.mastodon || "",
          facebook: savedData.facebook || "",
          tiktok: savedData.tiktok || "",
          ls: savedData.extraLinks || [],
        });
        setIsLoaded(true);
      }
    } catch (error) {
      catchError(error);
    }
  };

  return (
    <DataContext.Provider
      value={{
        data,
        isLoaded,
        addNewData,
        updateIndex,
        updateProfileInfo,
        updateSocialInfo,
        updateAdditionalInfo,
        showSample,
        selectBackground,
        savePageData,
        loadPageData,
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
