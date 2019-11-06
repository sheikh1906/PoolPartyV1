import { ProfileImageSrc } from '../mocks/ProfileImageSrc';
import { TicketImageSrc } from '../mocks/TicketImageSrc';

const AllTickets =
[ 
    {
        _id: 1,
        drawing: "Texas Mega Millions",  
        drawingDate: "October 31, 2019",
        note: "This is a ticket.",
        image: { 
                data: TicketImageSrc(),
                contentType: 'jpeg'
            },
        user: { 
            _id: 1234,
            image: {
                data: ProfileImageSrc(),
                contentType: 'jpeg'
            },
            fullName: "Sheikh Rahman"
        },
        pool: { 
            _id:1, name: "Dunder Mifflin Office Pool"}
    },
    {
        _id: 2,
        drawing: "Texas Mega Millions",  
        drawingDate: "October 31, 2019",
        note: "This is a ticket.",
        image: { 
                data: TicketImageSrc(),
                contentType: 'jpeg'
            },
        user: { 
            _id: 1235,
            image: {
                data: ProfileImageSrc(),
                contentType: 'jpeg'
            },
            fullName: "Sheikh Rahman"
        },
        pool: {             _id: 2,
            name: "Spacely Sprockets",
            description: "This is the Spacely Sprockets Pool" }
    },
    {
        _id: 3,
        drawing: "Texas Mega Millions",  
        drawingDate: "October 31, 2019",
        note: "This is a ticket.",
        image: { 
                data: TicketImageSrc(),
                contentType: 'jpeg'
            },
        user: { 
            _id: 1236,
            image: {
                data: ProfileImageSrc(),
                contentType: 'jpeg'
            },
            fullName: "Sheikh Rahman"
        },
        pool: { _id:1, name: "Dunder Mifflin Office Pool"}
    },
    {
        _id: 4,
        drawing: "Texas Mega Millions",  
        drawingDate: "October 31, 2019",
        note: "This is a ticket.",
        image: { 
                data: TicketImageSrc(),
                contentType: 'jpeg'
            },
        user: { 
            _id: 1234,
            image: {
                data: ProfileImageSrc(),
                contentType: 'jpeg'
            },
            fullName: "Sheikh Rahman"
        },
        pool: { 
            _id: 2,
            name: "Spacely Sprockets",
            description: "This is the Spacely Sprockets Pool"}
    },
    {
        _id: 5,
        drawing: "Texas Mega Millions",  
        drawingDate: "October 31, 2019",
        note: "This is a ticket.",
        image: { 
                data: TicketImageSrc(),
                contentType: 'jpeg'
            },
        user: { 
            _id: 1235,
            image: {
                data: ProfileImageSrc(),
                contentType: 'jpeg'
            },
            fullName: "Sheikh Rahman"
        },
        pool: { _id: 2,
            name: "Spacely Sprockets",
            description: "This is the Spacely Sprockets Pool"}
    },
    {
        _id: 6,
        drawing: "Texas Mega Millions",  
        drawingDate: "October 31, 2019",
        note: "This is a ticket.",
        image: { 
                data: TicketImageSrc(),
                contentType: 'jpeg'
            },
        user: { 
            _id: 1236,
            image: {
                data: ProfileImageSrc(),
                contentType: 'jpeg'
            },
            fullName: "Sheikh Rahman"
        },
        pool: { _id:1, name: "Dunder Mifflin Office Pool"}
    },
    {
        _id: 7,
        drawing: "Texas Mega Millions",  
        drawingDate: "October 31, 2019",
        note: "This is a ticket.",
        image: { 
                data: TicketImageSrc(),
                contentType: 'jpeg'
            },
        user: { 
            _id: 1234,
            image: {
                data: ProfileImageSrc(),
                contentType: 'jpeg'
            },
            fullName: "Sheikh Rahman"
        },
        pool: { 
            _id:1, name: "Dunder Mifflin Office Pool"}
    },
    {
        _id: 8,
        drawing: "Texas Mega Millions",  
        drawingDate: "October 31, 2019",
        note: "This is a ticket.",
        image: { 
                data: TicketImageSrc(),
                contentType: 'jpeg'
            },
        user: { 
            _id: 1235,
            image: {
                data: ProfileImageSrc(),
                contentType: 'jpeg'
            },
            fullName: "Sheikh Rahman"
        },
        pool: { _id:1, name: "Dunder Mifflin Office Pool"}
    },
    {
        _id: 9,
        drawing: "Texas Mega Millions",  
        drawingDate: "October 31, 2019",
        note: "This is a ticket.",
        image: { 
                data: TicketImageSrc(),
                contentType: 'jpeg'
            },
        user: { 
            _id: 1236,
            image: {
                data: ProfileImageSrc(),
                contentType: 'jpeg'
            },
            fullName: "Sheikh Rahman"
        },
        pool: { _id:1, name: "Dunder Mifflin Office Pool"}
    },
    {
        _id: 10,
        drawing: "Texas Mega Millions",  
        drawingDate: "October 31, 2019",
        note: "This is a ticket.",
        image: { 
                data: TicketImageSrc(),
                contentType: 'jpeg'
            },
        user: { 
            _id: 1234,
            image: {
                data: ProfileImageSrc(),
                contentType: 'jpeg'
            },
            fullName: "Sheikh Rahman"
        },
        pool: { 
            _id: 3,
            name: "Bedrock Quary Tar Pit",
            description: "This is the Bedrock Quary Pool"}
    },
    {
        _id: 11,
        drawing: "Texas Mega Millions",  
        drawingDate: "October 31, 2019",
        note: "This is a ticket.",
        image: { 
                data: TicketImageSrc(),
                contentType: 'jpeg'
            },
        user: { 
            _id: 1235,
            image: {
                data: ProfileImageSrc(),
                contentType: 'jpeg'
            },
            fullName: "Sheikh Rahman"
        },
        pool: { _id: 3,
            name: "Bedrock Quary Tar Pit",
            description: "This is the Bedrock Quary Pool"}
    },
    {
        _id: 12,
        drawing: "Texas Mega Millions",  
        drawingDate: "October 31, 2019",
        note: "This is a ticket.",
        image: { 
                data: TicketImageSrc(),
                contentType: 'jpeg'
            },
        user: { 
            _id: 1236,
            image: {
                data: ProfileImageSrc(),
                contentType: 'jpeg'
            },
            fullName: "Sheikh Rahman"
        },
        pool: { _id: 3,
            name: "Bedrock Quary Tar Pit",
            description: "This is the Bedrock Quary Pool"}
    }
];

export const GetTickets = () => { return AllTickets; }

export const GetTicketsByPool = (id) => {
    return AllTickets.filter((t) => t.pool._id === id);
}