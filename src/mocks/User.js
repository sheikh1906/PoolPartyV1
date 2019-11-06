import { ProfileImageSrc } from "../mocks/ProfileImageSrc";

export function GetUser() {
    return (
        { 
            _id: 1234,
            image: {
                data: ProfileImageSrc(),
                contentType: 'jpeg'
            },
            fullName: "Sheikh Rahman",
            paymentLinks: [
            { name: "Venmo",
                url: "http://venmo.to/1234"
                },
            { name: "PayPal", url: "http://paypal.me/1234"}
            ]
        }
    );
}