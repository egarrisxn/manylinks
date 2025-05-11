import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import BackgroundSelectGrid from "./background-select-grid";

export default function BackgroundSelectShell() {
  return (
    <Card className='mb-3 w-full border-none shadow-none'>
      <CardHeader>
        <CardTitle className='flex'>
          <span className='to-primary bg-gradient-to-tl from-blue-900 bg-clip-text text-3xl font-bold text-transparent'>
            Profile Background
          </span>
        </CardTitle>
        <CardDescription className='text-muted-foreground font-medium'>
          Choose the background for your site here.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <BackgroundSelectGrid />
      </CardContent>
    </Card>
  );
}
