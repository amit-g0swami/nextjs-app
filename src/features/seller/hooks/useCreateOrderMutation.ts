import SellerService from '../seller.service'
// import useSellerStore from '../store/seller.store'
import { ICreateOrderPayload } from '../seller.interface'
import { useMutation } from '@tanstack/react-query'

export const useCreateOrderMutation = () => {
  // const { setSelected } = useSellerStore()
  return useMutation({
    mutationFn: (createOrderPayload: ICreateOrderPayload) => {
      return SellerService.createOrder(createOrderPayload)
    },
    onSuccess: (data) => {
      //   {
      //     "message": "Order created successfully",
      //     "order": {
      //         "sellerId": "65bfcd8ad579297be5b611f6",
      //         "buyerDetails": {
      //             "fullName": "test",
      //             "email": "amit@gmail.com",
      //             "mobileNumber": "1234567890"
      //         },
      //         "orderPlaced": {
      //             "completeAddress": "test",
      //             "landMark": "test",
      //             "pinCode": "123456",
      //             "city": "test",
      //             "state": "test",
      //             "country": "test"
      //         },
      //         "orderDetails": [
      //             {
      //                 "productName": "test",
      //                 "quantity": 1,
      //                 "unitPrice": 1,
      //                 "totalAmount": 1,
      //                 "_id": "65c908e7d04343c567dd9a63"
      //             }
      //         ],
      //         "packageDetails": {
      //             "deadWeight": 1,
      //             "packageDimension": {
      //                 "length": 1,
      //                 "width": 1,
      //                 "height": 1
      //             }
      //         },
      //         "paymentDetails": {
      //             "paymentMode": "COD"
      //         },
      //         "_id": "65c908e7d04343c567dd9a62",
      //         "__v": 0
      //     },
      //     "status": 201
      // }
    },
    onError: () => {}
  })
}
