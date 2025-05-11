"use client";

import { useEffect } from "react";
import { useData } from "@/providers/data-provider";
import ProfileInfoForm from "@/components/create/profile-info-form";
import SocialLinksForm from "@/components/create/social-links-form";
import ExtraLinksForm from "@/components/create/extra-links-form";
import BackgroundSelectGrid from "@/components/create/background-select-shell";
import SampleDataButton from "@/components/create/sample-data-button";
import PublishPageButton from "@/components/create/publish-page-button";
import PreviewPageButton from "@/components/create/preview-page-button";
import IFrameMockup from "@/components/create/iframe-mockups";

export default function CreateClient() {
  const { loadPageData, isLoaded } = useData();

  useEffect(() => {
    if (!isLoaded) {
      loadPageData();
    }
  }, [isLoaded, loadPageData]);

  return (
    <>
      <div className='lg:max-w-screen-3xl mx-auto grid grid-cols-1 px-2 lg:min-h-[88vh] lg:w-full lg:grid-cols-2 lg:px-0 2xl:grid-cols-12'>
        <section className='3xl:px-2 mx-auto flex min-h-[88vh] w-full flex-col items-center justify-center px-2 py-3 lg:h-[88vh] lg:border-r 2xl:col-span-5'>
          <div className='hide_scrollbar flex w-full flex-col gap-8 overflow-y-auto px-4 pt-[5vh] pb-[10vh] lg:pt-0 lg:pb-0'>
            <ProfileInfoForm />
            <SocialLinksForm />
            <ExtraLinksForm />
            <BackgroundSelectGrid />
            <div className='grid w-full grid-cols-2 items-center justify-center gap-2 px-1 pb-4 md:gap-4'>
              <SampleDataButton />
              <PublishPageButton />
            </div>
          </div>
        </section>
        <section className='mx-auto hidden flex-col items-center justify-center border-l px-2 py-3 lg:flex lg:h-[88vh] lg:w-full 2xl:col-span-7'>
          <div className='hide_scrollbar flex w-full flex-col gap-2 overflow-y-auto px-4 lg:pt-0 lg:pb-0 2xl:mx-auto 2xl:flex-row 2xl:items-center 2xl:justify-center 2xl:gap-0'>
            <div className='mx-auto flex flex-col gap-2'>
              <p className='text-center text-xs font-bold'>
                Examples are not 100% accurate.
              </p>
              <IFrameMockup variant='laptop' />
              <IFrameMockup variant='desktop' />
            </div>
            <div className='mx-auto flex'>
              <IFrameMockup variant='mobile' />
            </div>
          </div>
        </section>
        <section className='lg:hidden'>
          <PreviewPageButton />
        </section>
      </div>
    </>
  );
}
