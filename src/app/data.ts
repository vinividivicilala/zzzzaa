export type Item = {
    title: string;
    description: string;
    date: string;
    highlight?: boolean;
    detail?: {
        link: string;
        linkLabel: string;
        image?: string;
    };
};

const learnMore = "Learn more";
const github = "View on GitHub";
const game = "Try the game";

export const careerItems: Item[] = [
    {
        title: "PT. Kereta Commuter Indonesia",
        description: "worked on repair component and other ",
        date: "2018",
    },
	];
export const projectItems: Item[] = [
    {
        title: "Network Architectures",
        description: "course certificate",
        date: "Januari 2024",
    },
    {
        title: "Network Fundamental",
        description: "course certificate",
            
        date: "Januari 2024",
    },
    {
        title: "Neural Network Fundamentals",
        description: "course certificate",
            
        date: "Januari 2024",
    },
    {
        title: "Optimizing Network Parameters",
        description: "course certificate",
            
        date: "Januari 2024",
    },
    {
        title: "Pemrograman Python untuk Pemula",
        description: "course certificate",
        date: "Januari Januari 2024",
    },
    {
        title: "Product Strategy Fundamentals: From Idea to Market Success",
        description: "course certificate",
        date: "Januari 2024",
    },
    {
        title: "Proyek Sederhana Svelte - Todo App",
        description: "course certificate",
        date: "Januari 2024",
    },
    {
        title: "Python Fundamental",
        description: "course certificate",
        date: "Januari 2024",
    },
];
