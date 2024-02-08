import useCustomerStore from "./store/customer.store";
import { BackGroundDiv } from "@/features/shared/components/BackGroundDiv";
import { UserAuth } from "../shared/contexts/AuthContext";
import { Container } from "@/components/atoms/container";
import { Text } from "@/components/atoms/text";
import { useLocalStorage } from "../shared/hooks/useLocalStorage";
import { ROUTES, USE_LOCAL_STORAGE } from "@/shared/shared.interface";
import { PlusCircleIcon } from "@heroicons/react/20/solid";
import { Modal } from "@/components/molecules/modal";
import { CustomSearch } from "@/components/organisms/custom-search";
import { useGetSearchedSeller } from "./hooks/useGetSearchedSeller";
import { useAddSellerMutation } from "./hooks/useAddSellerMutation";
import { useRouter } from "next/navigation";

export const CustomerComponent = () => {
  const router = useRouter();
  const { user } = UserAuth();
  const { getItem } = useLocalStorage(USE_LOCAL_STORAGE.USER_SELLED_ID);
  const { getItem: getUserId } = useLocalStorage(
    USE_LOCAL_STORAGE.USER_DETAILS
  );
  const sellerIdValue = getItem();
  const userIdValue = getUserId();
  const sellerId = sellerIdValue ? JSON.parse(sellerIdValue as string) : null;
  const userId = userIdValue ? JSON.parse(userIdValue as string) : null;

  const { isAddSellerIdModelOpen } = useCustomerStore();
  const { searchedSellerId } = useCustomerStore();
  const { setIsAddSellerIdModelOpen } = useCustomerStore();
  const { setSearchedSellerId } = useCustomerStore();

  const { data: searchedSeller } = useGetSearchedSeller(searchedSellerId);
  const useAddSellerMutate = useAddSellerMutation();

  const handleAddSeller = () => {
    setIsAddSellerIdModelOpen(true);
  };

  const handleCloseModal = () => {
    setIsAddSellerIdModelOpen(false);
    setSearchedSellerId(null);
  };

  const handleAddOrderClicked = () => {
    router.push(ROUTES.CUSTOMER_CREATE_ORDER.replace("[id]", `${sellerId}`));
  };

  const handleAddSellerMutate = (sellerId: string) => {
    const addSellerIdPayload = {
      userId,
      sellerId,
    };
    useAddSellerMutate.mutate(addSellerIdPayload);
  };

  return (
    <Container className="bg-white py-10 sm:py-14 h-screen">
      <BackGroundDiv>
        <Container>
          <Container className="px-4 sm:px-0">
            <Text
              as="h3"
              className="text-base font-semibold leading-7 text-gray-900"
            >
              Customer Information
            </Text>
          </Container>
          <Container className="mt-6 border-t border-gray-100">
            <dl className="divide-y divide-gray-100">
              <Container className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Full name
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {user?.displayName}
                </dd>
              </Container>
              <Container className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Email address
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {user?.email}
                </dd>
              </Container>
              <Container className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Seller
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {sellerId === null ? (
                    <Container
                      className="flex cursor-pointer"
                      onClick={() => handleAddSeller()}
                    >
                      <PlusCircleIcon className="mr-2 h-5 w-5" />
                      Add Seller
                    </Container>
                  ) : (
                    sellerId
                  )}
                </dd>
              </Container>
              {sellerId !== null && (
                <Container className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Add Order
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    <Container
                      className="flex cursor-pointer"
                      onClick={() => handleAddOrderClicked()}
                    >
                      <PlusCircleIcon className="mr-2 h-5 w-5" />
                      Add Order
                    </Container>
                  </dd>
                </Container>
              )}
            </dl>
          </Container>
        </Container>
      </BackGroundDiv>

      <Modal
        isOpen={isAddSellerIdModelOpen}
        title="Add SellerId"
        content={
          <Container>
            <CustomSearch
              name="sellerId"
              placeholder="Please Enter SellerId"
              type="text"
              charLimit={23}
              getSuggestions={(value) => setSearchedSellerId(value)}
              handleEmptyInput={() => setSearchedSellerId(null)}
            />
            {searchedSeller && (
              <Container
                className="mt-2 cursor-pointer hover:bg-gray-100 p-2 rounded-md"
                onClick={() => handleAddSellerMutate(searchedSeller._id)}
              >
                <Text as="h2" className="text-sm font-semibold text-gray-900">
                  {searchedSeller.name}
                </Text>
                <Text as="p" className="text-xs text-gray-600">
                  {searchedSeller.email}
                </Text>
              </Container>
            )}
          </Container>
        }
        onClose={handleCloseModal}
      />
    </Container>
  );
};
