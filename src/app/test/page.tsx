"use client";
import { Input } from "@/components/ui/input";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { useState, FormEvent } from "react";
import axios from "axios";

interface NewTest {
  url: string;
}

export default function Test() {
  const [url, setUrl] = useState<string>("");

  const mutation = useMutation({
    mutationFn: (newTest: NewTest) => {
      return axios.post("http://localhost:8080", newTest);
    },
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    console.log(url);

    mutation.mutate({ url }); 
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex text-[#E83038] gap-6 px-6 py-4 bg-white rounded-[14px]"
    >
      <Input
        name="url"
        className="w-full rounded-[10px]"
        placeholder="Enter the url you want to test"
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)} 
      />
      <Button
        type="submit" 
        className="bg-[#E83038] text-white rounded-[10px]"
      >
        Test!
      </Button>
    </form>

  );
}
