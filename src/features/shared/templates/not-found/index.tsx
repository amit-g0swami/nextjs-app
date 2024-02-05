import Link from "next/link";
import { BackGroundDiv } from "@/features/shared/components/BackGroundDiv";

export const NotFoundComponent = () => {
  return (
    <div className="bg-white py-24 sm:py-32 h-screen flex items-center justify-center">
      <BackGroundDiv>
        <div className="flex gap-1 ml-auto flex-col ">
          <h2 className="text-4xl text-neutral-800">404 Not Found</h2>
          <p className="text-neutral-600">Could not find requested resource</p>
          <Link href="/" className="text-neutral-600">
            Return Home <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </BackGroundDiv>
    </div>
  );
};
