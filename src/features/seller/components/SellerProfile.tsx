import { UserAuth } from "@/features/shared/contexts/AuthContext";

export const SellerProfile = () => {
  const { user } = UserAuth();
  return (
    <div className="pb-3">
      <div className="flex items-center">
        <div className="">
          <div className="text-base font-medium leading-none text-gray-600">
            {user?.displayName}
          </div>
          <div className="text-sm font-medium leading-none text-gray-500">
            {user?.email}
          </div>
        </div>
      </div>
    </div>
  );
};
