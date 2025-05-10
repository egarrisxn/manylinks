"use client";

import { useData } from "@/providers/data-provider";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

type InputChangeEvent = React.ChangeEvent<
  HTMLInputElement | HTMLTextAreaElement
>;

export default function ProfileForm() {
  const { data, updateProfileInfo } = useData();

  const handleInputChange = (event: InputChangeEvent) => {
    const { name, value } = event.target;
    updateProfileInfo(name, value);
  };

  return (
    <Card className='mb-3 w-full border-none shadow-none'>
      <CardHeader>
        <CardTitle className='text-3xl'>Profile Information</CardTitle>
        <CardDescription>
          Enter your profile or title information here.
        </CardDescription>
      </CardHeader>
      <CardContent className='grid gap-4'>
        <div className='grid gap-4 md:grid-cols-2'>
          <div className='grid gap-2'>
            <Label htmlFor='name'>Name</Label>
            <Input
              id='name'
              name='name'
              type='text'
              placeholder='Jane Doe'
              value={data.name}
              onChange={handleInputChange}
            />
          </div>
          <div className='grid gap-2'>
            <Label htmlFor='Profile-url'>Image Url</Label>
            <Input
              id='Profile-url'
              name='image'
              type='url'
              placeholder='mypage.com/avatar.png'
              value={data.image}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className='grid gap-2'>
          <Label htmlFor='username'>Username (URL Endpoint)</Label>
          <Input
            id='username'
            name='username'
            type='text'
            placeholder='manylinks.vercel.app/[username]'
            value={data.username}
            onChange={handleInputChange}
          />
        </div>
        <div className='grid gap-2'>
          <Label htmlFor='description'>Brief Description</Label>
          <Textarea
            id='description'
            name='description'
            placeholder='Tell us a little more about yourself...'
            value={data.description}
            onChange={handleInputChange}
          />
        </div>
      </CardContent>
    </Card>
  );
}
