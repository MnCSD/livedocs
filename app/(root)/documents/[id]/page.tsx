import { Editor } from "@/components/editor/Editor";
import Header from "@/components/header";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import React from "react";

const Document = () => {
  return (
    <div>
      <Header>
        <div className="flex w-fit items-center justify-center">
          <p className="document-title">Document Title</p>
        </div>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </Header>

      <Editor />
    </div>
  );
};

export default Document;
