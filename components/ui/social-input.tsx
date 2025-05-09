import * as React from "react";
import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  icon: string;
}

const SocialInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, icon: propIcon, ...props }, ref) => {
    return (
      <div className='relative'>
        <Icon
          icon={propIcon}
          className='absolute top-2/4 left-2.5 size-5 translate-y-[-50%]'
        />
        <input
          type='search'
          className={cn(
            "bg-secondary selection:bg-primary selection:text-primary-foreground text-foreground placeholder:text-foreground/50 focus-visible:ring-ring flex h-10 w-full rounded-sm border-2 px-3 py-2 pl-10 text-sm file:border-0 file:bg-transparent file:text-sm file:font-bold focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);
SocialInput.displayName = "SocialInput";

export { SocialInput };
