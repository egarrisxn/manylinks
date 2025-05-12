import { Button } from "@/components/ui/button";

export function IconButton({ children }: { children: React.ReactNode }) {
  return (
    <Button className='h-[50px] w-[150px] rounded-[30px] border border-[#8F9092] bg-gradient-to-t from-[#D8D9DB] via-white to-[#FDFDFD] font-sans text-sm font-semibold text-[#606060] shadow-sm transition-all duration-200 ease-in-out outline-none hover:shadow-[0_4px_3px_1px_#FCFCFC,0_6px_8px_#D6D7D9,0_-4px_4px_#CECFD1,0_-6px_4px_#FEFEFE,inset_0_0_3px_3px_#CECFD1] focus-visible:shadow-[0_4px_3px_1px_#FCFCFC,0_6px_8px_#D6D7D9,0_-4px_4px_#CECFD1,0_-6px_4px_#FEFEFE,inset_0_0_5px_3px_#999,inset_0_0_30px_#aaa] active:shadow-[0_4px_3px_1px_#FCFCFC,0_6px_8px_#D6D7D9,0_-4px_4px_#CECFD1,0_-6px_4px_#FEFEFE,inset_0_0_5px_3px_#999,inset_0_0_30px_#aaa]'>
      {children}
    </Button>
  );
}
