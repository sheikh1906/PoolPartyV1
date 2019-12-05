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
            ],
            bio: "I am a Texas transplant native of New Orleans. I love good food, good music, and being a Dad."
        }
    );
}