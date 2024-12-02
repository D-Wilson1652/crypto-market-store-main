export type SellerTypes = {
    id: string;
    name: string;
    img: string;
    email: string;
    memberSince: string;
    languages: string[];
    sellRate: number;
    totalListings: number;
    totalSales: number;
    phone: string;
};

export const sellersInfo: SellerTypes[] = [
    {
        id: "1",
        name: "John Doe",
        img: "https://randomuser.me/api/portraits/men/10.jpg",
        email: "seller@example.com",
        memberSince: "Jan 2021",
        languages: ["English", "Spanish"],
        sellRate: 90,
        totalListings: 10,
        totalSales: 5,
        phone: "+1234567890",
    },
    {
        id: "2",
        name: "Tony Gandalf",
        img: "https://randomuser.me/api/portraits/men/9.jpg",
        email: "seller2@example.com",
        memberSince: "Feb 2022",
        languages: ["English", "French"],
        sellRate: 80,
        totalListings: 50,
        totalSales: 2,
        phone: "+1234567820",
    },
    {
        id: "3",
        name: "Jane Doe",
        img: "https://randomuser.me/api/portraits/women/8.jpg",
        email: "seller3@example.com",
        memberSince: "Mar 2023",
        languages: ["English", "German"],
        sellRate: 70,
        totalListings: 100,
        totalSales: 10,
        phone: "+1234567891",
    },
    {
        id: "4",
        name: "Marry Jane",
        img: "https://randomuser.me/api/portraits/women/7.jpg",
        email: "seller4@example.com",
        memberSince: "Apr 2024",
        languages: ["English", "Italian"],
        sellRate: 60,
        totalListings: 200,
        totalSales: 15,
        phone: "+1234567892",
    },
];
