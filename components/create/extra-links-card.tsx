import { Icon } from "@iconify/react";

//! Version 1
export default function ExtraLinksCard({
  label,
  url,
  icon,
}: {
  label: string;
  url: string;
  icon?: string;
}) {
  return (
    <li>
      {label && url && (
        <a
          href={url}
          target='_blank'
          rel='noopener noreferrer'
          className='group'
        >
          <dt className='flex items-center space-x-2 rounded-3xl border border-[#8F9092] bg-gradient-to-t from-[#D8D9DB] via-white to-[#FDFDFD] text-sm text-[#606060] shadow-sm transition-all duration-200 ease-in-out hover:shadow-[0_4px_3px_1px_#FCFCFC,0_6px_8px_#D6D7D9,0_-4px_4px_#CECFD1,0_-6px_4px_#FEFEFE,inset_0_0_3px_3px_#CECFD1] focus-visible:shadow-[0_4px_3px_1px_#FCFCFC,0_6px_8px_#D6D7D9,0_-4px_4px_#CECFD1,0_-6px_4px_#FEFEFE,inset_0_0_5px_3px_#999,inset_0_0_30px_#aaa] active:shadow-[0_4px_3px_1px_#FCFCFC,0_6px_8px_#D6D7D9,0_-4px_4px_#CECFD1,0_-6px_4px_#FEFEFE,inset_0_0_5px_3px_#999,inset_0_0_30px_#aaa]'>
            <div className='flex size-12 shrink-0 items-center justify-center pl-0.5 group-hover:text-black'>
              {icon ? (
                <Icon icon={icon} className='size-6' />
              ) : (
                <Icon icon='ph:link-simple' className='size-6' />
              )}
            </div>

            <div className='w-full min-w-0 grow'>
              <p className='pl-0.5 group-hover:text-black'>{label}</p>
            </div>
          </dt>
        </a>
      )}
    </li>
  );
}
