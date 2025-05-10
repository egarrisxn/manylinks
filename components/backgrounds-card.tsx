import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import BackgroundOptions from "./background-options";

export default function BackgroundsCard() {
  return (
    <Card className='mb-3 w-full border-none shadow-none'>
      <CardHeader>
        <CardTitle className='text-3xl'>Profile Background</CardTitle>
        <CardDescription>Customize your background theme here.</CardDescription>
      </CardHeader>
      <CardContent>
        <BackgroundOptions />
      </CardContent>
    </Card>
  );
}
