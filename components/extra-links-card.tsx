import { Icon } from "@iconify/react";

interface ExtraLinksCardProps {
  label: string;
  url: string;
  icon?: string;
}

export default function ExtraLinksCard({
  label,
  url,
  icon,
}: ExtraLinksCardProps) {
  return (
    <li>
      {label && url && (
        <a href={url} target='_blank'>
          <dt className='group bg-accent/80 group-hover:bg-accent shadow-base rounded-base -m-1 flex items-center space-x-2 p-1'>
            <div className='text-accent-foreground/80 group-hover:text-accent-foreground rounded-base flex size-10 shrink-0 items-center justify-center'>
              {icon ? (
                <Icon icon={icon} className='size-5' />
              ) : (
                <Icon icon='ph:link-simple' className='size-5' />
              )}
            </div>
            <div className='w-full min-w-0 grow'>
              <p className='group-hover:text-accent-foreground text-accent-foreground/80 text-sm leading-6 font-medium'>
                {label}
              </p>
            </div>
          </dt>
        </a>
      )}
    </li>
  );
}
