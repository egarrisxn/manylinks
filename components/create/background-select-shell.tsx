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
        <CardTitle className='text-3xl'>Profile Background</CardTitle>
        <CardDescription>Customize your background theme here.</CardDescription>
      </CardHeader>
      <CardContent>
        <BackgroundSelectGrid />
      </CardContent>
    </Card>
  );
}
