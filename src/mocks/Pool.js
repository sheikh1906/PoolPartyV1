import { ProfileImageSrc } from "../mocks/ProfileImageSrc";

export function GetPools(){
    return(
        [
            {            
            _id: 1,
            name: "Dunder Mifflin Office Pool",
            description: "This is the Dunder Mifflin Pool",
            drawings: [
                { 
                    _id: 1,
                    name: "PowerBall",
                    description: "No idea what this is, but it sounds good."
                    },
                 { 
                    _id: 2,
                    name: "Texas Mega Millions",
                    description: "The big one in Texas. Lots of money to be had. Drawings are Wednesdays and Saturdays."
                }
            ],
            status: "Active",
            tier: 0,
            owner: { 
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
            },
            members: [
                1234, 1235, 1236
             ]
        },
        {
            _id: 2,
            name: "Spacely Sprockets",
            description: "This is the Spacely Sprockets Pool",
            drawings: [
                { 
                    _id: 1,
                    name: "PowerBall",
                    description: "No idea what this is, but it sounds good."
                    },
                 { 
                    _id: 2,
                    name: "Texas Mega Millions",
                    description: "The big one in Texas. Lots of money to be had. Drawings are Wednesdays and Saturdays."
                }
            ],
            status: "Active",
            tier: 0,
            owner: { 
                _id: 1235,
                image: {
                    data: ProfileImageSrc(),
                    contentType: 'jpeg'
                },
                fullName: "George Jetson",
                paymentLinks: [
                { name: "Venmo",
                    url: "http://venmo.to/1234"
                    },
                { name: "PayPal", url: "http://paypal.me/1234"}
                ]
            },
            members: [
                1234, 1235, 1236
             ]
        },
        {
            _id: 3,
            name: "Bedrock Quary Tar Pit",
            description: "This is the Bedrock Quary Pool",
            drawings: [
                { 
                    _id: 1,
                    name: "PowerBall",
                    description: "No idea what this is, but it sounds good."
                    },
                 { 
                    _id: 2,
                    name: "Texas Mega Millions",
                    description: "The big one in Texas. Lots of money to be had. Drawings are Wednesdays and Saturdays."
                }
            ],
            status: "Active",
            tier: 0,
            owner: { 
                _id: 1236,
                image: {
                    data: ProfileImageSrc(),
                    contentType: 'jpeg'
                },
                fullName: "Fred Flintstone",
                paymentLinks: [
                { name: "Venmo",
                    url: "http://venmo.to/1234"
                    },
                { name: "PayPal", url: "http://paypal.me/1234"}
                ]
            },
            members: [
                1234, 1235, 1236
             ]
        }
    ]
    );
}

export function GetPool(id){
    const pools = GetPools();
    const pool = pools.find((p) => p._id === id);
    return pool;
}