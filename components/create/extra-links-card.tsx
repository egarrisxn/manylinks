import { Icon } from "@iconify/react";

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
        <a href={url} target='_blank' className='group'>
          <dt className='flex items-center space-x-2 rounded-3xl border border-white bg-zinc-50 shadow-md group-hover:bg-white'>
            <div className='text-background/90 bg-foreground/90 flex size-12 shrink-0 items-center justify-center rounded-l-3xl pl-0.5 group-hover:bg-black group-hover:text-white'>
              {icon ? (
                <Icon icon={icon} className='size-6' />
              ) : (
                <Icon icon='ph:link-simple' className='size-6' />
              )}
            </div>

            <div className='w-full min-w-0 grow'>
              <p className='text-foreground/90 text-sm leading-5 font-semibold group-hover:text-black'>
                {label}
              </p>
            </div>
          </dt>
        </a>
      )}
    </li>
  );
}
